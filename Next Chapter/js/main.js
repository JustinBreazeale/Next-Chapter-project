const leftImage = document.getElementById('leftImage')
const rightImage = document.getElementById('rightImage')
const formDiv = document.getElementById('formDiv')
const form = document.getElementById('regForm')
const formItem = document.getElementsByClassName('formItem')
const inputContainer = document.getElementById('inputContainer')
const footer = document.getElementById('footer')
const infoSubmitBut = document.getElementById('regSubBut')
const modal = document.getElementById('regModal')
const statSubmitBut = document.getElementsByClassName('subButtons')
const statInput = document.getElementsByClassName('userInputs')
const infoRow = document.getElementsByClassName('infoRow')
const infoContainer = document.getElementsByClassName('infoContainer')
const scoreButtonRow = document.getElementById('scoreRow')
const regBut = document.getElementById('regBut')
const scoreBut = document.getElementById('scoreBut')
localStorage.clear()
inputContainer.style.display = 'none'
footer.style.display = 'none'
scoreButtonRow.style.display = 'none'
const itemArr = Array.from(formItem)
const subButArr = Array.from(statSubmitBut)
const statInputArr = Array.from(statInput)
const infoRowArr = Array.from(infoRow)
const infoContainerArr = Array.from(infoContainer)

console.log(subButArr)

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
    // leftImage.setAttribute('class', 'pic')
    leftImage.setAttribute('src', finalPick)
    // console.log(finalPick)
}
function placerRight(){
    const numPick = ranNum(0, teamPicArr.length)
    const finalPick = teamPicArr[numPick]
    // rightImage.setAttribute('class', 'pic')
    rightImage.setAttribute('src', finalPick)
    // console.log(finalPick)
}
placerLeft()
placerRight()
// Intervals for new pictures-------------------------------->
setInterval(placerLeft, 2000)
setInterval(placerRight, 2000)
infoSubmitBut.addEventListener('click', ()=>{
    localStorage.setItem("First Name", itemArr[1].value)
    localStorage.setItem("Last Name", itemArr[3].value)
    localStorage.setItem("Team Name", itemArr[5].value)
    inputContainer.style.display = 'inline'
    scoreButtonRow.style.display = 'inline'
    footer.style.display = 'inline'
    regBut.style.display = 'none'
    subButArr.forEach((button) => {
        button.classList.add('butAnn')
    })
})
function divMaker(){
    infoContainerArr.forEach((row)=>{
    let pointDiv = document.createElement('div')
    pointDiv.classList.add('pointsDiv')
    row.appendChild(pointDiv)
    })
}
divMaker()
const pointsDivs = document.getElementsByClassName('pointsDiv')
const pointsDivArr = Array.from(pointsDivs)
//QB passing yards function
subButArr[0].addEventListener('click', ()=>{
    let passYards = statInputArr[0].value
    let points = passYards/20
    if (passYards > 300){
        points = passYards/20+2
    }
    infoRowArr[0].style.display = 'none'
    let pointValuePlace = document.createElement('h1')
    pointValuePlace.classList.add('pointValuePlace')
    pointValuePlace.textContent = points
    pointsDivArr[0].appendChild(pointValuePlace)
})
//QB interception function
subButArr[1].addEventListener('click', ()=>{
    let interceptions = statInputArr[1].value
    let points = interceptions * 2 * -1
    infoRowArr[1].style.display = 'none'
    let pointValuePlace = document.createElement('h1')
    pointValuePlace.classList.add('pointValuePlace')
    pointValuePlace.textContent = points
    pointsDivArr[1].appendChild(pointValuePlace)
})
//Rushing function
function rushCalcl(arrP){
    let rushYards = statInputArr[arrP].value
    let points = rushYards / 10
    infoRowArr[arrP].style.display = 'none'
    let pointValuePlace = document.createElement('h1')
    pointValuePlace.classList.add('pointValuePlace')
    pointValuePlace.textContent = points
    pointsDivArr[arrP].appendChild(pointValuePlace)
}
//TD function
function TDcalc(arrP){
    let touchdowns = statInputArr[arrP].value
    let points = touchdowns * 6
    infoRowArr[arrP].style.display = 'none'
    let pointValuePlace = document.createElement('h1')
    pointValuePlace.classList.add('pointValuePlace')
    pointValuePlace.textContent = points
    pointsDivArr[arrP].appendChild(pointValuePlace)
}
//Receiving yards function
function recCalc(arrP){
    let recYards = statInputArr[arrP].value
    let points = recYards/10
    if(recYards > 100){
        points = recYards/10 + 2
    }
    infoRowArr[arrP].style.display = 'none'
    let pointValuePlace = document.createElement('h1')
    pointValuePlace.classList.add('pointValuePlace')
    pointValuePlace.textContent = points
    pointsDivArr[arrP].appendChild(pointValuePlace) 
}
//Receptions function
function recpCalc(arrP){
    let receptions = statInputArr[arrP].value
    let points = receptions
    infoRowArr[arrP].style.display = 'none'
    let pointValuePlace = document.createElement('h1')
    pointValuePlace.classList.add('pointValuePlace')
    pointValuePlace.textContent = points
    pointsDivArr[arrP].appendChild(pointValuePlace) 
}
// Defensive Interception function
function defScore(arrP){
    let numberOf = statInputArr[arrP].value
    let points = numberOf * 2
    infoRowArr[arrP].style.display = 'none'
    let pointValuePlace = document.createElement('h1')
    pointValuePlace.classList.add('pointValuePlace')
    pointValuePlace.textContent = points
    pointsDivArr[arrP].appendChild(pointValuePlace) 
}
//QB rushing
subButArr[2].addEventListener('click', ()=>{
    rushCalcl(2)
})
//QB TDs
subButArr[3].addEventListener('click', ()=>{
    TDcalc(3)
})
//RB rushing
subButArr[4].addEventListener('click', ()=>{
    rushCalcl(4)
})
// RB receiving
subButArr[5].addEventListener('click', ()=>{
    recCalc(5)
})
// RB receptions 
subButArr[6].addEventListener('click', ()=>{
    recpCalc(6)
})
// RB TDs
subButArr[7].addEventListener('click', ()=>{
    TDcalc(7)
})
// WR receiving
subButArr[8].addEventListener('click', ()=>{
    recCalc(8)
})
//WR rushing
subButArr[9].addEventListener('click', ()=>{
    rushCalcl(9)
})
// WR receptions 
subButArr[10].addEventListener('click', ()=>{
    recpCalc(10)
})
// WR TDs
subButArr[11].addEventListener('click', ()=>{
    TDcalc(11)
})
// Defensive Interceptions
subButArr[12].addEventListener('click', ()=>{
    defScore(12)
})
// Defensive sacks
subButArr[13].addEventListener('click', ()=>{
    defScore(13)
})
scoreBut.addEventListener('click', ()=>{
    inputContainer.style.display = 'none'
    const pointPlace = document.getElementsByClassName('pointValuePlace')
    const pointPlaceArr = Array.from(pointPlace)
    const finPointArr = []
    pointPlaceArr.forEach((score) =>{
    finPointArr.push(parseFloat(score.textContent))
    })
    const totalPoints = finPointArr.reduce((accumulator, currentValue) => accumulator + currentValue)
    scoreBut.style.display = 'none'
    const fName = localStorage.getItem('First Name')
    const lName = localStorage.getItem('Last Name')
    const teamName = localStorage.getItem('Team Name')
    finalScore = document.createElement('h1')
    finalScore.setAttribute('id', 'finScore')
    finalScore.textContent = `${fName} ${lName} the score for ${teamName} is ${totalPoints}`
    scoreButtonRow.appendChild(finalScore)
    console.log(finPointArr)
    console.log(totalPoints)
})

