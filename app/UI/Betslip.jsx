import Link from "next/link"

export default function Betslip(){
    return(
        <div className="bg-primary-base relative h-[50vh] rounded-xl">
            <h6 className="text-xl font-bold p-4">Betslip</h6>
            <div className="flex flex-col items-center h-64 gap-3">
                <div className="icon-[pepicons-pencil--ticket-circle-off] w-16 h-16"/>
                <p className="text-center font-semibold text-lg">Your betslip is empty</p>
                <p className="text-sm">Make a selection to add a bet to your betslip</p>
            </div>
            <Link href={'/login'} className="absolute block text-center bottom-0 w-full rounded-b-xl bg-primary-light py-4 font-semibold">Signup or Login To Bet</Link>
        </div>
    )
}