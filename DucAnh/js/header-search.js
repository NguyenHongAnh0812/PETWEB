const inputSearch = document.querySelector('.header .header__search-input-tag')
const headerSearchHistory = document.querySelector('.header .header__search-history')
const iconSearch = document.querySelector('.header .header__search-icon')
const key = 'header_search'
const lengthMax = 10
const heightItemHeaderSearch = 3 // 3em
let arrayHeaderSearch = []
let isClicked = false

if(!localStorage.getItem(key)) {
    arrayHeaderSearch.push("Lưu sớm Freeship 0Đ dùng 25.7")
    localStorage.setItem(key,JSON.stringify(arrayHeaderSearch))
}

function addToLocalStorage() {
    localStorage.setItem(key,JSON.stringify(arrayHeaderSearch))
}
function getFromLocalStorage() {
    arrayHeaderSearch = JSON.parse(localStorage.getItem(key))
}

function clearHeaderSearchHistory() {
    while(headerSearchHistory.firstChild) {
        headerSearchHistory.removeChild(headerSearchHistory.lastChild)
    }
}

function updateHeaderSearchHistory() {
    getFromLocalStorage()
    clearHeaderSearchHistory()
    headerSearchHistory.style.height = heightItemHeaderSearch * arrayHeaderSearch.length + "em"
    for(let value of arrayHeaderSearch) {
        const item = document.createElement('div')
        item.className = ("header__search-history-item")
        item.innerHTML = value
        headerSearchHistory.appendChild(item)
    }
}
function handleInputSearchClick() {
    if(!isClicked) {
        updateHeaderSearchHistory()
        isClicked = true
        headerSearchHistory.style.display = "block" 
    }
}

inputSearch.addEventListener('click',handleInputSearchClick)
inputSearch.addEventListener("keypress", function(event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter" && event.target.value) {
        if(arrayHeaderSearch.length == lengthMax) {
            arrayHeaderSearch.pop();
        }
    //    console.log(event.target.value) // get value input
        const itemFirst = arrayHeaderSearch.shift()
        arrayHeaderSearch.unshift(event.target.value)
        arrayHeaderSearch.unshift(itemFirst)
        addToLocalStorage()
        updateHeaderSearchHistory()
        location.reload();
    }
});
iconSearch.addEventListener('click', () => {
    if(inputSearch.value) {
        if(arrayHeaderSearch.length == lengthMax) {
            arrayHeaderSearch.pop();
        }
        const itemFirst = arrayHeaderSearch.shift()
        arrayHeaderSearch.unshift(inputSearch.value)
        arrayHeaderSearch.unshift(itemFirst)
        addToLocalStorage()
        updateHeaderSearchHistory()
        location.reload();
    }
})
// localStorage.removeItem(key)

document.addEventListener('click', function(event) {
    if(!headerSearchHistory.contains(event.target) && !inputSearch.contains(event.target)) {
        headerSearchHistory.style.display = "none"
        isClicked = false
    }
});