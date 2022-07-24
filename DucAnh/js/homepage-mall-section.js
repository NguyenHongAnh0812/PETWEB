const node = document.querySelector('.homepage-mall-section .homepage-mall-section__contain-list-items')
const arrayItems = [
    [{
        url: "https://cf.shopee.vn/file/52a7b570802cc97f0e12efeefbb27113_xhdpi",
        text: "Voucher 100k"
    },
    {
        url: "https://cf.shopee.vn/file/2f979f7f884c790763da963becb10f2e_xhdpi",
        text: "Ưu đãi đến 50%"
    }
    ],
    [{
        url: "https://cf.shopee.vn/file/e0061cecbefe4ed516409422f4ead56c_xhdpi",
        text: "Mua là có quà"
    },
    {
        url: "https://cf.shopee.vn/file/d05aa4a4312b129b869295fcb31ec969_xhdpi",
        text: "Mua là có quà"
    }],
    [{
        url: "https://cf.shopee.vn/file/e4d6342f21795e41350c856540bad3d1_xhdpi",
        text: "Siêu sale apple"
    },
    {
        url: "https://cf.shopee.vn/file/56a0092147531e36de4489162b2b91e0_xhdpi",
        text: "Deal sale to"
    }],
    [{
        url: "https://cf.shopee.vn/file/bf570b25d01bd70deab626c717437fbc_xhdpi",
        text: "Đón sale cực sốc"
    },
    {
        url: "https://cf.shopee.vn/file/e77c2c87a886f7f9ce5116ed8e1f89ff_xhdpi",
        text: "Mua 1 được 2"
    }]
]

function addBg(url) {
    const bg = document.createElement('div')
    bg.className = "item__wrap-icon"
    bg.style.backgroundImage = `url(${url})`
    bg.style.backgroundRepeat = "no-repeat"
    bg.style.backgroundSize = "contain"
    return bg
}
function addText(text) {
    const itemText = document.createElement('div')
    itemText.className = "item__wrap-text"
    itemText.innerHTML = text
    // console.log(itemText.style.innerHTML)
    return itemText
}

function createItem(url,text) {
    const item = document.createElement('div')
    item.className = "item__wrap"
    item.appendChild(addBg(url))
    item.appendChild(addText(text))
    return item
}
function addItem(value) {
    const item = document.createElement('li')
    item.className = "item"
    item.appendChild(createItem(value[0].url,value[0].text))
    item.appendChild(createItem(value[1].url,value[1].text))
    return item
}
function App() {
    for(let value of arrayItems) {
        node.appendChild(addItem(value))
    }
}
App()