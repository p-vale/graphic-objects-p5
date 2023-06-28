function wrapper (parent, child, descr) {
  child.style.backgroundColor = 'white'
  child.style.filter = 'drop-shadow(0 0 10px rgb(200, 200, 200))'

  const description = document.createElement('p')
  description.innerHTML = descr

  parent.appendChild(child)
  parent.appendChild(description)
}

export default wrapper