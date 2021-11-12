var ThemeButton = document.getElementById("ThemeButton")
var HomeButton = document.getElementById("HomeButton")
var logo = document.getElementById("Logo")
var elements = [
    //document.getElementById("topbar"),
//    document.getElementById("testtext"),
    document.getElementById("document"),
    HomeButton
]

var buttons = [
    document.getElementById("Button1"),
    document.getElementById("Button2"),
    document.getElementById("Button3"),
    document.getElementById("Logo")
]

function opposeTheme(t){
    if(t == "white"){return "black"}
    else{return "white"}
}

var t = localStorage.getItem("theme")
document.getElementById("document").style.backgroundColor = String(t)
var notT = opposeTheme(t)


FeedbackButton.style.backgroundColor = notT
FeedbackButton.style.color = t

if(localStorage.getItem("theme")){
    ThemeButton.style.backgroundColor = notT
    ThemeButton.style.color = t
    ThemeButton.style.borderColor = t
    HomeButton.style.backgroundColor = notT
    HomeButton.style.color = t
    HomeButton.style.borderColor = t
    logo.style.color = notT
    for(var i = 0; i < elements.length; i++){
        elements[i].style.backgroundColor = String(t)
        elements[i].style.color = notT
    }
}
else{
    localStorage.setItem("theme", "white")
}

//ThemeButton.style.height = "20px"

ThemeButton.addEventListener("click", ()=>{
    localStorage.setItem("theme", notT)

    for(var i = 0; i < elements.length; i++){
        elements[i].style.backgroundColor = String(notT)
        elements[i].style.color = t
    }

    for(var i = 0; i < buttons.length; i++){
        buttons[i].style.backgroundColor = String(t)
        buttons[i].style.color = notT
    }

    logo.style.color = t

    FeedbackButton.style.backgroundColor = t
    FeedbackButton.style.color = notT

    notT = t
    t = opposeTheme(notT)

    ThemeButton.style.backgroundColor = notT
    ThemeButton.style.color = t
    ThemeButton.style.borderColor = t
    
})

ThemeButton.addEventListener("mouseover", ()=>{
    ThemeButton.style.borderStyle = "dashed"
})
ThemeButton.addEventListener("mouseout", ()=>{
    ThemeButton.style.borderStyle = "none"
})


FeedbackButton.addEventListener("mouseover", ()=>{
    FeedbackButton.style.border = "dashed"
})
FeedbackButton.addEventListener("mouseout", ()=>{
    FeedbackButton.style.border = "none"
})
FeedbackButton.addEventListener("focusin", ()=>{
    FeedbackButton.style.border = "dashed"
})
FeedbackButton.addEventListener("focusout", ()=>{
    FeedbackButton.style.border = "none"
})
FeedbackButton.addEventListener("click", ()=>{
    FeedbackButton.style.border = "none"
})
