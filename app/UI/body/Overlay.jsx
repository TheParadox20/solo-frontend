'use client'
import { useEffect } from "react"

export default function Overlay({children, className, id, control}){
    useEffect(() => {
        let overlay = document.getElementById(id);
        if (!overlay) {
            console.error(`Overlay element with id '${id}' not found`);
            return;
        }
        if (id !== undefined) {
            const handleClick = (e) => {
                if (e.target.id === id) {
                    control('')
                }
            };
            overlay.addEventListener('click', handleClick);

            // Cleanup event listener on component unmount
            return () => {
                overlay.removeEventListener('click', handleClick);
            };
        }
    }, [id, control]);

    useEffect(() => {
        // Stop bubbling of click event from children
        let children = document.getElementById('children');
        if (children) {
            const handleChildClick = (e) => {
                e.stopPropagation();
            };
            children.addEventListener('click', handleChildClick);

            // Cleanup event listener on component unmount
            return () => {
                children.removeEventListener('click', handleChildClick);
            };
        }
    }, []); // No dependencies needed here as the event listener is static
    
    return(
        <div id={id} className={`fixed flex items-center justify-center z-50 w-lvw h-lvh top-0 left-0 bg-black bg-opacity-40 ${className}`}>
            <div id="children">{children}</div>
        </div>
    )
}
