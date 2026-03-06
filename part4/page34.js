import express from "express"

const app=express();
app.set("view engine","ejs")
app.set("views","views")

app.listen(5000,()=>console.log("server Started"));
app.use(express.urlencoded({extended:true}));


//arrey called users
const users=[
    {name:"diwakar",email:"diwakardarga@gmail.com",password:"1234"},
    {name:"DD",email:"dargadiwakar@gmail.com",password:"abcd"},
    {name:"Darga",email:"darga@gmail.com",password:"king"}
];

app.get("/login",(req,res)=>{
    res.render("login")
});

app.post("/login",(req,res)=>{
    const {email,password}=req.body
    const user=users.find((user)=>user.email===email);
    if(user){
        if(user.password===password){
            res.redirect("/");
        }else{
            res.redirect("/login");
        }
    }else{
        res.redirect("/login")
    }
    res.redirect("/")
})


app.get("/register",(req,res)=>{
    res.render("register")
})
app.get("/",(req,res)=>{
    res.render("dashboard",{users})
})