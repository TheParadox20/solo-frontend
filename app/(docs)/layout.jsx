import Logo from "@/app/UI/body/Logo"

export default function LayoutDocs({children}){
    return(
        <div>
            <header className="flex justify-between py-3 border-b-[1px] border-Grey mb-4 px-2">
                <Logo/>
                <div>Search</div>
            </header>
            {children}
        </div>
    )
}