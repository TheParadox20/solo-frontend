import { SportsMenu, MobileSportsMenu } from "@/app/UI/Menus";
import Betslip from "@/app/UI/Betslip";
import Breadcrumb from "@/app/UI/Breadcrumb";

export default function GamesLayout({children}){
    return (
        <div className="flex flex-col md:flex-row">
            <MobileSportsMenu/>
            <SportsMenu/>
            <Breadcrumb/>
            <div className="mx-auto md:w-1/2">
                {children}
            </div>
            <Betslip/>
        </div>
    )
}