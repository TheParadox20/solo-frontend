import { TopMenu, MobileTopMenu, MobileBottomMenu, MobileSideMenu } from "@/app/UI/Menus";

export default function LandingLayout({children}) {
    return (
      <div>
        <>
        <TopMenu/>
        <MobileTopMenu/>
        <MobileSideMenu/>
        </>
          {children}
        <MobileBottomMenu/>
      </div>
    );
  }