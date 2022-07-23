const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const root = $('.flash-sale .flash-sale__content-list-item');
const arrayItem = [
    {
        url1: "https://cf.shopee.vn/file/451d9ee48ca056a7263fe1a0e5d0e699_tn",
        url2: "https://cf.shopee.vn/file/2033b6885711dfdb9338bca9a1f6e43a_tn",
        price: "12.290.000",
        discount: 31
    },
    {
        url1: "https://cf.shopee.vn/file/04b07a9175a6db920303f6a599f3780d_tn",
        url2: "https://cf.shopee.vn/file/3e89c365379db35a3dc8684a62982b6f_tn",
        price: "1.755.000",
        discount: 18
    },
    {
        url1: "https://cf.shopee.vn/file/451d9ee48ca056a7263fe1a0e5d0e699_tn",
        url2 :"https://cf.shopee.vn/file/26adff2aead2340ec2950b20bc03b274_tn",
        price: "223.000",
        discount: 22
    },
    {
        url1: "https://cf.shopee.vn/file/125101b84b4c57d1484258b2e2aa1408_tn",
        url2: "https://cf.shopee.vn/file/044b72010a260543f62ec61eed354bda_tn",
        price: "61.000",
        discount: 58
    },
    {
        url1: "https://cf.shopee.vn/file/04b07a9175a6db920303f6a599f3780d_tn",
        url2: "https://cf.shopee.vn/file/afca6ffde08413e3b75343416247ec4b_tn",
        price: "179.000",
        discount: 44
    },
    {
        url1: "https://cf.shopee.vn/file/a15d845313e16be28c25ce17dd297765_tn",
        url2: "https://cf.shopee.vn/file/d8e38583c1b1b2b3a5b07523d627d0de_tn",
        price: "2.460.000",
        discount: 45
    }
]

const a = arrayItem[0];

function addBG(url1,url2) {
    const bg = document.createElement('div')
    bg.className = "item-wrap__background"
    bg.style.backgroundImage = `url(${url1}), url(${url2})`
    bg.style.backgroundRepeat = "no-repeat"
    bg.style.backgroundSize = "contain"
    return bg;
}

function addBadgeText1(discount) {
    const text = document.createElement('div')
    text.className = "item-wrap__badge-text1"
    text.innerHTML = `${discount}%`
    return text;
}
function addBadgeText2() {
    const text = document.createElement('div')
    text.className = "item-wrap__badge-text2"
    text.innerHTML = "GIẢM"
    return text;
}
function addBadge(discount) {
    const badge = document.createElement('div')
    badge.className = "item-wrap__badge"
    badge.appendChild(addBadgeText1(discount))
    badge.appendChild(addBadgeText2())
    return badge
}

function addText(price) {
    const text = document.createElement('div')
    text.className = "item-wrap__text"
    text.innerHTML = `₫ ${a.price}`
    return text;
}

function Item(url1,url2,price,discount) {
    const item = document.createElement('li')
    item.className = "flash-sale__content-item"

    const itemWrap = document.createElement('div')
    itemWrap.className = "item-wrap"
    itemWrap.appendChild(addBG(url1,url2))
    itemWrap.appendChild(addBadge(discount))
    itemWrap.appendChild(addText(price))

    item.appendChild(itemWrap)
    return item;
}

function App() {
    for(let value of arrayItem) {
        root.appendChild(Item(value.url1,value.url2,value.price,value.discount))
    }
}
App();