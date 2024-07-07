import Link from "next/link"
import Logo from "@/app/UI/Logo"

export default function Footer(){
    return(
        <footer className="border-t-[1px] border-Grey px-4 py-4 my-8">
            <div className="flex flex-col md:flex-row gap-y-6 justify-between py-6">
                <div className="md:w-1/4">
                    <Logo/>
                    <p className="my-3 text-sm">
                    Kenya{'\''}s first betting exchange, built for the people. Join us today for an unmatched betting experience and enjoy instant payouts via M-Pesa.
                    </p>
                    <Link className="bg-primary-light block w-fit py-2 md:py-4 px-8 rounded-lg font-semibold lg:mt-8" href={'/register'}>Join Now</Link>
                </div>
                <div className="flex flex-col md:flex-row gap-y-6 gap-x-28 md:w-1/3">
                    <div>
                        <h6 className="mb-4 font-bold">Legal & Policy</h6>
                        <Link className="block text-sm mb-3" href={'/terms'}>Terms & Conditions</Link>
                        <Link className="block text-sm mb-3" href={'/privacy'}>Privacy Policy</Link>
                        <Link className="block text-sm mb-3" href={'/cookies'}>Cookie policy</Link>
                        <Link className="block text-sm mb-3" href={'/responsible-gaming'}>Responsible Gaming</Link>
                    </div>
                    <div>
                        <h6 className="mb-4 font-bold">Contact Us</h6>
                        <a className="block text-sm mb-3" href="tel:+254791210705">0791210705</a>
                        <a className="block text-sm mb-3" href="mailto:support@solo.co.ke">support@solo.co.ke</a>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-y-6 md:flex-row justify-between border-t-[1px] border-Grey py-8">
                <div className="md:w-1/4">
                    <h6 className="mb-4 font-bold">License</h6>
                    <p className="text-sm">
                    Solobet Limited is licensed by BCLB (Betting Control and Licensing Board of Kenya) under the Betting, Lotteries and Gaming Act, Cap 131, Laws of Kenya under License Numbers: BK 0000123 and PG 0000123.
                    </p>
                </div>
                <div className="md:w-1/3">
                    <h6 className="mb-4 font-bold">18+</h6>
                    <p className="text-sm md:w-1/2">
                    Must be 18 years or older to register or place bets at Solobet. Gamble responsibly to avoid potential adverse effects.
                    </p>
                </div>
            </div>
            <div className="flex flex-col-reverse gap-y-2 md:flex-row justify-between border-t-[1px] border-Grey pt-4 pb-8 md:py-8">
                <div className="">
                    <p className="text-sm text-center">
                    &copy; <span className="md:mx-2">Copyright 2024 Solo</span> | <span className="md:mx-2">All rights reserved</span>
                    </p>
                </div>
                <div className="flex gap-6 mx-auto md:mx-0">
                    <a href="http://" target="_blank" rel="noopener noreferrer"><div className="w-7 h-7 icon-[hugeicons--new-twitter-rectangle]"/></a>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><div className="w-7 h-7 icon-[hugeicons--linkedin-01]"/></a>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><div className="w-7 h-7 icon-[hugeicons--instagram]"/></a>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><div className="w-7 h-7 icon-[hugeicons--facebook-01]"/></a>
                </div>
            </div>
        </footer>
    )
}