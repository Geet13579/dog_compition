
import "./addRequire.js";
import http from 'http';
import express from 'express';
import { SIGTERM } from "constants";


// import cors from 'cors';
var cors = require('cors');
const Api = express();
const HTTP = http.Server(Api);

Api.use(cors());


const sqlite3 = require('sqlite3');

Api.use(express.urlencoded({ limit: "50mb", extended: true, parameterLimit: 50000 }))
Api.use(express.json({ limit: "50mb", extended: true, parameterLimit: 50000 }))

Api.use((req, res, next) => {
    // //console.log("called");

    //res.setHeader('Access-Control-Allow-Origin',["http://tifinco.com:3000"]);
    res.setHeader('Access-Control-Allow-Origin', "*");
    res.setHeader('Access-Control-Allow-Headers', "*");
    res.header('Access-Control-Allow-Credentials', true);
    next();
});

const HTTP_PORT = 8000
Api.listen(HTTP_PORT, () => {
    console.log("Server is listening on port " + HTTP_PORT);
});

const db = new sqlite3.Database('./dogCompetition.db', (err) => {
    if (err) {
        console.error("Erro opening database " + err.message);
    } else {

        console.log("connection successfully")

       
        // db.run('CREATE TABLE purches_entry_info( \
        //     loading_babour_gang NVARCHAR(20) ,\
        //     loading_driver_name NVARCHAR(20),\
        //     truck_No NVARCHAR(100),\
        //     date NVARCHAR(20)  NOT NULL,\
        //     loaded_from NVARCHAR(20)  NOT NULL,\
        //     material NVARCHAR(20)  NOT NULL,\
        //     purchase_qty NVARCHAR(20)  NOT NULL,\
        //     purchase_rate NVARCHAR(20)  NOT NULL,\
        //     purchase_amt NVARCHAR(20)  NOT NULL,\
        //     party_name NVARCHAR(20)  NOT NULL,\
        //     site NVARCHAR(20)  NOT NULL,\
        //     unloading_labour_gang NVARCHAR(20)  NOT NULL,\
        //     sale_qty NVARCHAR(20)  NOT NULL,\
        //     sale_rate NVARCHAR(20)  NOT NULL,\
        //     sale_amt NVARCHAR(20)  NOT NULL,\
        //     slip_no NVARCHAR(20)  NOT NULL\
        // )', (err) => {
        //     if (err) {
        //         //console.log("Table already exists.");
        //         //console.log(err)
        //     }
        //     let insert = 'INSERT INTO purches_entry_info (loading_babour_gang, loading_driver_name, truck_No, date, loaded_from,material,purchase_qty,purchase_rate,purchase_amt,party_name,site,unloading_labour_gang,sale_qty,sale_rate,sale_amt,slip_no) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
        //     db.run(insert, ["xyz", "Praveen", "SE123", "12/12/12", "12/12/12", "books", "23", "20000", "200000", "xyss", "vbnvnh", "jhjkh", "444", "200000", "sfdgf456", "jhgjuyg"]);

        // });

        // db.run('CREATE TABLE auth_info( \
        //     email NVARCHAR(20)  NOT NULL,\
        //     password NVARCHAR(20)  NOT NULL\
        // )', (err) => {
        //     if (err) {
        //         //console.log("Table already exists.");
        //         //console.log(err)
        //     }
        //     let insert = 'INSERT INTO auth_info (email, password) VALUES (?,?)';
        //     db.run(insert, ["geet@12345", "geet"]);

        // });
    }
});

Api.post('/singUp', (req, res) => {

    const { email_id, password } = req.body

    var date = new Date().toISOString();

    db.run('CREATE TABLE signUp_entry( \
        id INTEGER PRIMARY KEY AUTOINCREMENT,\
        email_id NVARCHAR(50) ,\
        password NVARCHAR(50) ,\
        date NVARCHAR(50) NOT NULL\)', (err) => {
        if (err) {
            //console.log("Table already exists.");
            //console.log(err)
        }
        let insert = 'INSERT INTO signUp_entry (id,email_id,password,date) VALUES (NULL,?,?,?)';
        db.run(insert, [email_id, password, date]);

        res.send({ msg: "success" })
        //console.log("ppppppppppp");
    });


})


