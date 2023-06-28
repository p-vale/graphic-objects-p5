import './style.css'
import wrapper from './wrapper'
import box from './designs/test'

// title
const title = document.createElement('h1')
title.innerHTML = 'p5.js cerative coding examples'

// designs

function component () {
  const el = document.createElement('div')
  el.setAttribute('id', 'container')

  wrapper(el, box, "test")
  
  // el.appendChild(box)

  return el;
}

// credits
const footer = document.createElement('div')
footer.setAttribute('id', 'footer')

const profile = document.createElement('a')
const link = document.createTextNode('p-vale') // can't use innerHTML or title with <a>
profile.appendChild(link)
profile.href = 'https://github.com/p-vale/graphic-objects-p5'
const credits = document.createElement('p')
credits.innerHTML = 'made by '
credits. appendChild(profile)

footer.appendChild(credits)

// render
document.body.appendChild(title)
document.body.appendChild(component())
document.body.appendChild(footer)