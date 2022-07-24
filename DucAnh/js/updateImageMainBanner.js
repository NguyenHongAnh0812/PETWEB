const arrayImageMainBanner = [
    "https://cf.shopee.vn/file/225f7729d88eb82e07672287013d354a_xxhdpi",//0
    "https://cf.shopee.vn/file/f7a6b4078bfdf48ae43deee0faa1661f_xxhdpi",//1
    "https://cf.shopee.vn/file/3c8fa3be71eb28a1a24f6a353ce7600c_xxhdpi",//2
    "https://cf.shopee.vn/file/7b64825c62cda6e4b02a4ff20870ce1b_xxhdpi",//3
    "https://cf.shopee.vn/file/b95673d69d6217b6d0c2bce9af389c2c_xxhdpi",//4
    "https://cf.shopee.vn/file/eed214c567d794471df734b8eb1d6ffa_xxhdpi",//5
    "https://cf.shopee.vn/file/b2ac75daf781122e97ece00bfb5dd8db_xxhdpi",//6
    "https://cf.shopee.vn/file/650dbd65ace1fc51ff2c9a803693959e_xxhdpi",//7
    "https://cf.shopee.vn/file/0044a3ddb0b2f1ef3cdcc63349e5d844_xxhdpi",//8
    "https://cf.shopee.vn/file/5e77601f8e4772cd84352ff13647ba79_xxhdpi",//9
    "https://cf.shopee.vn/file/1ba25d2bf1e2d4ca98df327e38961b34_xxhdpi",//10
    "https://cf.shopee.vn/file/13ab990d2a37be2d242d619a7b019ce5_xxhdpi",//11
]
// button start 1 -> length-2
const width = 796.650
const length = arrayImageMainBanner.length // 12
var indexImageMainBanner = 1 // from 1 -> to 12 
/* 
    if i == 0 -> 12 (0->length)
    if i == 13 -> 1 (length+1->1)
*/
var indexButton = 0 // from 0 -> to 11

const timeMove = 500
const rootImageMainBanner = document.querySelector('.container .full-home-banner__main-banner-list')
rootImageMainBanner.style.width = width * (arrayImageMainBanner.length+2) + "px"
rootImageMainBanner.style.height = 235 + "px"


const buttonCircle = document.querySelector(".full-home-banner__main-banner-button-circle")
const childArrayButton = [];

rootImageMainBanner.appendChild(createItem(arrayImageMainBanner.length-1))
function createItem(i) {
    const item = document.createElement('div')
    item.className = "full-home-banner__main-banner-item"
    item.style.backgroundImage = `url(${arrayImageMainBanner[i]})`
    return item
}
for(let i = 0; i < length; i++) {
    rootImageMainBanner.appendChild(createItem(i))
    childArrayButton[i] = document.createElement('div')
    childArrayButton[i].className = `icon${i+1} icon--css`
    buttonCircle.appendChild(childArrayButton[i])
}
rootImageMainBanner.appendChild(createItem(0))
var animation = [];
animation.push(setInterval(() => {
    Animation(indexButton+1,indexImageMainBanner+1)
},2000))

childArrayButton[0].classList.add('icon--current')

for(let i = 0; i < childArrayButton.length; i++) {
    childArrayButton[i].addEventListener('click',(e) => {
        let index = childArrayButton.findIndex(function(value) {
            return value == e.target
        })
        indexButton = index
        indexImageMainBanner = indexButton+1
        Animation(indexButton,indexImageMainBanner)
        while(animation.length) {
            const pop = animation.shift();
            clearInterval(pop)
        }
        animation.push(setInterval(() => {
            Animation(indexButton+1,indexImageMainBanner+1)
        },2000))
    })
}

function Animation(_indexButton,_indexImageMainBanner) {
    indexButton = _indexButton
    indexImageMainBanner = _indexImageMainBanner
    rootImageMainBanner.style.left = `-${indexImageMainBanner*width}px`
    setTimeout(()=> {
        if(indexButton == length) {
            indexButton = 0
        }
        else if(indexButton == -1) {
            indexButton = length-1
        }
        const i = buttonCircle.querySelector('.icon--current')
        i.classList.remove('icon--current')
        childArrayButton[indexButton].classList.add('icon--current')
    },timeMove)
    if(indexImageMainBanner == length+1) {
        setTimeout(()=> {
            // không xóa vội mà cho nó trượt tới phần tử cuối 0.7s rồi mới xóa
            rootImageMainBanner.classList.remove("full-home-banner__main-banner-list--move-left") 
            indexImageMainBanner = 1
            rootImageMainBanner.style.left = -width + "px"
            setTimeout(()=> {
                rootImageMainBanner.classList.add("full-home-banner__main-banner-list--move-left")
            },20)
        },timeMove)
    }
    else if(indexImageMainBanner == 0) {
        setTimeout(()=> {
            // không xóa vội mà cho nó trượt tới phần tử cuối 0.7s rồi mới xóa
            rootImageMainBanner.classList.remove("full-home-banner__main-banner-list--move-left") 
            indexImageMainBanner = length
            rootImageMainBanner.style.left = `-${indexImageMainBanner*width}px`
            setTimeout(()=> {
                rootImageMainBanner.classList.add("full-home-banner__main-banner-list--move-left")
            },20)
        },timeMove)
    }
}

const buttonMainBannerRight = document.querySelector('.full-home-banner__main-banner-button-rectangle-next')
const buttonMainBannerLeft =  document.querySelector('.full-home-banner__main-banner-button-rectangle-pre')
let isClickButtonMainBannerRight = true
let isClickButtonMainBannerLeft = true
buttonMainBannerRight.addEventListener('click',() => {
    if(isClickButtonMainBannerRight) {
        isClickButtonMainBannerRight = false
        setTimeout(() => {
            isClickButtonMainBannerRight = true
        },timeMove+50)
        indexButton++
        indexImageMainBanner = indexButton+1
        Animation(indexButton,indexImageMainBanner)
        while(animation.length) {
            const pop = animation.shift();
            clearInterval(pop)
        }
        animation.push(setInterval(() => {
            Animation(indexButton+1,indexImageMainBanner+1)
        },2000))
    }
})
buttonMainBannerLeft.addEventListener('click',() => {
    if(isClickButtonMainBannerLeft) {
        isClickButtonMainBannerLeft = false
        setTimeout(() => {
            isClickButtonMainBannerLeft = true
        },timeMove+50)
        indexButton--
        indexImageMainBanner = indexButton+1
        Animation(indexButton,indexImageMainBanner)
        while(animation.length) {
            const pop = animation.shift();
            clearInterval(pop)
        }
        animation.push(setInterval(() => {
            Animation(indexButton+1,indexImageMainBanner+1)
        },2000))
    }
  
})