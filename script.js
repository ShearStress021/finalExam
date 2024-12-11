
const lstImages = [
    "dice-1.svg",
    "dice-2.svg",
    "dice-3.svg",
    "dice-4.svg",
    "dice-5.svg",
    "dice-6.svg",

]

const getRandom = () => {
    const rmindex = Math.floor(Math.random() * lstImages.length);
    return lstImages[rmindex]
}
const btn = document.getElementById("btn");

btn.addEventListener("click" , () => {

    day = new Date().getDate()
    mon = new Date().getMonth()
    year = new Date().getFullYear()
    hr = new Date().getHours();
    min = new Date().getMinutes()

    time = 

    dt = document.getElementById("day")
    dt.textContent = `${day}/${mon+1}/${year} at ${hr}:${min} `


    img1 = document.getElementById("randomImage1")
    img2 = document.getElementById("randomImage2")
    str1 = getRandom()
    str2 = getRandom()
    img1.src = str1
    img2.src = str2
    
    dice1 = getStringInt(str1)
    dice2 = getStringInt(str2)
    
    diceTotal = dice1 + dice2

  

    total = document.getElementById("total")
    total.textContent = `${diceTotal}`

    statement = document.getElementById("statement")

    if(diceTotal >= 8){
        statement.textContent = "You Win: Try Again!"
    } else {
        statement.textContent = "You didn't win: Try Again!"
    }
})




function getStringInt(par){
    s = par.split(".")[0];
    s1 = s.split("-")[1]
    return parseInt(s1)
}