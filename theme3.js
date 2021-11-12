if(localStorage.getItem("theme")){}else{localStorage.setItem("theme", "white")}

var ThemeButton = document.getElementById("ThemeButton")
var elements = [
    //document.getElementById("topbar"),
//    document.getElementById("testtext"),
    document.getElementById("document"),
]
var Button1 = document.getElementById("Button1")
var Homebutton = document.getElementById("HomeButton")
var FeedbackButton = document.getElementById("FeedbackButton")

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

    Button1.style.backgroundColor = t
    Button1.style.color = notT

    Homebutton.style.backgroundColor = notT
    Homebutton.style.color = t

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
