import Link from "next/link"

export default function Hero(){
    return(
        <div className="bg-[url('/Hero_bg.jpeg')] rounded-lg relative z-20 mb-8">
          <div className="z-10  p-4">
            <h2 className="text-3xl font-bold">Welcome to Solobet!</h2>
            <p className="my-3 w-3/4 md:w-1/2">
              Kenya{'\''}s first betting exchange. Join us today for an unmatched betting experience and enjoy instant payouts via M-Pesa.
            </p>
            <Link className="bg-primary-light block w-fit py-2 md:py-4 px-8 rounded-lg font-semibold lg:mt-8 hover:scale-105" href={'/register'}>Join Now</Link>
          </div>
          <img className="absolute w-2/5 md:w-1/3 lg:w-[42%] 2xl:w-[35%] -z-10 right-0 bottom-0" src="/man_celebrating.png" alt="" />
        </div>
    )
}