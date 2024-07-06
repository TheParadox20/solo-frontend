export function save(key, value){
    localStorage.setItem(
        key,
        JSON.stringify(value)
    )
    return true;
}

export function load(key){
    if (!localStorage.getItem(key)) return null
    if (localStorage.getItem(key) == 'undefined') return null
    return JSON.parse(
        localStorage.getItem(key)
    )
}

export function remove(key){
    localStorage.removeItem(key)
}

const dbName = 'EIK';

export function saveDB(key, value) {
  return new Promise((resolve, reject) => {
    const openRequest = indexedDB.open(dbName, 1);

    openRequest.onupgradeneeded = function() {
      const db = openRequest.result;
      if (!db.objectStoreNames.contains(key)) {
        db.createObjectStore(key);
      }
    };

    openRequest.onsuccess = function() {
      const db = openRequest.result;
      const transaction = db.transaction(key, 'readwrite');
      const store = transaction.objectStore(key);
      const request = store.put(value, key);

      request.onsuccess = function() {
        resolve(true);
      };

      request.onerror = function() {
        reject(request.error);
      };
    };

    openRequest.onerror = function() {
      reject(openRequest.error);
    };
  });
}

export function loadDB(key) {
  return new Promise((resolve, reject) => {
    const openRequest = indexedDB.open(dbName, 1);

    openRequest.onsuccess = function() {
    const db = openRequest.result;
    try{
        const transaction = db.transaction(key, 'readonly');
        const store = transaction.objectStore(key);
        const request = store.get(key);

        request.onsuccess = function() {
            resolve(request.result);
        };

        request.onerror = function() {
            reject(request.error);
        }; 
    } catch(e){
        reject(e)
    }
    };

    openRequest.onerror = function() {
      reject(openRequest.error);
    };
  });
}

export function removeDB(key) {
  return new Promise((resolve, reject) => {
    const openRequest = indexedDB.open(dbName, 1);

    openRequest.onsuccess = function() {
      const db = openRequest.result;
      const transaction = db.transaction(key, 'readwrite');
      const store = transaction.objectStore(key);
      const request = store.delete(key);

      request.onsuccess = function() {
        resolve(true);
      };

      request.onerror = function() {
        reject(request.error);
      };
    };

    openRequest.onerror = function() {
      reject(openRequest.error);
    };
  });
}