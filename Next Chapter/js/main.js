const leftPicDiv = document.getElementById('leftPicDiv')
const rightPicDiv = document.getElementById('rightPicDiv')
const leftImage = document.getElementById('leftImage')
const rightImage = document.getElementById('rightImage')
const formDiv = document.getElementById('formDiv')
const form = document.getElementById('regForm')
const formItem = document.getElementsByClassName('formItem')
const inputContainer = document.getElementById('inputContainer')
// inputContainer.style.display = 'none'
const itemArr = Array.from(formItem)
// itemArr.forEach((item) => {
//     item.style.display = 'none'
// })
// formItem.style.display = 'none'
// Picture source declarations---------------------->
const arz = './assets/arizona.png'
const dal = './assets/dallas.png'
const wash = './assets/washington.png'
const phi = './assets/philedelphia.png'
const nyg = './assets/newYorkG.png'
const bal = './assets/baltimore.png'
const buff = './assets/buffalo.png'
const mia = './assets/miami.png'
const tb = './assets/tampa.png'
const car = './assets/carolina.png'
const den = './assets/denver.png'
const lv = './assets/lasVegas.png'
const sf = './assets/sanFran.png'
const kc = './assets/kansasCity.png'
const lac = './assets/losAngeles.png'
const lar = './assets/losAngelesRams.png'
const sea = './assets/seattle.png'
const nyj = './assets/newYorkJ.png'
const jax = './assets/jacksonville.png'
const hou = './assets/houston.png'
const tenn = './assets/tennesse.png'
const det = './assets/detroit.png'
const gb = './assets/greenbay.png'
const minn = './assets/minnesota.png'
const chi = './assets/chicago.png'
const atl = './assets/atlanta.png'
const pitt = './assets/pittsburgh.png'
const no = './assets/newOrleans.png'
const ne = './assets/newEngland.png'
const ind = './assets/indy.png'
const cin = './assets/cinncinatti.png'
const cle = './assets/clevland.png'
// Picture Array------------------------------------> 
const teamPicArr = [
    arz,
    dal,
    wash,
    phi,
    nyg,
    bal,
    buff,
    mia,
    tb,
    car,
    den,
    lv,
    sf,
    kc,
    lac,
    lar,
    sea,
    nyj,
    jax,
    hou,
    tenn,
    det,
    gb,
    minn,
    chi,
    atl,
    pitt,
    no,
    ne,
    ind,
    cin,
    cle
]
// Random number generator function--------------------------->
function ranNum(min, max){
   const randomNum =  Math.floor(Math.random() * (max - min)) + min
    return randomNum
}
// Functions for placing and removing pictures---------------->
function placerLeft(){
    const numPick = ranNum(0, teamPicArr.length)
    // console.log(numPick)
    const finalPick = teamPicArr[numPick]
    leftImage.setAttribute('class', 'pic')
    leftImage.setAttribute('src', finalPick)
    // console.log(finalPick)
}
function placerRight(){
    const numPick = ranNum(0, teamPicArr.length)
    const finalPick = teamPicArr[numPick]
    rightImage.setAttribute('class', 'pic')
    rightImage.setAttribute('src', finalPick)
    // console.log(finalPick)
}
placerLeft()
placerRight()
// Intervals for new pictures-------------------------------->
setInterval(placerLeft, 2000)
setInterval(placerRight, 2000)
