import p5 from 'p5'
import setCanvas from '../setCanvas'

let [canvasW, canvasH] = setCanvas()
let changingShapes = document.createElement('div')

const sketch = (p) => {
  p.setup = () => {
    p.createCanvas(canvasW, canvasH)
  }
  
  p.draw = () => {
    p.background(255);
    p.fill(0);
    if (p.mouseX < p.width/3) {
      p.triangle(p.width/2, p.height/3, p.width*0.3, p.height/1.5, p.width*0.7, p.height/1.5)
    } else if (p.mouseX < 2*p.width/3) {
      p.rectMode('center')
      p.square(p.width/2, p.height/2, p.width/3)
    } else {
      p.circle(p.width/2, p.height/2, p.width/3)
    }
  }
}

new p5(sketch, changingShapes)

export default changingShapes