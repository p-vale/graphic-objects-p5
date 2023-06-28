function setCanvas () {
  let canvasW = 500
  let canvasH = 500
  let screenWidth = window.screen.width
  if (screenWidth < 600) {
    canvasW = 400
    canvasH = 400
  } else if (screenWidth < 400) {
    canvasW = 300
    canvasH = 300
  }

  return [canvasW, canvasH]
}

export default setCanvas