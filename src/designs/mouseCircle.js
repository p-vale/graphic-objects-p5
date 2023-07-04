import p5 from 'p5'
import setCanvas from '../setCanvas'

let [canvasW, canvasH] = setCanvas()
let mouseCircle = document.createElement('div')

const sketch = (p) => {
  p.setup = () => {
    p.createCanvas(canvasW, canvasH)
  }
  
  p.draw = () => {
    p.background(255)
    p.strokeWeight(2)
    if (p.mouseIsPressed) p.circle(p.mouseX, p.mouseY, 50);
  }
}

new p5(sketch, mouseCircle)

export default mouseCircle