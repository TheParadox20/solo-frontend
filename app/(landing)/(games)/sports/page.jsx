'use client'
import Breadcrumb from "@/app/UI/Breadcrumb";
import Categories from "@/app/UI/Categories";
import Game from "@/app/UI/Game";

export default function Page() {
  let games = {
    'Saturday, 12th June 2024':[
      {
        category: "Premier league",
        options: ["Brentford", "Chelsea"],
        outcomes:[
          {name:"Brentford", stake:2500, users:38},
          {name:"Draw", stake:1950, users:21},
          {name:"Chelsea", stake:10705, users:164},
        ],
        date: "Sat 12th Jun",
        time: "15:00 pm",
        stakes: 14955,
      }
    ],
    'Sunday, 13th June 2024':[
      {
        category: "Premier league",
        options: ["Manchester United", "Arsenal"],
        outcomes:[
          {name:"Man. United", stake:90, users:2},
          {name:"Draw", stake:30, users:2},
          {name:"Arsenal", stake:60, users:3},
        ],
        date: "Sat 13th Jun",
        time: "15:00 pm",
        stakes: 180,
      }
    ],
    'Monday, 14th June 2024':[
      {
        category: "Premier league",
        options: ["Manchester United", "Arsenal"],
        outcomes:[
          {name:"Man. United", stake:2500, users:38},
          {name:"Draw", stake:1950, users:21},
          {name:"Arsenal", stake:3705, users:64},
        ],
        date: "Sat 14th Jun",
        time: "15:00 pm",
        stakes: 7955,
      }
    ]
  }
    return (
      <div>
          <Breadcrumb />
          <Categories />
          {
            Object.keys(games).map((date,i)=>{
              return (
                <div key={i}>
                  <h1 className="2xl:text-xl font-bold my-4">{date}</h1>
                  <div className="bg-primary-base mb-8 px-5 md:px-8 pb-10 pt-2 rounded-lg">
                    {
                      // games[date].map((game,j)=>{
                      [...new Array(3)].map((game,j)=>{
                        return <div key={j} className="my-4"><Game data={games[date][0]}/></div>
                      })
                    }
                  </div>
                </div>
              )
            })
          }
      </div>
    );
  }