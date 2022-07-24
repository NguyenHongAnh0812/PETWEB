const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const arrayItem = [
    {
        url1: "https://cf.shopee.vn/file/451d9ee48ca056a7263fe1a0e5d0e699_tn",
        url2: "https://cf.shopee.vn/file/73c66fa4c116ea49e04b3b7cf150d87a_tn",
        price: "489.000",
        discount: 22
    },
    {
        url1: "https://cf.shopee.vn/file/451d9ee48ca056a7263fe1a0e5d0e699_tn",
        url2: "https://cf.shopee.vn/file/db35e5a24bbd0cc76cd97ecc65d09080_tn",
        price: "264.000",
        discount: 35
    },
    {
        url1: "https://cf.shopee.vn/file/04b07a9175a6db920303f6a599f3780d_tn",
        url2: "https://cf.shopee.vn/file/085840f3c4feac48159f08c416b6f909_tn",
        price: "165.000",
        discount: 25
    },
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
    },
    {
        url1: "https://cf.shopee.vn/file/bc690b08fb5f58d796e284d32da070dc_tn",
        url2: "https://cf.shopee.vn/file/370dc0417fadc8ffc9e3314e888986a1_tn",
        price: "1.090.000",
        discount: 64
    },
    {
        url1: "https://cf.shopee.vn/file/04b07a9175a6db920303f6a599f3780d_tn",
        url2: "https://cf.shopee.vn/file/1019e3e39bc10011c10b9c7bb3b21f52_tn",
        price: "2.379.000",
        discount: 27
    },
    {
        url1: "https://cf.shopee.vn/file/451d9ee48ca056a7263fe1a0e5d0e699_tn",
        url2: "https://cf.shopee.vn/file/dda7d240702773cea1bf8de84f46ed48_tn",
        price: "1.490.000",
        discount: 25
    },
    {
        url1: "https://cf.shopee.vn/file/125101b84b4c57d1484258b2e2aa1408_tn",
        url2: "https://cf.shopee.vn/file/153635d58545793a17170f8a47f52a63_tn",
        price: "878.000",
        discount: 27
    },
    {
        url1: "https://cf.shopee.vn/file/a15d845313e16be28c25ce17dd297765_tn",
        url2: "https://cf.shopee.vn/file/a275a72350869046380ce9fb80461eaf_tn",
        price: "659.000",
        discount: 18
    },
    {
        url1: "https://cf.shopee.vn/file/bc690b08fb5f58d796e284d32da070dc_tn",
        url2: "https://cf.shopee.vn/file/930a7460bac05fb7300b92dc2c69bb2f_tn",
        price: "289.000",
        discount: 51
    },
    {
        url1: "https://cf.shopee.vn/file/bc690b08fb5f58d796e284d32da070dc_tn",
        url2: "https://cf.shopee.vn/file/4c81d4e811f8246e3dd47a54a790994a_tn",
        price: "266.000",
        discount: 30
    },
    {
        url1: "https://cf.shopee.vn/file/f951be467d82890179bb2699419751a6_tn",
        url2: "https://cf.shopee.vn/file/10facf4f9424bfac738feb46e691997c_tn",
        price: "199.000",
        discount: 67
    },
    {
        url1: "https://cf.shopee.vn/file/f951be467d82890179bb2699419751a6_tn",
        url2: "https://cf.shopee.vn/file/712bb8de33be6118ccd6a4da8fab6dc1_tn",
        price: "199.000",
        discount: 33
    },
    {
        url1: "https://cf.shopee.vn/file/497b312913828b8bd89e5ccb4241624d_tn",
        url2: "https://cf.shopee.vn/file/3f3e35926fb16391e3e614b650079bba_tn",
        price: "99.000",
        discount: 61
    }
]
const root = $('.flash-sale .flash-sale__content-list-item');
const widthItem = 200
root.style.width = widthItem*arrayItem.length + "px"
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
    text.innerHTML = `₫ ${price}`
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

const buttonRightFlashSale = document.querySelector('.flash-sale__content-button-right')
const buttonLeftFlashSale = document.querySelector('.flash-sale__content-button-left')
const lengthArrayFlashSale = arrayItem.length // element last have index = length - 1
const widthFlashSale = 200
let indexFlashSale = 0
let isClickButtonRightFlashSale = true
let isClickButtonLeftFlashSale = true

buttonRightFlashSale.addEventListener('click',() => {
    if(isClickButtonRightFlashSale) {
        isClickButtonRightFlashSale = false
        setTimeout(() => {
            isClickButtonRightFlashSale = true
        }, 500);
        indexFlashSale += 5
        if(indexFlashSale+5 >= lengthArrayFlashSale-1) {
            indexFlashSale = lengthArrayFlashSale-6
            setTimeout(() => {
                buttonRightFlashSale.style.display = "none"
                buttonLeftFlashSale.style.display = "block"
            },500)
        }
        else if(indexFlashSale+5 < lengthArrayFlashSale-1 && indexFlashSale > 0) {
            setTimeout(() => {
                buttonLeftFlashSale.style.display = "block"
                buttonRightFlashSale.style.display = "block"
            },500)
        }
        root.style.left = `-${indexFlashSale*widthFlashSale}px`
    }
})
buttonLeftFlashSale.addEventListener('click',() => {
    if(isClickButtonRightFlashSale) {
        isClickButtonRightFlashSale = false
        setTimeout(() => {
            isClickButtonRightFlashSale = true
        }, 500);
        indexFlashSale -= 5
        if(indexFlashSale-5 <= 0) {
            indexFlashSale = 0
            setTimeout(()=> {
                buttonLeftFlashSale.style.display = "none"
                buttonRightFlashSale.style.display = "block"
            },500)
        }
        else if(indexFlashSale+5 < lengthArrayFlashSale-1 && indexFlashSale > 0) {
            setTimeout(()=> {
                buttonLeftFlashSale.style.display = "block"
                buttonRightFlashSale.style.display = "block"
            },500)
        }
        root.style.left = `-${indexFlashSale*widthFlashSale}px`
    }
})
