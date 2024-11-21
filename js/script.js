/*===============
utility functions
===============*/
function generateRandomHexCode() {
  // generate random int between 0 - 16777216 (#FFFFFF)
  const randomInt = Math.floor(Math.random() * 16777216)
  // convert int to hex and pad with 0s if necessary
  const colorHex = `${randomInt.toString(16).padStart(6, '0')}`
  return colorHex
}

function getRandomGenerationMode() {
  const modes = [
    'monochrome',
    'monochrome-dark',
    'monochrome-light',
    'analogic',
    'complement',
    'analogic-complement',
    'triad',
    'quad',
  ]

  return modes[Math.floor(Math.random() * modes.length)]
}

function getRandomColorPalette() {
  let htmlString = ''

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${generateRandomHexCode()}&mode=${getRandomGenerationMode()}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data)

      data.colors.forEach((color) => {
        htmlString += `<div class="colors__color" style="background: ${color.hex.value}"></div>`
      })

      document.querySelector('.grid__color-swatches').innerHTML = htmlString
    })
}

/*=============
event listeners 
=============*/
window.addEventListener('load', () => {
  getRandomColorPalette()
})

document.addEventListener('keydown', (e) => {
  if (e.code === 'Space') {
    e.preventDefault() // prevents scrolling
    getRandomColorPalette()
  }
})

const generateRandomPaletteBtn = document.querySelector(
  '#controls__button-random'
)
generateRandomPaletteBtn.addEventListener('click', () => {
  getRandomColorPalette()
})

const generatePersonalizedPaletteBtn = document.querySelector(
  '#controls__button-generate'
)
const controlColorPicker = document.querySelector('#controls__color')
const controlModeSelector = document.querySelector('#controls__select')
generatePersonalizedPaletteBtn.addEventListener('click', () => {
  const selectedColor = controlColorPicker.value
  const extractedHexCode = selectedColor.slice(1)
  const selectedMode = controlModeSelector.value

  let htmlString = ''

  fetch(
    `https://www.thecolorapi.com/scheme?hex=${extractedHexCode}&mode=${selectedMode}`
  )
    .then((res) => res.json())
    .then((data) => {
      console.log(data)

      data.colors.forEach((color) => {
        htmlString += `<div class="colors__color" style="background: ${color.hex.value}"></div>`
      })

      document.querySelector('.grid__color-swatches').innerHTML = htmlString
    })
})
