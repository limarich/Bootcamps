//servidor
const express = require('express')
const server = express()
const { pageLanding, pageStudy, pageGiveClasses, saveClasses } = require('./pages')
//templates
const nunjucks = require('nunjucks')
//configuracao de nunjucks
nunjucks.configure('src/views', {
    express: server,
    noCache: true,
})
server
.use(express.urlencoded({ extended: true}))
.use(express.static("public")) // arquivos estaticos
//rotas da aplicação
.get("/", pageLanding)
.get("/study",pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
.listen(5500)

//node src/server.js
//npm run dev
