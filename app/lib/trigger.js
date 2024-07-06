export function popupE(state, type, message){
    window.dispatchEvent(new CustomEvent("popup", { detail: {state:state, type:type, message:message}}));
}

export function promiseE(state, type, message){
    window.dispatchEvent(new CustomEvent("popup", { detail: {state:state, type:type, message:message}}));
}

export function verifyE(){
    //sent the event to all elemets of type input
    let inputs = document.getElementsByTagName('input')
    for (let input of inputs){
        input.dispatchEvent(new CustomEvent("verify"));
    }
}