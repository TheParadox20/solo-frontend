export default function Overlay({children, className}){
    return(
        <div className={`fixed flex items-center justify-center z-50 w-lvw h-lvh top-0 left-0 bg-black bg-opacity-55 ${className}`}>
            {children}
        </div>
    )
}