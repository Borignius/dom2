var scran = document.getElementById('screen')
var span = document.getElementsByTagName('span')
var num1 = ''
var num2 = ''
var kScreen = ''
span[1].addEventListener('click', divideNum, false)
span[2].addEventListener('click', multiplyNum, false)
span[6].addEventListener('click', minusNum, false)
span[10].addEventListener('click', addNum, false)
span[0].addEventListener('click', clearScreen, false)
span[14].addEventListener('click', equalNumbers, false)
span[3].addEventListener('click', initnum7, false)
span[4].addEventListener('click', initnum8, false)
span[5].addEventListener('click', initnum9, false)
span[7].addEventListener('click', initnum4, false)
span[8].addEventListener('click', initnum5, false)
span[9].addEventListener('click', initnum6, false)
span[11].addEventListener('click', initnum1, false)
span[12].addEventListener('click', initnum2, false)
span[13].addEventListener('click', initnum3, false)
span[15].addEventListener('click', initnum0, false)

function equalNumbers(event) {
  num2 = kScreen
  var anser = num2.split(' ', 3)
  switch (anser[1]) {
    case '+':
        anser = Number(anser[0]) + Number(anser[2])
      break;
    case '/':
          anser = Number(anser[0]) / Number(anser[2])
      break;
    case 'X':
          anser = Number(anser[0]) * Number(anser[2])
      break;
    case '-':
          anser = Number(anser[0]) - Number(anser[2])
      break;
    default:
      anser = ''
  }
  fanser = anser.toString()
  kScreen = fanser
  num1 = ''
  num2 = ''
  initScreen(kScreen)
}

function addNum(event) {
  if (num1 == ''){
    num1 = kScreen
    kScreen = kScreen + ' + '
    console.log(num1);
  }else{
    num2 = kScreen
    var anser = num2.split(' ', 3)
    anser = Number(anser[0]) + Number(anser[2])
    fanser = anser.toString()
    kScreen = fanser + ' + '
    num1 = kScreen
    num2 = ''
  }
  initScreen(kScreen)
}

function minusNum(event) {
  if (num1 == ''){
    num1 = kScreen
    kScreen = kScreen + ' - '
    console.log(num1);
  }else{
    num2 = kScreen
    var anser = num2.split(' ', 3)
    anser = Number(anser[0]) - Number(anser[2])
    fanser = anser.toString()
    kScreen = fanser + ' - '
    num1 = kScreen
    num2 = ''
  }
  initScreen(kScreen)
}

function multiplyNum(event) {
  if (num1 == ''){
    num1 = kScreen
    kScreen = kScreen + ' X '
    console.log(num1);
  }else{
    num2 = kScreen
    var anser = num2.split(' ', 3)
    anser = Number(anser[0]) * Number(anser[2])
    fanser = anser.toString()
    kScreen = fanser + ' X '
    num1 = kScreen
    num2 = ''
  }
  initScreen(kScreen)
}

function divideNum(event) {
  if (num1 == ''){
    num1 = kScreen
    kScreen = kScreen + ' / '
    console.log(num1);
  }else{
    num2 = kScreen
    var anser = num2.split(' ', 3)
    if(anser[2] != '0'){
      anser = Number(anser[0]) / Number(anser[2])
      fanser = anser.toString()
      kScreen = fanser + ' / '
    }else{
      kScreen = 'Error'
    }
    num1 = kScreen
    num2 = ''
  }
  initScreen(kScreen)
}


function clearScreen(event) {
  num1 = ''
  num2 = ''
  kScreen = ''
  initScreen(kScreen)
}

function initnum0(event) {
  kScreen = kScreen + '0'
  initScreen(kScreen)
}
function initnum1(event){

  kScreen = kScreen + '1'
  initScreen(kScreen)
}
function initnum2(event){
  kScreen = kScreen + '2'
  initScreen(kScreen)
}
function initnum3(event){
  kScreen = kScreen + '3'
  initScreen(kScreen)
}
function initnum4(event){
  kScreen = kScreen + '4'
  initScreen(kScreen)
}
function initnum5(event){
  kScreen = kScreen + '5'
  initScreen(kScreen)
}
function initnum6(event){
  kScreen = kScreen + '6'
  initScreen(kScreen)
}
function initnum7(event){
  kScreen = kScreen + '7'
  initScreen(kScreen)
}
function initnum8(event){
  kScreen = kScreen + '8'
  initScreen(kScreen)
}
function initnum9(event){
  kScreen = kScreen + '9'
  initScreen(kScreen)
}
function initScreen(KScreen) {
  scran.textContent = kScreen
}
