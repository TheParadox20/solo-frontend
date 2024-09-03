import { postData } from "@/app/lib/data"

export default function EditBet({control,id}){
    let submit = e => {
        e.preventDefault()
        postData((_)=>{},{id},'/bet/edit')
    }
    return(
        <div className="relative bg-primary-base p-2 rounded-lg md:w-[33vw]">
            <button onClick={e=>control('')} className="w-6 h-6 absolute right-2 top-2 icon-[material-symbols-light--close]"/>
            <h4 className="text-center text-xl font-semibold">Edit Bet</h4>
            <div className="flex justify-between gap-3">
                <button className="flex-grow py-2">Cancel</button>
                <button className="flex-grow py-2 rounded-md bg-primary-light" onClick={e=>submit(e)}>Confirm</button>
            </div>
        </div>
    )
}