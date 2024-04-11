function solve(arr){
     let schedule = {};

     for(let element of arr){
        let [weekDay, name] = element.split(' ');

        if(schedule.hasOwnProperty(weekDay)){
            console.log(`Conflict on ${weekDay}!`)
        }
        else{
            schedule[weekDay] = name;
            console.log(`Scheduled for ${weekDay}`)
        }
     }
     for(let day in schedule){
        console.log(`${day} -> ${schedule[day]}`)
     }
}

solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim'])