export function getDaySuffix (day) {
    if (day >= 11 && day <= 13) {
        return 'th';
    }
    switch (day % 10) {
        case 1:
            return 'st';
        case 2:
            return 'nd';
        case 3:
            return 'rd';
        default:
            return 'th';
    }
}

export function getWeeksOfMonth (year, month) {
    const weeks = [];
    const date = new Date(year, month, 1);
    
    // Find the first Sunday of the month
    while (date.getDay() !== 0) {
        date.setDate(date.getDate() + 1);
    }

    // Iterate through the weeks of the month
    while (date.getMonth() === month) {
        const sunday = new Date(date);
        const saturday = new Date(date);
        saturday.setDate(date.getDate() + 6);
        weeks.push({
            sunday: `${(new Date(year,sunday.getMonth(),1)).toLocaleString('default', {month:'long'}).slice(0,3)},${sunday.getDate()}${getDaySuffix(sunday.getDate())}`,
            saturday: `${(new Date(year,saturday.getMonth(),1)).toLocaleString('default', {month:'long'}).slice(0,3)},${saturday.getDate()}${getDaySuffix(saturday.getDate())}`,
            epoch: sunday
        });
        date.setDate(date.getDate() + 7);
    }
    
    return weeks;
};

export function getDatesOfWeek(epoch){
    let dates = []
    let date = new Date(epoch)
    for(let i=0;i<7;i++){
        dates.push(`${date.getFullYear()}-${(new Date(date.getFullYear(),date.getMonth(),1)).toLocaleString('default', {month:'long'})}-${date.getDate()}`)
        date.setDate(date.getDate()+1)
    }
    return dates
}

export function getDatesInRange(start,end){
    let monthNames = [
        "January", "February", "March", "April", "May", "June", "July",
        "August", "September", "October", "November", "December"
    ];

    let startDate = new Date(start[0], start[1], start[2]);
    let endDate = new Date(end[0], end[1], end[2]);

    let dates = [];
    let currentDate = startDate;
    while (currentDate <= endDate) {
    let year = currentDate.getFullYear();
    let monthName = monthNames[currentDate.getMonth()];
    let day = currentDate.getDate();
    let dateString = `${year}-${monthName}-${day}`;
    dates.push(dateString);
    currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
}

export function getMonthName(month){
    return ['January','February','March','April','May','June','July','August','September','October','November','December'][month]
}