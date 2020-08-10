//importar a dependencia do sqlite3
const sqlite3 = require("sqlite3").verbose()

//criar o obj de banco de dados
const db = new sqlite3.Database("./src/database/database.db")

module.exports = db
//utilizando o obj de banco  de dados

// db.serialize(() => {
//     //criar tabelas com comandos sql
//     db.run(`
//         CREATE TABLE IF NOT EXISTS places (
//             id INTEGER PRIMARY KEY AUTOINCREMENT,
//             image TEXT,
//             name TEXT,
//             address TEXT,
//             address2 TEXT,
//             state TEXT,
//             city TEXT,
//             items TEXT
//         );
//     `)
//     //inserir dados
//     const query = `
//     INSERT INTO places (
//         image,
//         name,
//         address,
//         address2,
//         state,
//         city,
//         items
//     ) VALUES (?,?,?,?,?,?,?);
// `
// const values = [
//     "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=874&q=80",
//     "Paperside",
//     "Guilherme Gemballa, Jardim America",
//     "No 260",
//     "Santa Catarina",
//     "Rio do Sul",
//     "Papéis e Papelão"
// ]
  
//     function afterInsertData(err) {
//         if(err) {
//             return console.log(err)
//         }
//         console.log("Cadastro com sucesso")
//         console.log(this)
//     }
    
//     db.run(query, values, afterInsertData)
    
//     //consultar dados
//     db.all(`SELECT name FROM places`,function(err, rows){
//         if(err) {
//             return console.log(err)
//         }
//         console.log("Aqui estao seus registros")
//         console.log(rows)
//     })
//     //deletar dados
//     // db.run(`DELETE FROM places WHERE id = ?`, [1], function(err) {
//     //     if(err) {
//     //         return console.log(err)
//     //     }
//     //     console.log("Registro deletado com sucesso")
//     // })
// })