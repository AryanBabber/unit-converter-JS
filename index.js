let number = 30;
let feetToMeters = number/ 3.281;
let metersToFeet = number * 3.281

let litersToGallons = number/3.785
let gallonsToLitres = number*3.785

let poundToKg = number/2.205
let kgToPound = number*2.205

let numConverter = document.getElementById('converter-num')
let numLength = document.getElementById('numLength')
let numMass = document.getElementById('numMass')
let numVolume = document.getElementById('numVolume')
numConverter.innerText = number
numLength.textContent = `${number} Meters = ${metersToFeet} Feet | ${number} Feet = ${feetToMeters.toFixed(3)} Meters`
numMass.textContent = `${number} Kgs = ${kgToPound} Pounds | ${number} Pounds = ${poundToKg.toFixed(3)} Kgs`
numVolume.textContent = `${number} Liters = ${litersToGallons.toFixed(3)} Gallons | ${number} Gallons = ${gallonsToLitres.toFixed(3)} Liters`