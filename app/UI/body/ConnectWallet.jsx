import { popupE } from "@/app/lib/trigger"

export default function ConnectWallet({children, className}){
    //TODO: Implement web3 features
    return <button onClick={e=>popupE('Warning','Feature pending')} className={className}>{children}</button>
}