import Link from "next/link";
import Hero from "@/app/UI/Hero";
import Game from "@/app/UI/Game";

export default function Page() {
  let football = {
    category: "Premier league",
    options: ["Manchester United", "Arsenal"],
    outcomes:[
      {name:"Man. United", odd:2.5, users:3},
      {name:"Draw", odd:1.5, users:1},
      {name:"Arsenal", odd:3.5, users:2},
    ],
    date: "Sat 12th Jun",
    time: "15:00 pm",
    stakes: 10345,
  };
  let basketball = {
    category: "NBA",
    options: ["Dallas Mavericks", "Boston Celtics"],
    outcomes:[
      {name:"Mavericks", odd:1.5, users:3},
      {name:"Celtics", odd:2.5, users:2},
    ],
    date: "Sat 12th Jun",
    time: "15:00 pm",
    stakes: 10345,
  };
  return (
    <div className="lg:mt-7">
        <Hero/>
        <div className="flex items-center font-bold text-lg gap-2 2xl:text-2xl mb-4"><span className="icon-[tabler--ball-football] w-7 h-7"/>Upcoming Football</div>
        <div className="bg-primary-base mb-8 px-5 md:px-8 pb-10 pt-2 rounded-lg">
          {
            [... new Array(3)].map((_,i)=>{
              return <div key={i} className="my-4"><Game data={football}/></div>
            })
          }
          <Link href={'/sports'} className="w-full flex items-center justify-center text-center font-semibold underline underline-offset-4">View All Upcoming Football <span className="icon-[basil--arrow-right-outline] w-7 h-7"/></Link>
        </div>

        <div className="flex items-center font-bold text-lg gap-2 2xl:text-2xl mb-4"><span className="icon-[ph--basketball] w-7 h-7"/>Upcoming Basketball</div>
        <div className="bg-primary-base mb-8 px-5 md:px-8 pb-10 pt-2 rounded-lg">
          {
            [... new Array(3)].map((_,i)=>{
              return <div key={i} className="my-4"><Game data={basketball}/></div>
            })
          }
          <Link href={'/sports'} className="w-full flex items-center justify-center text-center font-semibold underline underline-offset-4">View All Upcoming Basketball <span className="icon-[basil--arrow-right-outline] w-7 h-7"/></Link>
        </div>
    </div>
  );
}