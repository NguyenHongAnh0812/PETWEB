/* item-list-wrapper */
const item_list = document.querySelector('.shopee-header-section__content .item-list')
const arrayItemList = [
    [{
        text: "Thời Trang Nam",
        url: "https://cf.shopee.vn/file/687f3967b7c2fe6a134a2c11894eea4b_tn"
    },{
        text: "Thời Trang Nữ",
        url: "https://cf.shopee.vn/file/75ea42f9eca124e9cb3cde744c060e4d_tn"
    }],
    [{
        text: "Điện Thoại & Phụ Kiện",
        url: "https://cf.shopee.vn/file/31234a27876fb89cd522d7e3db1ba5ca_tn"
    },
    {
        text: "Mẹ & Bé",
        url: "https://cf.shopee.vn/file/099edde1ab31df35bc255912bab54a5e_tn"
    }
    ],
    [{
        text: "Thiết Bị Điện Tử",
        url: "https://cf.shopee.vn/file/978b9e4cb61c611aaaf58664fae133c5_tn"
    },
    {
        text: "Nhà Cửa & Đời Sống",
        url: "https://cf.shopee.vn/file/24b194a695ea59d384768b7b471d563f_tn"
    }
    ],
    [{
        text: "Máy Tính & Laptop",
        url: "https://cf.shopee.vn/file/c3f3edfaa9f6dafc4825b77d8449999d_tn"
    },
    {
        text: "Sắc Đẹp",
        url: "https://cf.shopee.vn/file/ef1f336ecc6f97b790d5aae9916dcb72_tn"
    }
    ],
    [{
        text: "Máy Ảnh & Máy Quay Phim",
        url: "https://cf.shopee.vn/file/ec14dd4fc238e676e43be2a911414d4d_tn"
    },
    {
        text: "Sức Khỏe",
        url: "https://cf.shopee.vn/file/49119e891a44fa135f5f6f5fd4cfc747_tn"
    }
    ],
    [{
        text: "Đồng Hồ",
        url: "https://cf.shopee.vn/file/86c294aae72ca1db5f541790f7796260_tn"
    },
    {
        text: "Giày Dép Nữ",
        url: "https://cf.shopee.vn/file/48630b7c76a7b62bc070c9e227097847_tn"
    }
    ],
    [{
        text: "Giày Dép Nam",
        url: "https://cf.shopee.vn/file/74ca517e1fa74dc4d974e5d03c3139de_tn"
    },
    {
        text: "Túi Ví Nữ",
        url: "https://cf.shopee.vn/file/fa6ada2555e8e51f369718bbc92ccc52_tn"
    }
    ],
    [{
        text: "Thiết Bị Điện Gia Dụng",
        url: "https://cf.shopee.vn/file/7abfbfee3c4844652b4a8245e473d857_tn"
    },
    {
        text: "Phụ Kiện Và Trang Sức Nữ",
        url: "https://cf.shopee.vn/file/8e71245b9659ea72c1b4e737be5cf42e_tn"
    }
    ],
    [{
        text: "Thể Thao Và Du Lịch",
        url: "https://cf.shopee.vn/file/6cb7e633f8b63757463b676bd19a50e4_tn"
    },
    {
        text: "Bách Hóa Online",
        url: "https://cf.shopee.vn/file/c432168ee788f903f1ea024487f2c889_tn"
    }
    ],
    [{
        text: "Ô Tô & Xe Máy & Xe Đạp",
        url: "https://cf.shopee.vn/file/3fb459e3449905545701b418e8220334_tn"
    },
    {
        text: "Nhà Sách Online",
        url: "https://cf.shopee.vn/file/36013311815c55d303b0e6c62d6a8139_tn"
    }
    ],
    [
    {
        text: "Balo & Túi Ví Nam",
        url: "https://cf.shopee.vn/file/18fd9d878ad946db2f1bf4e33760c86f_tn"
    },
    {
        text: "Thời Trang Trẻ Em",
        url: "https://cf.shopee.vn/file/4540f87aa3cbe99db739f9e8dd2cdaf0_tn"
    }],
    [{
        text: "Đồ Chơi",
        url: "https://cf.shopee.vn/file/ce8f8abc726cafff671d0e5311caa684_tn"
    },
    {
        text: "Giặt Giữ & Chăm Sóc Nhà Cửa",
        url: "https://cf.shopee.vn/file/cd8e0d2e6c14c4904058ae20821d0763_tn"
    }],
    [{
        text: "Chăm Sóc Thú Cưng",
        url: "https://cf.shopee.vn/file/cdf21b1bf4bfff257efe29054ecea1ec_tn",
    },
    {
        text: "Voucher & Dịch Vụ",
        url: "https://cf.shopee.vn/file/b0f78c3136d2d78d49af71dd1c3f38c1_tn"
    }]
]

item_list.style.width = `${arrayItemList.length*120}px`
function createItem() {
    let item = document.createElement('li')
    item.className = 'item'
    return item
}

function createItemWrapEmpty() {
    let itemWrap = document.createElement('div');
    itemWrap.className = 'item__wrap'
    return itemWrap;
}

function createItemWrapIcon(url) {
    const itemWrapIcon = document.createElement('div')
    itemWrapIcon.className = 'item__wrap-icon'
    itemWrapIcon.style.backgroundImage = `url(${url})`
    itemWrapIcon.style.backgroundSize = "contain"
    itemWrapIcon.style.backgroundRepeat = "no-repeat"
    return itemWrapIcon;
}

function createItemWrapText(text) {
    let itemWrapText = document.createElement('div')
    itemWrapText.className = 'item__wrap-text'
    itemWrapText.innerHTML = text
    return itemWrapText;
}

function createItemWrap(url,text) {
    itemWrap = createItemWrapEmpty();
    itemWrap.appendChild(createItemWrapIcon(url));
    itemWrap.appendChild(createItemWrapText(text));
    itemWrap.style.textAlign = "center"
    return itemWrap;
}

function App() {
    for(let value of arrayItemList) {
        let item = createItem()
            item.appendChild(createItemWrap(value[0].url,value[0].text))
            item.appendChild(createItemWrap(value[1].url,value[1].text))
        item_list.appendChild(item)
    }
}
App();
const buttonSectionLeft = document.querySelector('.shopee-header-section__content .shopee-header-section__content-button-left')
const buttonSectionRight = document.querySelector('.shopee-header-section__content .shopee-header-section__content-button-right')

buttonSectionLeft.addEventListener('click',() => {
    item_list.classList.remove("item-list--move-right")
    item_list.classList.add("item-list--move-left")
    setTimeout(() => {
        buttonSectionLeft.style.display = "none"
        buttonSectionRight.style.display = "block"
    },1000)
})
buttonSectionRight.addEventListener('click',() => {
    if(item_list.classList.contains("item-list--move-left")) {
        item_list.classList.remove("item-list--move-left")
    }
    item_list.classList.add("item-list--move-right")
    setTimeout(() => {
        buttonSectionLeft.style.display = "block"
        buttonSectionRight.style.display = "none"
    },1000)
})