const express = require ('express')
const nunjucks = require('nunjucks')

const server = express()
const videos = require("./data")

server.use(express.static('public'))

server.set('view engine', "njk")

nunjucks.configure('views', {
    express: server,
    autoescape: false
})
server.get("/", function(req, res) {
    const  about = {
        avatar_url:"https://avatars3.githubusercontent.com/u/48262427?s=460&u=ad9ac289551d12e41b95d12dd659c68458a2b913&v=4",
        name: "vinicius Ribeiro",
        role: "Desenvolvedor",
        description: "Programador Full-Stack, focado nas tecnologias mais atuais do mercado.",
        links: [
        { name: "Github", url:"https://github.com/vininribeiro23/"},
        { name: "Linkedin", url:"https://br.linkedin.com/in/vinicius-ribeiro-409761186/"},
        ]
    }

    return res.render("about", { about })
})

server.get("/portfolio", function(req, res) {
    return res.render("portfolio", { items: videos })
})



server.listen(5000, function(){
    console.log("server is running")
})