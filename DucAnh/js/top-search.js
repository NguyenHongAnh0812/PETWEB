const top_search = document.querySelector('.top-search .top-search__content-list-items')

const arrayItemTopSearch = [
    {
        url: "https://cf.shopee.vn/file/769c85eb0cc45f776c9b99d5134cda93",
        text:"Mũ Lưỡi Trai",
        text1: "Bán 69k+ / tháng"
    },
    {
        url: "https://cf.shopee.vn/file/07e91012d2d803706677f86d99f57ba0",
        text: "Sữa Rửa Mặt",
        text1: "Bán 69k+ / tháng"
    },
    {
        url: "https://cf.shopee.vn/file/1378b90f69b5e6208e6e4dee751c9093",
        text: "Bông Tẩy Trang 3 Lớp Cotton Pads",
        text1: "Bán 72k+ / tháng"
    },
    {
        url: "https://cf.shopee.vn/file/2a3225ce6277329f3950bd963c808c8e",
        text: "Dép Quai Ngang Nữ",
        text1: "Bán 61k+ / tháng"
    },
    {
        url: "https://cf.shopee.vn/file/569f5566d9c55f4b3fa34d70e0d5acc3",
        text: "Nước Tẩy Trang L'Oreal",
        text1: "Bán 47k+ / tháng"
    },
    {
        url: "https://cf.shopee.vn/file/1c23ccb76031614584cbdd977e31bd7a",
        text: "Ốp Lưng Iphone",
        text1: "Bán 55k+ / tháng"
    }
]
function addText1(text1) {
    const itemText = document.createElement('div')
    itemText.className = "item-text1"
    itemText.innerHTML = text1
    return itemText
}
function createImg(url) {
    const img = document.createElement('img')
    img.className = "item-img"
    img.src = url
    img.style.objectFit = "contain"
    return img
}
function createImgTop() {
    const imgtop = document.createElement('div')
    imgtop.className = "item-img-top"
    return imgtop
}
function createText(text) {
    const itemText = document.createElement('div')
    itemText.className = "item-text"
    itemText.innerHTML = text
    return itemText
}
function createItem(url,text,text1) {
    const item = document.createElement('a')
    item.className = "item"
    item.appendChild(createImg(url))
    item.appendChild(createText(text))
    item.appendChild(addText1(text1))
    item.appendChild(createImgTop())
    return item
}
function addItem(url,text,text1) {
    const item = document.createElement('li')
    item.className = "item__wrap"
    item.appendChild(createItem(url,text,text1))
    return item
}
function App() {
    for(let value of arrayItemTopSearch) {
        top_search.appendChild(addItem(value.url,value.text,value.text1))
    }
}
App()