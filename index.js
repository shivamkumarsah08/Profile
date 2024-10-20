import express from "express";
import path from "path";
import url from "url";

const app=express();
app.set('view engine', 'ejs');
const userProfile = [{
    name: "Shivam Sah",
    title: "Web Developer | Designer | Content Creator",
    bio: "Hello! I'm shivam, I love coding and continuously learning new technologies.",
    skills: {
        frontend: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
        backend: ["React", "Node.js", "Git", "Photoshop"]
    },
    contact: {
        email: "shivamawgp111@gmail.com",
        phone: "+91620221718",
    },
    projects: [
        {
            name: "To-do list",
            description: "A web application for managing tasks."
        },
        {
            name: "Ecommerce",
            description: "An e-commerce platform for selling products."
        }
    ]
},{
    name: "Shivam jha",
    title: "Web Developer | Designer | Content Creator",
    bio: "Hello! I'm shivam jha, I love coding and continuously learning new technologies.",
    skills: {
        frontend: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
        backend: ["React", "Node.js", "Git", "Photoshop"]
    },
    contact: {
        email: "shivamjha111@gmail.com",
        phone: "+91620252718",
    },
    projects: [
        {
            name: "To-do list",
            description: "A web application for managing tasks."
        },
        {
            name: "Ecommerce",
            description: "An e-commerce platform for selling products."
        }
    ]
},{
    name: "Tarun",
    title: "Web Developer | Designer | Content Creator",
    bio: "Hello! I'm Tarun, I love coding and continuously learning new technologies.",
    skills: {
        frontend: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
        backend: ["React", "Node.js", "Git", "Photoshop"]
    },
    contact: {
        email: "singhsadgyan@gmail.com",
        phone: "+919044351175",
    },
    projects: [
        {
            name: "To-do list",
            description: "A web application for managing tasks."
        },
        {
            name: "Ecommerce",
            description: "An e-commerce platform for selling products."
        }
    ]
}];
// Route

app.get('/profile/:n',(req,res)=>{
    const n = Number(req.params.n);
    res.render('index', { user: userProfile[n] });
})
app.listen(5000, () => {
    console.log(`Server is running on http://localhost:5000`);
});