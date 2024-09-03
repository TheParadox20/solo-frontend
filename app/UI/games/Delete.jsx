import { postData } from "@/app/lib/data"
import useUser from "@/app/lib/hooks/useUser"

export default function DeleteBet({control,id}){
    let {updateBalance} = useUser()
    let submit = e => {
        e.preventDefault()
        postData((response)=>{
            if(response.amount){
                updateBalance(response.amount)
                control('')
            }
        },{id},'/bet/delete')
    }
    return(
        <div className="relative bg-primary-base p-2 rounded-lg md:w-[33vw]">
            <button onClick={e=>control('')} className="w-6 h-6 absolute right-2 top-2 icon-[material-symbols-light--close]"/>
            <h4 className="text-center text-xl font-semibold">Delete Bet</h4>
            <div className="flex justify-between gap-3">
                <button className="flex-grow py-2">Cancel</button>
                <button className="flex-grow py-2 rounded-md bg-Error" onClick={e=>submit(e)}>Delete</button>
            </div>
        </div>
    )
}