const leftImage = document.getElementById('leftImage')
const rightImage = document.getElementById('rightImage')
const formSection = document.getElementById('formSection')
const formDiv = document.getElementById('formDiv')
const form = document.getElementById('regForm')
const formItem = document.getElementsByClassName('formItem')
const inputContainer = document.getElementById('inputContainer')
const infoSubmitBut = document.getElementById('regSubBut')
const statSubmitBut = document.getElementsByClassName('subButtons')
const statInput = document.getElementsByClassName('userInputs')
const infoSection = document.getElementsByClassName('infoSection')
const infoContainer = document.getElementsByClassName('infoContainer')
const scoreButtonRow = document.getElementById('scoreRow')
const regBut = document.getElementById('regBut')
const statText = document.getElementById('statText')
const scoreBut = document.getElementById('scoreBut')
localStorage.clear()
inputContainer.style.display = 'none'
statText.style.display = 'none'
scoreButtonRow.style.display = 'none'
const itemArr = Array.from(formItem)
const subButArr = Array.from(statSubmitBut)
const statInputArr = Array.from(statInput)
const infoSectionArr = Array.from(infoSection)
const infoContainerArr = Array.from(infoContainer)
const arz = './NextChapter/assets/arizona.png'
const dal = './NextChapter/assets/dallas.png'
const wash = './NextChapter/assets/washington.png'
const phi = './NextChapter/assets/philedelphia.png'
const nyg = './NextChapter/assets/newYorkG.png'
const bal = './NextChapter/assets/baltimore.png'
const buff = './NextChapter/assets/buffalo.png'
const mia = './NextChapter/assets/miami.png'
const tb = './NextChapter/assets/tampa.png'
const car = './NextChapter/assets/carolina.png'
const den = './NextChapter/assets/denver.png'
const lv = './NextChapter/assets/lasVegas.png'
const sf = './NextChapter/assets/sanFran.png'
const kc = './NextChapter/assets/kansasCity.png'
const lac = './NextChapter/assets/losAngeles.png'
const lar = './NextChapter/assets/losAngelesRams.png'
const sea = './NextChapter/assets/seattle.png'
const nyj = './NextChapter/assets/newYorkJ.png'
const jax = './NextChapter/assets/jacksonville.png'
const hou = './NextChapter/assets/houston.png'
const tenn = './NextChapter/assets/tennesse.png'
const det = './NextChapter/assets/detroit.png'
const gb = './NextChapter/assets/greenbay.png'
const minn = './NextChapter/assets/minnesota.png'
const chi = './NextChapter/assets/chicago.png'
const atl = './NextChapter/assets/atlanta.png'
const pitt = './NextChapter/assets/pittsburgh.png'
const no = './NextChapter/assets/newOrleans.png'
const ne = './NextChapter/assets/newEngland.png'
const ind = './NextChapter/assets/indy.png'
const cin = './NextChapter/assets/cinncinatti.png'
const cle = './NextChapter/assets/clevland.png'
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
function ranNum(min, max) {
    const randomNum = Math.floor(Math.random() * (max - min)) + min
    return randomNum
}
// Functions for placing and removing pictures---------------->
function placerLeft() {
    const numPick = ranNum(0, teamPicArr.length)
    const finalPick = teamPicArr[numPick]
    leftImage.setAttribute('src', finalPick)
}
function placerRight() {
    const numPick = ranNum(0, teamPicArr.length)
    const finalPick = teamPicArr[numPick]
    rightImage.setAttribute('src', finalPick)
}
placerLeft()
placerRight()
// Intervals for new pictures-------------------------------->
setInterval(placerLeft, 2000)
setInterval(placerRight, 2000)
regBut.addEventListener('click', () => {
    
    formDiv.style.display = 'inline'
    regBut.style.display = 'none'
})
form.addEventListener('submit', (e) => {
    e.preventDefault()
    localStorage.setItem("First Name", itemArr[1].value)
    localStorage.setItem("Last Name", itemArr[3].value)
    localStorage.setItem("Team Name", itemArr[5].value)
    inputContainer.style.display = 'inline'
    scoreButtonRow.style.display = 'flex'
    statText.style.display = 'inline'
    regBut.style.display = 'none'
    formDiv.style.display = 'none'
    subButArr.forEach((button) => {
        button.classList.add('butAnn')
    })
})
function divMaker() {
    infoSectionArr.forEach((section) => {
        let pointDiv = document.createElement('div')
        pointDiv.classList.add('pointsDiv')
        section.appendChild(pointDiv)
        pointDiv.style.display = 'none'
    })
}
divMaker()
const pointsDivs = document.getElementsByClassName('pointsDiv')
const pointsDivArr = Array.from(pointsDivs)
//QB passing yards function
subButArr[0].addEventListener('click', () => {
    let passYards = statInputArr[0].value;
    passYards = Number(passYards);
    if (isNaN(passYards)) {
        alert('Must enter a number only');
    }
    else {
        let points = passYards / 20;
        if (passYards > 300) {
            points += 2;
        }
        statInputArr[0].style.display = 'none'
        subButArr[0].style.display = 'none'
        infoSectionArr[0].style.justifyContent = 'center'
        let pointValuePlace = document.createElement('h1');
        pointValuePlace.classList.add('pointValuePlace', 'scoreAnn');
        pointValuePlace.textContent = points;
        pointsDivArr[0].style.display = 'inline'
        pointsDivArr[0].appendChild(pointValuePlace);
    }
});
//QB interception function
subButArr[1].addEventListener('click', () => {
    let interceptions = statInputArr[1].value
    interceptions = Number(interceptions)
    if (isNaN(interceptions)) {
        alert('Must enter a number only');
    } else {
        let points = interceptions * 2 * -1
        statInputArr[1].style.display = 'none'
        subButArr[1].style.display = 'none'
        infoSectionArr[1].style.justifyContent = 'center'
        let pointValuePlace = document.createElement('h1');
        pointValuePlace.classList.add('pointValuePlace', 'scoreAnn');
        pointValuePlace.textContent = points;
        pointsDivArr[1].style.display = 'inline'
        pointsDivArr[1].appendChild(pointValuePlace);
        
    }
})
//Rushing function
function rushCalcl(arrP) {
    let rushYards = statInputArr[arrP].value
    rushYards = Number(rushYards)
    if (isNaN(rushYards)) {
        alert('Must enter a number only');
    } else {
        let points = rushYards / 10
        statInputArr[arrP].style.display = 'none'
        subButArr[arrP].style.display = 'none'
        infoSectionArr[arrP].style.justifyContent = 'center'
        let pointValuePlace = document.createElement('h1');
        pointValuePlace.classList.add('pointValuePlace', 'scoreAnn');
        pointValuePlace.textContent = points;
        pointsDivArr[arrP].style.display = 'inline'
        pointsDivArr[arrP].appendChild(pointValuePlace);
        
    }
}
// Score placing function
function test(position, score){
    statInputArr[position].style.display = 'none'
    subButArr[position].style.display = 'none'
    infoSectionArr[position].style.justifyContent = 'center'
    let pointValuePlace = document.createElement('h1');
    pointValuePlace.classList.add('pointValuePlace', 'scoreAnn');
    pointValuePlace.textContent = score;
    pointsDivArr[position].style.display = 'inline'
    pointsDivArr[position].appendChild(pointValuePlace);
}
//TD function
function TDcalc(arrP) {
    let touchdowns = statInputArr[arrP].value
    touchdowns = Number(touchdowns)
    if (isNaN(touchdowns)) {
        alert('Must enter a number only');
    } else {
        let points = touchdowns * 6
        test(arrP, points)
    }
}
//Receiving yards function
function recCalc(arrP) {
    let recYards = statInputArr[arrP].value
    recYards = Number(recYards)
    if (isNaN(recYards)) {
        alert('Must enter a number only');
    } else {
        let points = recYards / 10
        if (recYards > 100) {
            points = recYards / 10 + 2
        }
        test(arrP, points)
    }
}
//Receptions function
function recpCalc(arrP) {
    let receptions = statInputArr[arrP].value
    receptions = Number(receptions)
    if (isNaN(receptions)) {
        alert('Must enter a number only');
    } else {
        let points = receptions
        test(arrP, points)
    }
}
// Defensive Interception function
function defScore(arrP) {
    let numberOf = statInputArr[arrP].value
    numberOf = Number(numberOf)
    if (isNaN(numberOf)) {
        alert('Must enter a number only');
    } else {
        let points = numberOf * 2
        test(arrP, points)
    }
}
//QB rushing
subButArr[2].addEventListener('click', () => {
    rushCalcl(2)
})
//QB TDs
subButArr[3].addEventListener('click', () => {
    TDcalc(3)
})
//RB rushing
subButArr[4].addEventListener('click', () => {
    rushCalcl(4)
})
// RB receiving
subButArr[5].addEventListener('click', () => {
    recCalc(5)
})
// RB receptions 
subButArr[6].addEventListener('click', () => {
    recpCalc(6)
})
// RB TDs
subButArr[7].addEventListener('click', () => {
    TDcalc(7)
})
// WR receiving
subButArr[8].addEventListener('click', () => {
    recCalc(8)
})
//WR rushing
subButArr[9].addEventListener('click', () => {
    rushCalcl(9)
})
// WR receptions 
subButArr[10].addEventListener('click', () => {
    recpCalc(10)
})
// WR TDs
subButArr[11].addEventListener('click', () => {
    TDcalc(11)
})
// Defensive Interceptions
subButArr[12].addEventListener('click', () => {
    defScore(12)
})
// Defensive sacks
subButArr[13].addEventListener('click', () => {
    defScore(13)
})
// End score and final text placement function
scoreBut.addEventListener('click', () => {
    inputContainer.style.display = 'none'
    statText.textContent = 'Result'
    const pointPlace = document.getElementsByClassName('pointValuePlace')
    const pointPlaceArr = Array.from(pointPlace)
    const finPointArr = []
    pointPlaceArr.forEach((score) => {
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
})

