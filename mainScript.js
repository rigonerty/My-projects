const nav = document.querySelector("nav")
const navClose = document.querySelector(".navClose")
const navShow = document.querySelector(".navShow")
const header = document.querySelector("header")
const body = document.querySelector("body")
const root = document.querySelector(":root")
const html = document.querySelector("html")
const theme = document.querySelector(".theme")
const rootStyle = getComputedStyle(root)
let statusTheme = true
const leftNav = document.querySelector(".leftNav")
let windowInnerWidth = window.innerWidth
let windowInnerHeight = window.innerHeight
let navStatus = false
const content = document.querySelector(".content")
const inputSearch = document.querySelector(".rightNav > input")
const searchBlock = document.querySelector(".search")
let searchstatus = false
const web = document.querySelector(".web")
const logo = document.querySelector("#logo")
const loopSearch = document.querySelector(".searchNav")










window.addEventListener("resize", function () {
    windowInnerWidth = window.innerWidth
    windowInnerHeight = window.innerHeight
    if (navStatus) {
        if (windowInnerWidth >= 820) {
            nav.style.left = "0%"
            nav.style.opacity = "1"
            content.style.marginLeft = 225 + (html.offsetWidth / 100) * 2 + 'px'
            leftNav.style.marginLeft = "185px"
            navShow.style.visibility = "hidden"
            content.style.filter = "blur(0)";
            header.style.filter = "blur(0)"
        } else {
            content.style.margin = "2%"
            content.style.marginTop = "50px"
            navShow.style.visibility = "hidden"
            nav.style.opacity = "1"
            content.style.filter = "blur(5px)";
            header.style.filter = "blur(5px)"
        }
    }
    else {
        if (windowInnerWidth >= 600) {
            nav.style.left = "-225px"
        }
    }
    if (windowInnerWidth < 800) {
        maxLenghtSlider = 75
        sliderHeadL = 50

    } else if (windowInnerWidth < 600) {
        sliderHeadL = 10
    }
    else if (windowInnerWidth < 400) {
        maxLenghtSlider = 50
    }

})

document.addEventListener("click", function (e) {
    const withinSearch = e.composedPath().includes(searchBlock);
    const withinSearchInput = e.composedPath().includes(inputSearch)
    const withinSearchImg = e.composedPath().includes(loopSearch)
    const withinNav = e.composedPath().includes(nav)
    const withinNavShow = e.composedPath().includes(navShow)
    if (!withinSearch && (!withinSearchInput && !withinSearchImg) && searchstatus) {
        searchBlock.style.display = "none"
        content.style.filter = "blur(0)";
        nav.style.filter = "blur(0)"
        header.style.filter = "blur(0)"
        searchstatus = false
    }
    if (!withinNav && !withinNavShow){
        nav.style.left = "-225px"
        content.style.margin = "2%"
        web.style.marginTop = "50px"
        leftNav.style.marginLeft = "20px"
        navShow.style.visibility = "visible"
        setTimeout(function () {
            nav.style.opacity = "0"
        }, 600)
        content.style.filter = "blur(0)";
        header.style.filter = "blur(0)"
        navStatus = false
    }
})
document.addEventListener("keydown", function (e) {
    if (e.keyCode == 27) {
        searchBlock.style.display = "none"
        content.style.filter = "blur(0)";
        nav.style.filter = "blur(0)"
        header.style.filter = "blur(0)"
    }
})
inputSearch.addEventListener("click", function () {
    searchBlock.style.display = "block";
    content.style.filter = "blur(5px)";
    nav.style.filter = "blur(5px)"
    header.style.filter = "blur(5px)"
    searchstatus = true
})
loopSearch.addEventListener("click", function () {
    searchBlock.style.display = "block";
    content.style.filter = "blur(5px)";
    nav.style.filter = "blur(5px)"
    header.style.filter = "blur(5px)"
    searchstatus = true
    console.log(23)
})





