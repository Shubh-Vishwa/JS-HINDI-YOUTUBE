//Dates

let myDate = new Date()
console.log(myDate)

let myReadDate = myDate.toString();//Sun May 26 2024 11:10:15 GMT+0000 (Coordinated Universal Time)
console.log(myReadDate)
console.log(myDate)//Since original date remains unchanged  after converting to string it ive a new string 
console.log(myDate.toDateString())//Sun May 26 2024
console.log(myDate.toLocaleDateString()) // 5/26/2024
console.log(typeof myDate) // Return typeof  date is object 


// lets create our own date 
let myCreateDate1 = new Date(2000, 5 , 22)
console.log(myCreateDate1)
let myCreateDate2 = new Date(2000, 5 , 22,5,6)
console.log(myCreateDate2)
console.log("myCreateDate1 :=>",myCreateDate1.toLocaleString())
console.log("myCreateDate2 :=>",myCreateDate2.toLocaleString())//myCreateDate2 :=> 6/22/2000, 5:06:00 AM


// Date format of type  : yy-mm-dd
let  myDob1 = new Date("2000-06-22")
console.log("myDob:=>",myDob1)


// Date format of type  : mm-dd-yy
let  myDob2 = new Date("06-22-2000")
console.log("myDob:=>",myDob2.toLocaleString())
console.log("DATE:=>",myDob1.getDate())
console.log("DAY:=>",myDob1.getDay())
console.log("TIME:=>",myDob1.getTime())
//like  wise we can get day and date and time as well  


let newDate  = new Date()
console.log(newDate)
console.log(newDate.getMonth())
console.log(newDate.getMonth() + 1); // the month start from the 0 in  this format 2024-05-26T18:04:45.340Z
console.log(newDate.getDay())


newDate.toLocaleString('default' ,{
    weekdays : "long"
})

console.log(newDate.toLocaleString('default' ,{
    weekdays : "long"
}))