import { SportsMenu, MobileSportsMenu } from "@/app/UI/Menus";
import Betslip from "@/app/UI/Betslip";

export default function GamesLayout({children}){
    return (
        <div className="flex flex-col md:flex-row border-t-[1px] py-8 border-Grey">
            <MobileSportsMenu/>
            <div className=" w-1/6">
                <SportsMenu/>
            </div>
            <div className="mx-auto md:w-1/2">
                {children}
            </div>
            <div className="hidden md:block w-1/4 mx-auto rounded-full">
                <Betslip/>
            </div>
        </div>
    )
}