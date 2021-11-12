const express = require("express")
const fs = require("fs")
const os = require("os")
//const o = require("node:os")


const server = express()

server.all("/", (req, res)=>{
    res.redirect("/index.html")
})

server.all("/me/Picture1", (req, res)=>{
    //res.send(fs.readFileSync("Picture1.jpeg"))
    res.sendFile("Picture1.jpeg")
})

server.all("/index.html", (req, res)=>{
    res.send(String(fs.readFileSync("index.html")))
})

server.all("/script.js", (req, res)=>{
    res.send(String(fs.readFileSync("script.js")))
})

server.all("/theme.js", (req, res)=>{
    res.send(String(fs.readFileSync("theme.js")))
})

server.all("/topbar.js", (req, res)=>{
    res.send(String(fs.readFileSync("topbar.js")))
})

server.all("/style.css", (req, res)=>{
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.send(String(fs.readFileSync("style.css")))
    console.log("request")
})

server.all("/Picture1.jpeg", (req, res)=>{
    res.send(fs.readFileSync("Picture1.jpeg"))
})

//server.use((req, res, next)=>{
    //res.setHeader()
//})

var d = fs.readFileSync("discord.html")
server.all("/discord.html", (req, res)=>{
    res.send(String(d))
})

server.all("/RobotHead1.1.png", (req, res)=>{
    res.send(fs.readFileSync("RobotHead1.1.png"))
})

server.all("/RobotHead1.2.png", (req, res)=>{
    res.send(fs.readFileSync("RobotHead1.2.png"))
})

server.all("/RobotHead1.3.png", (req, res)=>{
    res.send(fs.readFileSync("RobotHead1.3.png"))
})

server.all("/favicon.png", (req, res)=>{
    res.send(fs.readFileSync("favicon.png"))
})

server.all("/script2.js", (req, res)=>{
    res.send(fs.readFileSync("script2.js"))
})

server.all("/theme2.js", (req, res)=>{
    res.send(fs.readFileSync("theme2.js"))
})

server.all("/topbar2.js", (req, res)=>{
    res.send(fs.readFileSync("topbar2.js"))
})

server.all("/buttons.js", (req, res)=>{
    res.send(fs.readFileSync("buttons.js"))
})


var f = fs.readFileSync("websites.html")
server.all("/websites.html", (req, res)=>{
    res.send(String(f))
})


server.all("/script3.js", (req, res)=>{
    res.send(fs.readFileSync("script3.js"))
})

server.all("/theme3.js", (req, res)=>{
    res.send(fs.readFileSync("theme3.js"))
})

server.all("/topbar2.js", (req, res)=>{
    res.send(fs.readFileSync("topbar2.js"))
})

server.all("/certificate.jpg", (req, res)=>{
    res.send(fs.readFileSync("certificate.jpg"))
})

server.all("/buttons2.js", (req, res)=>{
    res.send(fs.readFileSync("buttons2.js"))
})



server.listen(8080, ()=>{console.log("Server is ready")})