Api.post("/login", (req, res, next) => {

    const { email_id,password } = req.body

    db.all(`SELECT * FROM signUp_entry WHERE email_id=='${email_id}' `, [], (err, rows) => {
        if (err) {
            // res.status(400).json({ "error": err.message });
            return;
        }
        // //console.log(rows.length)
        if (rows.length == 0) {
            res.send({ msg: "invalid_email" })
        }
        else if(rows[0].password!=password)
            {
         res.send({ msg1: "invalid_password" })
            }
            else if(rows[0].email_id==email_id && rows[0].password==password){
            res.send({ rows: rows,msg2:"success" })
            }

        console.log(rows)
        })


    })


Api.post('/insert_dog_detail', (req, res) => {

    const { 
        dog1,
        dog2,
        dog3,
        dog4,
        dog5,
        dog6,
        dog7,
        dog8,
        winner1,
        winner4,
        finalWinner1,
        winner6,
        winner7,
        finalWinner2,
        winner } = req.body

        console.log(req.body)
    var d = new Date()
    var date = d.toISOString();

    db.run('CREATE TABLE dog_detail_table( \
        id INTEGER PRIMARY KEY AUTOINCREMENT,\
        dog1 NVARCHAR(50) ,\
        dog2 NVARCHAR(50) ,\
        dog3 NVARCHAR(50) ,\
        dog4 NVARCHAR(50) ,\
        dog5 NVARCHAR(50) ,\
        dog6 NVARCHAR(50) ,\
        dog7 NVARCHAR(50) ,\
        dog8 NVARCHAR(50) ,\
        winner1 NVARCHAR(50) ,\
        winner4 NVARCHAR(50) ,\
        finalWinner1 NVARCHAR(50) ,\
        winner6 NVARCHAR(50) ,\
        winner7 NVARCHAR(50) ,\
        finalWinner2 NVARCHAR(50) ,\
        winner NVARCHAR(50) ,\
        date NVARCHAR(50) NOT NULL\)', (err) => {
        if (err) {
            //console.log("Table already exists.");
            //console.log(err)
        }
        let insert = 'INSERT INTO dog_detail_table (id,dog1,dog2,dog3,dog4,dog5,dog6,dog7,dog8,winner1,winner4,finalWinner1,winner6,winner7,finalWinner2,winner,date) VALUES (NULL,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)';
        db.run(insert, [dog1, dog2, dog3, dog4, dog5, dog6, dog7, dog8, winner1, winner4,finalWinner1, winner6, winner7, finalWinner2, winner, date]);

        res.send({ msg: "success" })
        //console.log("ppppppppppp");
    });


})

Api.get("/show_dog_details", (req, res, next) => {

    // res.send("hello")
    // DELETE FROM purches_entry_info
    db.all("SELECT * FROM  dog_detail_table ORDER BY id DESC", [], (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.status(200).json({ rows });
        //console.log(rows)
    });
});



    Api.post("/findById", (req, res, next) => {

        // res.send("hello")
        // DELETE FROM purches_entry_info

        const {id}=req.body
        console.log(req.body)

        db.all(`SELECT * FROM dog_detail_table WHERE id == '${id}'`, [], (err, rows) => {
            if (err) {
                res.status(400).json({ "error": err.message });
                return;
            }
          res.send({rows });
            //console.log(rows)
        });
    });

Api.get("/test", (req, res, next) => {

    // res.send("hello")
    // DELETE FROM purches_entry_info
    db.all("DROP TABLE dog_detail_table", [], (err, rows) => {
        if (err) {
            res.status(400).json({ "error": err.message });
            return;
        }
        res.status(200).json({ rows });
        //console.log(rows)
    });
});
