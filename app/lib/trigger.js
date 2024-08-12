export function placeE(game){
    window.dispatchEvent(new CustomEvent("place", { detail: {game}}));
}

export function overlayE(page){
    window.dispatchEvent(new CustomEvent("overlay", { detail: {page}}));
}

export function popupE(state, message){
    window.dispatchEvent(new CustomEvent("popup", { detail: {state:state, message:message}}));
}

export function verifyE(){
    //sent the event to all elemets of type input
    let inputs = document.getElementsByTagName('input')
    for (let input of inputs){
        input.dispatchEvent(new CustomEvent("verify"));
    }
}