export default function SportIcon({sport,classname}){
    const sportIcons = {
        "Football": "icon-[tabler--ball-football]",
        "Basketball": "icon-[fluent--sport-basketball-24-regular]",
        "Rugby": "icon-[solar--rugby-outline]",
        "Baseball": "icon-[ion--baseball-outline]",
        "Tennis": "icon-[solar--tennis-outline]",
        "Cricket": "icon-[bx--cricket-ball]",
        "Ice Hockey": "icon-[fluent--sport-hockey-24-regular]",
        "Table Tennis": "icon-[maki--table-tennis]",
        "Volleyball": "icon-[ph--volleyball]",
        "Boxing": "icon-[hugeicons--boxing-glove-01]",
        "Darts": "icon-[gravity-ui--target-dart]",
        "Water polo": "icon-[icon-park-outline--waterpolo]",
        "eSoccer": "icon-[solar--gamepad-linear]",
      };
      return <span className={`${sportIcons[sport]} ${classname}`}/>
}