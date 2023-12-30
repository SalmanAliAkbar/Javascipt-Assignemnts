let ramadanDate = new Date("03-10-2024")
let todayDate = new Date(prompt("Enter Your Date in MM/ DD / YYYY Formate"))

let diff = ramadanDate.getTime() - todayDate.getTime()

let months = diff / (1000 * 60 * 60 * 24)

alert(`There are ${Math.round(months)} days left in Ramadan`)