navClose.addEventListener("click", function () {

    nav.style.left = "-225px"
    content.style.margin = "2%"
    web.style.marginTop = "50px"
    leftNav.style.marginLeft = "20px"
    navShow.style.visibility = "visible"
    setTimeout(function () {
        nav.style.opacity = "0"
    }, 600)
    content.style.filter = "blur(0)";
    header.style.filter = "blur(0)"
    navStatus = false

})
navShow.addEventListener("click", function () {
    if (windowInnerWidth >= 820) {
        nav.style.left = "0%";
        nav.style.opacity = "1";
        content.style.marginLeft = 225 + (body.offsetWidth / 100) * 2 + "px";
        leftNav.style.marginLeft = "185px";
        navShow.style.visibility = "hidden";
    } else {
        nav.style.left = "0%";
        content.style.margin = "2%";
        web.style.marginTop = 50 + "px";
        navShow.style.visibility = "hidden";
        nav.style.opacity = "1";
        content.style.filter = "blur(5px)";
        header.style.filter = "blur(5px)"
    }
    navStatus = true
})
let JSON
fetch("/My-projects/main.json").then(function (response) {
    return response.json()
}).then(function (json) {
    JSON = json
})
function blobImgSearch(product) {
        const url = `/My-projects/img/manga/cover/${product.url}`
        fetch(url).then(function (response) {
            if (!response.ok) {
                throw new Error(`HTTP error: ${response.status}`)
            } else {
                return response.blob()
            }
        }).then(function (blob) {
            LoadSearch(blob, product)
        })


}
const searchHeadInput = document.querySelector(".searchHead > input")
const genresSearch = document.querySelector("#genres")
const statusTitleSearch = document.querySelector("#statusTitle")
const searchContent = document.querySelector(".searchContent")
const searchRange = document.querySelector(".searchRange")
// let x1 = "Search"
// let x2 = "Sear"
// alert(x2 == x1.slice(0, x2.length))
searchHeadInput.addEventListener("input", function(){
    searchContent.innerHTML = ""
    for(const json of JSON){
        if(searchHeadInput.value.toLowerCase() == json.name.toLowerCase().slice(0, searchHeadInput.value.length)){
            blobImgSearch(json)
        }
    }
})


searchContent.innerHTML = ""
const divSEARCH = document.createElement("div")
divSEARCH.classList.add("DivSearch")
let divSEARCHI;
searchRange.append(divSEARCH)
for(let t = 0; t < 2; t++){
    const i = document.createElement("i")
    divSEARCH.append(i)
    divSEARCHI = document.querySelectorAll(".DivSearch > i")
    i.style.backgroundSize = "cover"
    i.style.backgroundRepeat = "no-repeat"
    i.style.backgroundImage = `url(/My-projects/img/icon/StyleSearch${t + 1}.svg)`
}

divSEARCHI[0].addEventListener("click", function () {
    const contentChilds = document.querySelectorAll(".contentChild")
    searchContent.style.display = "block"
    for (const contentChild of contentChilds ){
        contentChild.classList.add("vertical")
    }
})
divSEARCHI[1].addEventListener("click", function () {
    const contentChilds = document.querySelectorAll(".contentChild")
    searchContent.style.display = "flex"
    for (const contentChild of contentChilds) {
        contentChild.classList.remove("vertical")
    }
})
function LoadSearch(blob, product) {
    const a = document.createElement("a")
    const urlObject = URL.createObjectURL(blob)
    const div = document.createElement("div")
    const div1 = document.createElement("div")
    const img = document.createElement("img")
    const h5 = document.createElement("h5")
    const p = document.createElement("p")
    p.innerHTML = product.description
    h5.innerHTML = product.name;
    img.src = urlObject;
    div.classList.add("contentChild")
    a.href = `/My-projects/network/manga/${product.name.replaceAll(" ", "")}/${product.name.replaceAll(" ", "") }.html`
    a.append(img)
    div1.append(h5)
    div1.append(p)
    a.append(div1)
    div.append(a)
    searchContent.append(div)
}

theme.addEventListener("click", function () {
    if (statusTheme) {
        divSEARCHI[0].style.filter = "invert(1)"
        divSEARCHI[1].style.filter = "invert(1)"
        html.style.backgroundColor = rootStyle.getPropertyValue("--black")
        root.style.setProperty("--font-color", "white")
        root.style.setProperty("--background-color", "#121212")
        root.style.setProperty("--color-menu", "white")
        root.style.setProperty("--a-hover", "#333333")
        root.style.setProperty("--a-active", "#202020")
        root.style.setProperty("--color-header", "black")
        theme.src = "/My-projects/img/icon/moon.png"
        logo.src = "/My-projects/img/logo/logo2.gif"
        statusTheme = false
    } else {
        divSEARCHI[0].style.filter = "invert(0)"
        divSEARCHI[1].style.filter = "invert(0)"
        html.style.backgroundColor = rootStyle.getPropertyValue("--white")
        root.style.setProperty("--font-color", "black")
        root.style.setProperty("--color-menu", "black")
        root.style.setProperty("--a-hover", "rgb(226, 226, 226)")
        root.style.setProperty("--a-active", "rgb(206, 206, 206)")
        root.style.setProperty("--background-color", "rgb(245,245,245)")
        root.style.setProperty("--color-header", "white")
        statusTheme = true
        theme.src = "/My-projects/img/icon/sun.png"
        logo.src = "/My-projects/img/logo/logo1.gif"
    }

})

