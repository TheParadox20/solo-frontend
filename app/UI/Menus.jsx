'use client'
import { useState, useContext } from "react";
import { Context } from "@/app/lib/ContextProvider";
import Link from "next/link"
import { usePathname, useSearchParams } from "next/navigation";
import Logo from "@/app/UI/Logo";
import { hide, show } from "@/app/lib/controlls";

export function MobileBottomMenu(){
    let pathname = usePathname();
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

    return(
        <div className="flex md:hidden bg-primary-base justify-around pt-3 pb-2 fixed bottom-0 w-full z-10">
            {
                pages.map((page,i) => (
                    <Link href={page.href} key={i} className={`flex flex-col items-center ${('/'===page.href&&pathname.length==1)?'text-primary-light':page.href!=='/'&&pathname.includes(page.href)?'text-primary-light':'text-LightGray'} `}>
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
            <div className="flex justify-between items-center px-3 py-3  mb-1">
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
        <div id="mobile_side_menu" className="block fixed z-40 top-0 right-0 w-[60vw] translate-x-[60vw] h-[100vh] bg-primary-base md:hidden">
            <button onClick={e=>hide('mobile_side_menu')} className="w-full text-right pr-4 mt-2"><span className="icon-[material-symbols-light--close] w-8 h-8"/></button>
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
            <div className="flex justify-around border-t-[1px] border-Grey p-2 absolute bottom-20 w-full">
                <Link href={'/login'}>Log In</Link>
                <Link href={'/register'}>Join Now</Link>
            </div>
        </div>
    )
}

export function TopMenu(){
    let pathname = usePathname();
    return(
        <header className="hidden md:block bg-primary-dark z-30 py-3 2xl:py-5 px-4 sticky top-0">
            <div className="flex justify-between items-center">
                <Logo/>
                <div className="flex gap-12">
                    <Link className={`${pathname==='/'?'text-primary-light':'text-LightGray'} font-semibold`} href="/">Home</Link>
                    <Link className={`${pathname.includes('/sports')?'text-primary-light':'text-LightGray'} font-semibold`} href="/sports">Sports</Link>
                    <Link className={`${pathname==='/bets'?'text-primary-light':'text-LightGray'} font-semibold`} href="/bets">My Bets</Link>
                    <Link className={`${pathname.includes('/account')?'text-primary-light':'text-LightGray'} font-semibold`} href="/account">Account</Link>
                </div>
                <div className="flex gap-5">
                    <Link className="w-28 2xl:w-32 py-3 text-center rounded-lg font-semibold hover:scale-105 border-2 border-primary-light" href={'/login'}>Log In</Link>
                    <Link className="w-28 2xl:w-32 py-3 text-center rounded-lg font-semibold hover:scale-105 bg-primary-light" href={'/register'}>Join Now</Link>
                </div>
            </div>
        </header>
    )
}

export function MobileSportsMenu(){
    let params = useSearchParams();
    let {Popular, Sports} = useContext(Context);

    return(
        <div className="flex md:hidden overflow-x-scroll pt-2 pb-3 mb-5 px-2 sticky top-0 z-30 bg-primary-dark">
            <div className="flex gap-6">
                {
                    Popular.map((category,i) => (
                        <Link href={`/sports?sport=${category.sport}&category=${category.text}`} key={i} className={`flex flex-col w-12 text-center`}>
                            <div className={`${params.get('category')==category.text?'bg-primary-light':'bg-primary-base'} p-4 w-fit rounded-xl mb-1`}><span className={`${category.icon} w-8 h-8`}/></div>
                            <span className="truncate text-xs font-semibold">{category.text}</span>
                        </Link>
                    ))
                }
            </div>
            <div className="border-r-2 border-Grey mx-8 my-1"/>
            <div className="flex gap-6">
                {
                    Sports.map((sport,i) => (
                        <Link href={`/sports?sport=${sport.sport}`} key={i} className={`flex flex-col w-12 ${params.get('sport')==sport.sport?'bg-primary-light':null}`}>
                            <div className={`${params.get('sport')==sport.sport?'bg-primary-light':'bg-primary-base'} p-4 w-fit rounded-xl mb-1`}><span className={`${sport.icon} w-8 h-8`}/></div>
                            <span className="truncate text-xs font-semibold text-center">{sport.sport}</span>
                        </Link>
                    ))
                }
            </div>
        </div>
    )
}

export function SportsMenu(){
    let [activeSport, setActiveSport] = useState(null)
    let params = useSearchParams();
    let {Popular, Sports} = useContext(Context);

    return(
        <div className="hidden md:block bg-primary-dark ml-2 px-4 2xl:pr-16">
            <div className="border-b-[1px] border-Grey pb-2 mb-4">
                <h3 className="text-primary-light text-base font-semibold">POPULAR</h3>
                {
                    Popular.map((category,i) => (
                        <Link href={`/sports?sport=${category.sport}&category=${category.text}`} key={i} className={`flex gap-2 items-center p-2 rounded-lg ${params.get('category')==category.text?'bg-primary-base':null}`}>
                            <span className={`${category.icon} w-6 h-6 2xl:w-8 2xl:h-8`}/>
                            <span className="truncate lg:text-xs 2xl:text-sm font-semibold">{category.text}</span>
                        </Link>
                    ))
                }
            </div>
            <div>
                <h3 className="text-primary-light text-base font-semibold mb-3">SPORTS</h3>
                {
                    Sports.map((sport,i) => {
                        return (
                            <div key={i}>
                                <div className={`flex items-center justify-between px-2 rounded-lg 2xl:my-1 ${(params.get('category')==null&&params.get('sport')==sport.sport)?'bg-primary-base':null}`} onClick={e=>{i==activeSport?setActiveSport(null):setActiveSport(i)}}>
                                    <Link href={`/sports?sport=${sport.sport}`} className={`flex gap-2 items-center my-2`}>
                                        <span className={`${sport.icon} w-6 h-6 2xl:w-8 2xl:h-8`}/>
                                        <span className="truncate lg:text-xs 2xl:text-sm font-semibold">{sport.sport}</span>
                                    </Link>
                                    {
                                        sport.categories.length>0 && <button className={`${i==activeSport?'icon-[ep--arrow-up]':'icon-[ep--arrow-down]'} w-4 h-4 2xl:w-6 2xl:h-6`} />
                                    }
                                </div>
                                {
                                    (activeSport!=null && i==activeSport) &&
                                    sports[activeSport].categories.map((category,i) => (
                                        <Link href={`/sports?sport=${sport.sport}&category=${category}`} key={i} className={`flex gap-2 items-center my-1 ml-10 p-2 rounded-lg ${params.get('category')==category?'bg-primary-base':null}`}>
                                            <span className="truncate lg:text-xs 2xl:text-sm">{category}</span>
                                        </Link>
                                    ))
                                }
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}