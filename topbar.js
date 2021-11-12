var topbar = document.getElementById("topbar")
var topbarHeight = 80
var coverup = document.getElementById("coverup")
var logo = document.getElementById("Logo")
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
        }
    }
/*    if(scrollY > y){
        y = scrollY
        console.log("a")
        //topbar.style.color = "blue"
        console.log(topbar.style.height)
        logo.hidden = true
        themeButton.hidden = true
        coverup.hidden = true
        if((topbarHeight <80) && (resizeDownActive == false) && (resizeUpActive == false)){
            resizeUpActive = true
            for(topbarHeight; topbarHeight<=80; topbarHeight++){
                topbarHeight++
                topbar.style.height = String(topbarHeight + "px")
            }
            resizeUpActive = false
        }
    }else{
        y = scrollY
        console.log("b")
        //topbar.style.color = "red"
        console.log(topbar.style.height)
        logo.hidden = false
        themeButton.hidden = false
        coverup.hidden = false
        if((topbarHeight >0) && (resizeDownActive == false) && (resizeUpActive == false)){
            resizeDownActive = true
            for(topbarHeight; topbarHeight<=80; topbarHeight++){
                topbarHeight++
                topbar.style.height = String(topbarHeight + "px")
            }
            resizeDownActive = false
        }
    }*/
    /*
    if((topbarHeight <=80) && (resizeDownActive == false) && (resizeUpActive == false)){
        for(var j = 0; j<=80; j++){
            topbar.style.height = String(j + "px")
        }
    }*/
})
