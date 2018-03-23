let keyboard= [['q','w','e','r','t','y','u','i','o','p'],
['a','s','d','f','g','h','j','k','l'],
['z','x','c','v','b','n','m']]

let hash = {
  q: 'qq.com',
  w: 'weixin.com',
  e: 'ele.me',
  r: 'react.org'
}

let navigation = document.querySelector('#navigation')
let div = document.createElement('div')
let kbd = document.createElement('kbd')
let edit = document.createElement('button')
let hashInLocalstorage = JSON.parse(localStorage.getItem('newHash') || 'null')
if(hashInLocalstorage) {
  hash = hashInLocalstorage
}

for(let i=0; i<keyboard.length; i++) {
  div = document.createElement('div')
  for(let j=0; j<keyboard[i].length; j++) {
    kbd = document.createElement('kbd')
    kbd.innerText = keyboard[i][j]
    edit = document.createElement('button')
    edit.id = keyboard[i][j]
    edit.innerText = 'E'
    kbd.appendChild(edit)
    div.appendChild(kbd)
    edit.onclick = (event) => {
      hash[event.target.id] = prompt('输入网址')
      localStorage.setItem('newHash', JSON.stringify(hash))
    }
  }
  navigation.appendChild(div)
}

document.onkeypress = (event) => {
  window.open(`http://${hash[event.key]}`)
}