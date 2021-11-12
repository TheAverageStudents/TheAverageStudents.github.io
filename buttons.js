var t = localStorage.getItem("theme")

function opposeTheme(t){
    if(t == "white"){return "black"}
    else{return "white"}
}

var notT = opposeTheme(t)

var buttons = [
    document.getElementById("Button1"),
    document.getElementById("Button2"),
    document.getElementById("Button3")
]

var Button1 = document.getElementById("Button1")
var HomeButton = document.getElementById("HomeButton")
var ThemeButton = document.getElementById("ThemeButton")



for(var i = 0; i < buttons.length; i++){
    var button = buttons[i]
    buttons[i].style.width = "15%"
    buttons[i].style.height = "40px"
    buttons[i].style.borderRadius = "20px"
    buttons[i].style.backgroundColor = notT
    buttons[i].style.color = t
    buttons[i].style.border = "none"
    buttons[i].style.borderColor = notT
}

Button1.addEventListener("mouseover", ()=>{
    Button1.style.border = "dashed"
})
Button1.addEventListener("mouseout", ()=>{
    Button1.style.border = "none"
})
Button1.addEventListener("focusin", ()=>{
    Button1.style.border = "dashed"
})
Button1.addEventListener("focusout", ()=>{
    Button1.style.border = "none"
})
Button1.addEventListener("click", ()=>{
    Button1.style.border = "none"
})


Button2.addEventListener("mouseover", ()=>{
    Button2.style.border = "dashed"
})
Button2.addEventListener("mouseout", ()=>{
    Button2.style.border = "none"
})
Button2.addEventListener("focusin", ()=>{
    Button2.style.border = "dashed"
})
Button2.addEventListener("focusout", ()=>{
    Button2.style.border = "none"
})
Button2.addEventListener("click", ()=>{
    Button2.style.border = "none"
})


Button3.addEventListener("mouseover", ()=>{
    Button3.style.border = "dashed"
})
Button3.addEventListener("mouseout", ()=>{
    Button3.style.border = "none"
})
Button3.addEventListener("focusin", ()=>{
    Button3.style.border = "dashed"
})
Button3.addEventListener("focusout", ()=>{
    Button3.style.border = "none"
})
Button3.addEventListener("click", ()=>{
    Button3.style.border = "none"
})


HomeButton.addEventListener("mouseover", ()=>{
    HomeButton.style.border = "dashed"
})
HomeButton.addEventListener("mouseout", ()=>{
    HomeButton.style.border = "none"
})
HomeButton.addEventListener("focusin", ()=>{
    HomeButton.style.border = "dashed"
})
HomeButton.addEventListener("focusout", ()=>{
    HomeButton.style.border = "none"
})
HomeButton.addEventListener("click", ()=>{
    HomeButton.style.border = "none"
})

var logo = document.getElementById("Logo")
logo.style.color = notT
logo.style.textUnderlinePosition = "none"