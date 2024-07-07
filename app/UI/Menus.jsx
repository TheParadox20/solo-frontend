'use client'
import Link from "next/link"
import { usePathname } from "next/navigation";
import Logo from "@/app/UI/Logo";
import { hide, show } from "@/app/lib/controlls";

export function MobileBottomMenu(){
    let pages = [
        {
            href:'/',
            icon:'icon-[hugeicons--home-01]',
            text:'Home'
        },
        {
            href:'/sports',
            icon:'icon-[solar--balls-outline]',
            text:'Sports'
        },
        {
            href:'/bets',
            icon:'icon-[carbon--ticket]',
            text:'My Bets'
        },
        {
            href:'/account',
            icon:'icon-[ph--user-circle-light]',
            text:'Account'
        }
    ]
    let pathname = usePathname();

    return(
        <div className="flex md:hidden bg-primary-base justify-around pt-3 pb-2 fixed bottom-0 w-full">
            {
                pages.map((page,i) => (
                    <Link href={page.href} key={i} className={`flex flex-col items-center ${pathname===(page.href)?'text-primary-light':'text-LightGray'} `}>
                        <div className=""><span className={`${page.icon} w-7 h-7`}/></div>
                        <span className="truncate text-xs font-bold text-center">{page.text}</span>
                    </Link>
                ))
            }
        </div>
    )
}

export function MobileTopMenu(){
    return(
        <div className="block md:hidden">
            <div className="flex justify-between items-center px-3 py-3 border-b-[1px] mb-4">
                <Logo/>
                <button onClick={e=>show('mobile_side_menu')} className="icon-[solar--hamburger-menu-outline] w-8 h-8"/>
            </div>
        </div>
    )
}
export function MobileSideMenu(){
    let pages = [
        {
            href:'/about-us',
            icon:'icon-[fluent--people-community-20-regular]',
            text:'About Us'
        },
        {
            href:'/rules',
            icon:'icon-[carbon--rule]',
            text:'Betting Rules'
        },
        {
            href:'/responsible-gaming',
            icon:'icon-[fluent--shield-task-20-regular]',
            text:'Responsible gaming'
        },
        {
            href:'/FAQs',
            icon:'icon-[healthicons--question-outline]',
            text:'FAQ\'s'
        },
        {
            href:'/help',
            icon:'icon-[akar-icons--headphone]',
            text:'Help Center'
        }
    ]
    let pathname = usePathname();
    return(
        <div id="mobile_side_menu" className="block fixed z-10 top-0 right-0 w-[60vw] translate-x-[60vw] h-[100vh] bg-primary-base md:hidden">
            <button onClick={e=>hide('mobile_side_menu')} className="w-full text-right mr-2"><span className="icon-[material-symbols-light--close] w-8 h-8"/></button>
            <div>
                {
                    pages.map((page,i) => (
                        <Link href={page.href} key={i} className={`flex items-center my-2 ${pathname===(page.href)?'text-primary-light':'text-LightGray'} `}>
                            <div className="mx-3"><span className={`${page.icon} w-8 h-8`}/></div>
                            <span className="truncate text-xs font-bold text-center">{page.text}</span>
                        </Link>
                    ))
                }
            </div>
            <div className="flex justify-around border-t-[1px] p-2 absolute bottom-20 w-full">
                <Link href={'/login'}>Log In</Link>
                <Link href={'/register'}>Join Now</Link>
            </div>
        </div>
    )
}

export function TopMenu(){
    let pathname = usePathname();
    return(
        <div className="hidden md:block bg-transparent py-7 px-2">
            <div className="flex justify-between items-center">
                <Logo/>
                <div className="flex gap-12">
                    <Link className={`${pathname==='/'?'text-primary-light':'text-LightGray'} font-semibold`} href="/">Home</Link>
                    <Link className={`${pathname.includes('/sports')?'text-primary-light':'text-LightGray'} font-semibold`} href="/sports">Sports</Link>
                    <Link className={`${pathname==='/bets'?'text-primary-light':'text-LightGray'} font-semibold`} href="/bets">My Bets</Link>
                    <Link className={`${pathname==='/account'?'text-primary-light':'text-LightGray'} font-semibold`} href="/account">Account</Link>
                </div>
                <div className="flex gap-5">
                    <Link href={'/login'}>Log In</Link>
                    <Link href={'/register'}>Join Now</Link>
                </div>
            </div>
        </div>
    )
}

export function MobileSportsMenu(){
    return(
        <div className="flex md:hidden overflow-x-scroll pb-3 mb-5 px-2">
            <div className="flex gap-6">
                {
                    [... new Array(4)].map((_,i) => (
                        <Link href={'#'} key={i} className="flex flex-col w-12 text-center">
                            <div className="bg-primary-base p-4 w-fit rounded-xl mb-1"><span className="icon-[tabler--ball-football] w-8 h-8"/></div>
                            <span className="truncate text-xs font-semibold">Premier league</span>
                        </Link>
                    ))
                }
            </div>
            <div className="border-r-2 mx-8 my-1"/>
            <div className="flex gap-6">
                {
                    [... new Array(5)].map((_,i) => (
                        <Link href={'#'} key={i} className="flex flex-col w-12">
                            <div className="bg-primary-base p-4 w-fit rounded-xl mb-1"><span className="icon-[solar--rugby-outline] w-8 h-8"/></div>
                            <span className="truncate text-xs font-semibold text-center">NHL</span>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export function SportsMenu(){
    return(
        <div className="hidden md:block bg-transparent">
            <div className="border-b-[1px]">
                <h3 className="text-primary-light font-semibold">POPULAR</h3>
            </div>
            <div>
                <h3 className="text-primary-light font-semibold">SPORTS</h3>
            </div>
        </div>
    )
}