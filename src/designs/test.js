import p5 from 'p5'
import setCanvas from '../setCanvas'

let [canvasW, canvasH] = setCanvas()
let box = document.createElement('div')

const sketch = (p) => {
  p.setup = () => {
    p.createCanvas(canvasW, canvasH)
  }
  
  p.draw = () => {
    p.background(255);
    p.fill(0);
    p.point(canvasW / 2, canvasH / 2)
  }
}

new p5(sketch, box)

export default box