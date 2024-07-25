export default function Spinner({full}){
    return(
        <div className={`flex items-center justify-center ${full?'w-[100vw] h-[100vh] absolute top-0 z-50':'w-full h-full'} bg-primary-dark`}>
            <div className="icon-[line-md--loading-alt-loop] w-24 h-24 text-primary-light"/>
        </div>
    )
}