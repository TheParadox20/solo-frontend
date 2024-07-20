export function hide(id, duration = 300, easing = 'ease-in-out') {
    const elem = document.getElementById(id);
    const startWidth = elem.offsetWidth; // Store initial width
  
    elem.style.transition = `transform ${duration}ms ${easing}`; // Set transition
  
    elem.addEventListener('transitionend', () => {
      elem.style.transition = ''; // Remove transition after animation
      elem.style.display = 'none'; // Hide element after animation
    });
  
    elem.style.transform = `translateX(${startWidth}px)`; // Animate with initial width
}

export function show(id, duration = 300, easing = 'ease-in-out') {
    const elem = document.getElementById(id);

    elem.style.display = 'block'; // Ensure element is visible before animation
    elem.style.transition = `transform ${duration}ms ${easing}`; // Set transition

    elem.style.transform = 'translateX(0)'; // Animate back to original position
}
  
export function isVisible(id){
    return document.getElementById(id).style.display === "block";
}

export function toggle(id){
    if(isVisible(id)) nowYouDont(id);
    else nowYouSee(id);
}
export function nowYouDont(id){
    if(typeof(id) === 'string') document.getElementById(id).style.display = "none";
    if(typeof(id) === 'object'){
        for(let i of id){
            document.getElementById(i).style.display = "none";
        }
    }
}
export function nowYouSee(id){
    if(typeof(id) === 'string') document.getElementById(id).style.display = "block";
    if(typeof(id) === 'object'){
        for(let i of id){
            document.getElementById(i).style.display = "block";
        }
    }
    
}