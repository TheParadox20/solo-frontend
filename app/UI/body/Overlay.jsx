'use client'
import { useEffect } from "react"

export default function Overlay({children, className,id, control}){
    useEffect(()=>{
        let overlay = document.getElementById(id);
        if (!overlay) {
            console.error(`Overlay element with id '${id}' not found`);
            return;
        }
        if(id!=undefined){
            overlay.addEventListener('click', e=>{
                if(e.target.id == id){
                    control('')
                }
            })
        }
        //stop bubbling of click event from children
        let children = document.getElementById('children');
        children.addEventListener('click', e=>{
            e.stopPropagation();
        })
    },[])
    
    return(
        <div id={id} className={`fixed flex items-center justify-center z-50 w-lvw h-lvh top-0 left-0 bg-black bg-opacity-40 ${className}`}>
            <div id="children">{children}</div>
        </div>
    )
}