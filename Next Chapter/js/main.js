const leftPic = document.getElementById('leftPic')
const rightPic = document.getElementById('rightPic')
// Picture creation declarations---------------------->
const div = document.getElementById('topRow')
const arz = document.createElement('img')
arz.setAttribute('src', './assets/arizona.png')
const dal = document.createElement('img')
dal.setAttribute('src', './assets/dallas.png')
const wash = document.createElement('img')
wash.setAttribute('src', './assets/washington.png')
const phi = document.createElement('img') 
phi.setAttribute('src', './assets/philedelphia.png')
const nyg = document.createElement('img') 
nyg.setAttribute('src', './assets/newYorkG.png')
const bal = document.createElement('img') 
bal.setAttribute('src', './assets/baltimore.png')
const buff = document.createElement('img') 
buff.setAttribute('src', './assets/buffalo.png')
const mia = document.createElement('img') 
mia.setAttribute('src', './assets/miami.png')
const tb = document.createElement('img')
tb.setAttribute('src', './assets/tampa.png') 
const car = document.createElement('img')
car.setAttribute('src', './assets/carolina.png') 
const den = document.createElement('img') 
den.setAttribute('src', './assets/denver.png')
const lv = document.createElement('img')
lv.setAttribute('src', './assets/lasVegas.png') 
const sf = document.createElement('img')
sf.setAttribute('src', './assets/sanFran.png') 
const kc = document.createElement('img') 
kc.setAttribute('src', './assets/kansasCity.png')
const lac = document.createElement('img')
lac.setAttribute('src', './assets/losAngeles.png') 
const lar = document.createElement('img')
lar.setAttribute('src', './assets/losAngelesRams.png') 
const sea = document.createElement('img') 
sea.setAttribute('src', './assets/seattle.png')
const nyj = document.createElement('img')
nyj.setAttribute('src', './assets/newYorkJ.png') 
const jax = document.createElement('img')
jax.setAttribute('src', './assets/jacksonville.png') 
const hou = document.createElement('img')
hou.setAttribute('src', './assets/houston.png')
const tenn = document.createElement('img')
tenn.setAttribute('src', './assets/tennesse.png') 
const det = document.createElement('img')
det.setAttribute('src', './assets/detroit.png') 
const gb = document.createElement('img') 
gb.setAttribute('src', './assets/greenbay.png')
const minn = document.createElement('img')
minn.setAttribute('src', './assets/minnesota.png') 
const chi = document.createElement('img')
chi.setAttribute('src', './assets/chicago.png') 
const atl = document.createElement('img')
atl.setAttribute('src', './assets/atlanta.png') 
const pitt = document.createElement('img')
pitt.setAttribute('src', './assets/pittsburgh.png')
const no = document.createElement('img')
no.setAttribute('src', './assets/newOrleans.png') 
const ne = document.createElement('img') 
ne.setAttribute('src', './assets/newEngland.png')
const ind = document.createElement('img') 
ind.setAttribute('src', './assets/indy.png')
const cin = document.createElement('img')
cin.setAttribute('src', './assets/cinncinatti.png') 
const cle = document.createElement('img')
cle.setAttribute('src', './assets/clevland.png')
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
    console.log(numPick)
    const finalPick = teamPicArr[numPick]
    leftPic.append(finalPick)
    finalPick.setAttribute('class', 'pic')
    function gone(){
        finalPick.remove()
    }
    setTimeout(gone, 1500)
}
function placerRight(){
    const numPick = ranNum(0, teamPicArr.length)
    const finalPick = teamPicArr[numPick]
    rightPic.append(finalPick)
    finalPick.setAttribute('class', 'pic')
    function gone(){
        finalPick.remove()
    }
    setTimeout(gone, 1500)
}
placerLeft()
placerRight()
// Intervals for new pictures-------------------------------->
setInterval(placerLeft, 2000)
setInterval(placerRight, 2000)
