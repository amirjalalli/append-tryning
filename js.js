let ulElem = document.querySelector('.ulul')

function addNewLi () {
let newLiTag = document.createElement('li')
newLiTag.innerHTML = 'login'
ulElem.append(newLiTag)
}