'use client'
import { useState, useContext } from "react";
import { Context } from "@/app/lib/ContextProvider";
import Link from "next/link"
import { usePathname, useSearchParams, useParams } from "next/navigation";
import Logo from "@/app/UI/body/Logo";
import { hide, show, nowYouSee, nowYouDont, toggle, isVisible } from "@/app/lib/controlls";
import { overlayE } from "@/app/lib/trigger";
import SportIcon from "@/app/UI/SportsIcon";
import useUser from "@/app/lib/hooks/useUser";
import Overlay from "./Overlay";
import Deposit from "./Deposit";
import Withdraw from "./Withdraw";

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
    let [overlay, setOverlay] = useState('');
    const { isLogged, isLoading,error, user, logout, stateChange } = useUser();
    console.log('$#%#%# ',stateChange);
    let pages = [
        {
            href:'/about',
            icon:'icon-[fluent--people-community-20-regular]',
            text:'About Us'
        },
        {
            href:'/rules',
            icon:'icon-[carbon--rule]',
            text:'Betting Rules'
        },
        {
            href:'/account/responsible-gaming',
            icon:'icon-[fluent--shield-task-20-regular]',
            text:'Responsible gaming'
        },
        {
            href:'/faq',
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
        <>
        <div id="mobile_side_menu" className="block fixed z-40 top-0 md:top-24 right-0 w-[60vw] translate-x-[60vw] md:w-[20vw] md:translate-x-[60vw] md:h-[80vh] md:rounded-lg pt-4 h-[100vh] bg-primary-base md:hidden px-2 md:px-4">
            <button onClick={e=>hide('mobile_side_menu')} className="w-full text-right pr-4 mt-2 absolute"><span className="icon-[material-symbols-light--close] w-8 h-8"/></button>
            {
                isLogged && !error && !isLoading &&
                <div className="">
                    <div className="flex border-b-[1px] border-Grey py-2 pb-4 gap-2">
                        <div className="icon-[ph--user-circle-light] w-10 h-10 2xl:w-12 2xl:h-12"/>
                        <div className="flex flex-col gap-2">
                            <span className="font-bold text-left">{user['name']}</span>
                            <span className="text-left">{user['phone']}</span>
                        </div>
                    </div>
                    <div className="border-b-[1px] border-Grey py-2 pb-4">
                        <div className="flex justify-between">
                            <div className="flex flex-col">
                                <span className="font-bold text-left">KES {user['balance'].toFixed(2)}</span>
                                <span className=" text-left">Balance</span>
                            </div>
                            <button className="flex items-center p-1 rounded-lg border-2 border-primary-light"><span className="icon-[mdi--eye-off-outline] w-8 h-8"/></button>
                        </div>
                        <div className="flex justify-between md:justify-around mt-5 gap-1">
                            <button className="w-28 2xl:w-32 py-3 text-center rounded-lg font-semibold hover:scale-105 bg-primary-light" onClick={e=>setOverlay('deposit')}>Deposit</button>
                            <button className="w-28 2xl:w-32 py-3 text-center rounded-lg font-semibold hover:scale-105 border-2 border-primary-light" onClick={e=>setOverlay('withdraw')}>Withdraw</button>
                        </div>
                    </div>
                    <Link href={'/account'} className={`flex items-center my-2 ${pathname==='/account'?'text-primary-light':'text-LightGray'} `}>
                        <div className="mx-3"><span className={`icon-[ph--user-circle-light] w-8 h-8`}/></div>
                        <span className="truncate text-xs font-bold text-center">My Account</span>
                    </Link>
                    <Link href={'/account'} className={`flex items-center my-2 ${pathname==='/account'?'text-primary-light':'text-LightGray'} `}>
                        <div className="mx-3"><span className={`icon-[hugeicons--coins-dollar] w-8 h-8`}/></div>
                        <span className="truncate text-xs font-bold text-center">My statement</span>
                    </Link>
                </div>
            }
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
            {
                (isLogged && !error && !isLoading) ?
                <button onClick={e=>logout()} className="text-Error font-semibold flex items-center"><span className="icon-[material-symbols-light--logout] w-7 h-7"/>Logout</button>
                :
                <>
                    <button onClick={e=>overlayE('/login')}>Log In</button>
                    <button onClick={e=>overlayE('/signup')}>Join Now</button>
                </>
                
            }
            </div>
        </div>
        <Overlay className={`${overlay==''?'hidden':'block'}`} >
            {
                (overlay == 'deposit' || overlay == 'withdraw') && 
                <div className="bg-primary-base">
                    <div className="flex">
                        <h3 className="text-xl font-bold">Deposit/Withdraw</h3>
                        <button onClick={e=>setOverlay('')} className="w-8 h-8"><span className="icon-[material-symbols-light--close] w-8 h-8"/></button>
                    </div>
                    <div className="flex border-b-[1px] border-Grey">
                        <button className={`border-b-[1px] font-semibold ${overlay=='deposit'?'border-primary-light text-primary-light':'border-Grey'}`} onClick={e=>setOverlay('deposit')}>Deposit</button>
                        <button className={`border-b-[1px] font-semibold ${overlay=='withdraw'?'border-primary-light text-primary-light':'border-Grey'}`} onClick={e=>setOverlay('withdraw')}>Withdraw</button>
                    </div>
                    {overlay=='deposit' && <Deposit/>}
                    {overlay=='withdraw' && <Withdraw/>}
                </div>
            }
        </Overlay>
        </>
    )
}

