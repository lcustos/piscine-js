//Make a dayOfTheYear functions that takes a date and returns the number of days since the first day of that year

function dayOfTheYear(date){
  let newDate = date.getFullYear()
  let time = new Date('0001-01-01')
  time.setFullYear(newDate)
  let countDay = 0
  for(let i = 0;i<1000;i++){
    countDay = i
    if((time.getMonth() === date.getMonth())&&(time.getDate === date.getDate)){
      return countDay+date.getDate()
    }
    time.setHours(30)

  }
  console.log(time)
}