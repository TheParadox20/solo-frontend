'use client'
import { TopMenu, MobileTopMenu, MobileBottomMenu, MobileSideMenu } from "@/app/UI/body/Menus";
import Place from "@/app/UI/games/Place";
import Overlays from "@/app/UI/body/Overlays";

export default function LandingLayout({children}) {
    return (
      <div>
        <>
        <TopMenu/>
        <MobileTopMenu/>
        <MobileSideMenu/>
        </>
          {children}
        <div className="md:hidden sticky bottom-0"><div id="placeMobile" className="hidden sticky bottom-0 mb-4 mx-auto bg-primary-dark rounded-lg pb-2"><Place/></div></div>
        <MobileBottomMenu/>
        <Overlays />
      </div>
    );
  }