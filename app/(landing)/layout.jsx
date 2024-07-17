'use client'
import { TopMenu, MobileTopMenu, MobileBottomMenu, MobileSideMenu } from "@/app/UI/Menus";
import Place from "@/app/UI/Place";

export default function LandingLayout({children}) {
    return (
      <div>
        <>
        <TopMenu/>
        <MobileTopMenu/>
        <MobileSideMenu/>
        </>
          {children}
        <div className="md:hidden sticky bottom-0"><div id="place" className="hidden sticky bottom-0 mb-4 mx-auto bg-primary-dark rounded-lg pb-2"><Place/></div></div>
        <MobileBottomMenu/>
      </div>
    );
  }