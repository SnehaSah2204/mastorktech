const express = require('express');
const PORT = process.env.PORT||3000;
const ejs = require('ejs');
const bodyparser = require("body-parser");
const app = express();
app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));
app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());
app.use(express.static("public"));

app.get("/",(req,res)=>{
    res.render("home");
});

app.get("/about",(req,res)=>{
    res.render("about");
})

app.get("/services",(req,res)=>{
    res.render("services");
});
app.get("/technologies",(req,res)=>{
    res.render("technologies");
});


// app.post("/mentor",async(req,res)=>{
//     const mentor = {
//         name: "newmentor"
//     };
//     try{
//         await Mentors.add(mentor);
//         return res.json({status:"ok"});
//     }catch(err){
//         return res.json({err});
//     }
// });

// app.post("/funding",async(req,res)=>{
//     const funding = {
//         name: "newfunding"
//     };
//     try{
//         await Funding.add(funding);
//         return res.json({status:"ok"});
//     }catch(err){
//         return res.json({err});
//     }
// });

app.listen(PORT,()=>console.log("running server on "+PORT))