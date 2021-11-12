var topbar = document.getElementById("topbar")
var topbarHeight = 80
var coverup = document.getElementById("coverup")
var logo = document.getElementById("Logo")
var homeButton = document.getElementById("HomeButton")
var themeButton = document.getElementById("ThemeButton")
var resizeUpActive = false
var resizeDownActive = false
var y = 0

function reduce(element){
    element.style.height = topbarHeight
    topbarHeight--
}
topbar.style.height = String(0 + "px")


document.addEventListener("scroll", ()=>{
    if(scrollY > y){
        logo.hidden = true
        themeButton.hidden = true
        homeButton.hidden = true
        y = scrollY
        if(topbarHeight >=1){
            topbarHeight = topbarHeight - 4
            topbar.style.height = String(topbarHeight + "px")
        }
    }
    else if(scrollY == y){}
    else if(scrollY == 0){
        y = 0
        topbarHeight = 80
        topbar.style.height = String(topbarHeight + "px")
        logo.hidden = false
        themeButton.hidden = false
        homeButton.hidden = false
    }
    else{
        y = scrollY
        if(topbarHeight <=79){
            topbarHeight = topbarHeight + 4
            topbar.style.height = String(topbarHeight + "px")
        }
        if(topbarHeight >=65){
            logo.hidden = false
            themeButton.hidden = false
            homeButton.hidden = false
        }
    }
})