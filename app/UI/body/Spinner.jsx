export default function Spinner({full}){
    return(
        <div className={`flex items-center justify-center ${full?'w-[100vw] h-[100vh] flex-col absolute top-0 z-50':'w-full h-full'} bg-primary-dark`}>
            {
                full && <div className=''>
                            <img src="/ball2.gif" alt="balls" className="w-80 h-80 mb-8"/>
                        </div>
            }
            {
                !full && <div className="icon-[line-md--loading-alt-loop] w-24 h-24 text-primary-light"/>
            }
        </div>
    )
}