export function TopMenu(){
    let pathname = usePathname();
    let [overlay, setOverlay] = useState('');
    const { isLogged, isLoading,error, user } = useUser();
    
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
                {
                    isLogged && !error && !isLoading?
                    <div className="flex gap-3">
                        <button onClick={e=>{toggle('mobile_side_menu'); isVisible('mobile_side_menu')?show('mobile_side_menu'):hide('mobile_side_menu')}} className="flex justify-center items-center gap-2">
                            <div className="icon-[ph--user-circle-light] w-10 h-10 2xl:w-12 2xl:h-12"/>
                            <div className="flex flex-col">
                                <span className="font-bold text-left">KES {user['balance'].toFixed(2)}</span>
                                <span className=" text-left">Balance</span>
                            </div>
                            <div className="icon-[entypo--chevron-small-down] w-10 h-10"/>
                        </button>
                        <button className="w-28 2xl:w-32 py-3 text-center rounded-lg font-semibold hover:scale-105 bg-primary-light" onClick={e=>setOverlay('deposit')}>Deposit</button>
                    </div>
                    :
                    <div className="flex gap-5">
                    <button onClick={e=>overlayE('/login')} className="w-28 2xl:w-32 py-3 text-center rounded-lg font-semibold hover:scale-105 border-2 border-primary-light" >Log In</button>
                    <button onClick={e=>overlayE('/signup')} className="w-28 2xl:w-32 py-3 text-center rounded-lg font-semibold hover:scale-105 bg-primary-light">Join Now</button>
                </div>
                }
            </div>
            <Overlay className={`${overlay==''?'hidden':'block'}`} >
                {
                    (overlay == 'deposit' || overlay == 'withdraw') && 
                    <div className="bg-primary-base">
                        <div className="flex">
                            <h3 className="text-xl font-bold">Deposit</h3>
                            <button onClick={e=>setOverlay('')} className="w-8 h-8"><span className="icon-[material-symbols-light--close] w-8 h-8"/></button>
                        </div>
                        <Deposit/>
                    </div>
                }
            </Overlay>
        </header>
    )
}

export function MobileSportsMenu(){
    let params = useParams()['sports'];
    let path = params?params.map((param,i)=>{
        return param.replaceAll('%20',' ')
    }):[];
    console.log(path)
    let {Popular, Sports} = useContext(Context);

    return(
        <div className="flex md:hidden overflow-x-scroll pt-2 pb-3 mb-5 px-2 sticky top-0 z-30 bg-primary-dark">
            <div className="flex gap-6">
                {
                    Popular.map((category,i) => (
                        <Link href={`/sports/${category.sport}/${category.text}`} key={i} className={`flex flex-col w-12 text-center`}>
                            <div className={`${path[path.length-1]==category.text?'bg-primary-light':'bg-primary-base'} p-4 w-fit rounded-xl mb-1`}><SportIcon sport={category.sport} classname={'w-8 h-8'}/></div>
                            <span className="truncate text-xs font-semibold">{category.text}</span>
                        </Link>
                    ))
                }
            </div>
            <div className="border-r-2 border-Grey mx-8 my-1"/>
            <div className="flex gap-6">
                {
                    Sports.map((sport,i) => (
                        <Link href={`/sports/${sport.sport}`} key={i} className={`flex flex-col w-12 text-center`}>
                            <div className={`${path[1]==sport.sport?'bg-primary-light':'bg-primary-base'} p-4 w-fit rounded-xl mb-1`}><SportIcon sport={sport.sport} classname={'w-8 h-8'}/></div>
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
    let params = useParams()['sports'];
    let path = params?params.map((param,i)=>{
        return param.replaceAll('%20',' ')
    }):[];
    let {Popular, Sports} = useContext(Context);

    return(
        <div className="hidden md:block bg-primary-dark ml-2 px-4 2xl:pr-16 max-h-[90vh] overflow-y-scroll large-scroll">
            <div className="border-b-[1px] border-Grey pb-2 mb-4">
                <h3 className="text-primary-light text-base font-semibold">POPULAR</h3>
                {
                    Popular.map((category,i) => (
                        <Link href={`/sports/${category.sport}/${category.text}`} key={i} className={`flex gap-2 items-center p-2 rounded-lg ${path[path.length-1]==category.text?'bg-primary-base':null}`}>
                            <SportIcon sport={category.sport} classname={'w-6 h-6 2xl:w-8 2xl:h-8'}/>
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
                                <div className={`flex items-center justify-between px-2 rounded-lg 2xl:my-1 ${((path[1]==sport.sport && activeSport!=i) || (activeSport==i&&path.length==2))?'bg-primary-base':null}`} onClick={e=>{i==activeSport?setActiveSport(null):setActiveSport(i)}}>
                                    <Link href={`/sports/${sport.sport}`} className={`flex gap-2 items-center my-2`}>
                                        <SportIcon sport={sport.sport} classname={'w-6 h-6 2xl:w-8 2xl:h-8'}/>
                                        <span className="truncate lg:text-xs 2xl:text-sm font-semibold">{sport.sport}</span>
                                    </Link>
                                    {
                                        sport.categories.length>0 && <button className={`${i==activeSport?'icon-[ep--arrow-up]':'icon-[ep--arrow-down]'} w-4 h-4 2xl:w-6 2xl:h-6`} />
                                    }
                                </div>
                                {
                                    (activeSport!=null && i==activeSport) &&
                                    Sports[activeSport].categories.map((category,i) => (
                                        <Link href={`/sports/${sport.sport}/${category}`} key={i} className={`flex gap-2 items-center my-1 ml-10 p-2 rounded-lg ${path[path.length-1]==category?'bg-primary-base':null}`}>
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