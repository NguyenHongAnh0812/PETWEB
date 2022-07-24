const preNode = document.querySelector('.section-trending-search-list__item')
const arrItem = [
    {
        url : "https://cf.shopee.vn/file/31b1f19f9543ee0bb8e63a6ceec15e89",
        text: ["Dép","4k+ sản phẩm"]
    },
    {
        url: "https://cf.shopee.vn/file/2cec74eacd21ae6f04cde524125a4d41",
        text: ["Áo Phông","5k+ sản phẩm"]
    },
    {
        url : "https://cf.shopee.vn/file/fd715f56e885458695607f6cf1b8ddee",
        text: ["Váy","4k+ sản phẩm"]
    },
    {
        url: "https://cf.shopee.vn/file/d04040a34b1020fcbe1693870473a4aa",
        text: ["Dép nữ","7k+ sản phẩm"]
    },
    {
        url: "https://cf.shopee.vn/file/36681386aa67c57d7e97ab0d2adcae36",
        text: ["Áo croptop","6k+ sản phẩm"]
    }
]

function addItemBG(url) {
    const itemBG = document.createElement('div')
    itemBG.className = "item-bg"
    itemBG.style.backgroundImage = `url(${url})`
    itemBG.style.backgroundRepeat = "no-repeat"
    itemBG.style.backgroundSize = "contain"
    return itemBG
}
function addItemText(text) {
    const itemText = document.createElement('div')
    itemText.className = "item-text"

    const item1 = document.createElement('div')
    const item2 = document.createElement('div')
    item1.innerHTML = text[0], item2.innerHTML = text[1]
    item1.className = "item-text1", item2.className = "item-text2"
    itemText.appendChild(item1)
    itemText.appendChild(item2)
    return itemText
}
function createItem(url,text) {
    const item = document.createElement('div')
    item.className = "item"
    item.appendChild(addItemText(text))
    item.appendChild(addItemBG(url))
    return item
}
function App() {
    for(let value of arrItem) {
        preNode.appendChild(createItem(value.url,value.text))
    }
}
App()