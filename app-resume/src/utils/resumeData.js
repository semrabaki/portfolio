import React from "react";
import { AssignmentOutlined , Language, WebOutlined, YouTube} from "@mui/icons-material";
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
export default{
    name:"Semra Baki",
    title:"Software Engineer",
    birthday:"04-13-1985",
    email:"usemrabaki@gmail.com",
    address: "San Antonio, TX",

    socials:{
        
        
        GitHub:{
            link:'https://github.com/semrabaki',
            text:'My GitHub',
            icon:<GitHubIcon/>, 
        },
        Linkedin:{
            link:'https://www.linkedin.com/in/semra-baki-553553221/',
            text:'My LinkedIn',
            icon:<LinkedInIcon/>, 
        },


    },
     about: "I have been a math lover since I was a middle school student. I could not even think anything that I would enjoy more than a challenging math problem. Thanks the cutting edge technology that brings software in our life. I've become more passionate about software development than anything else.Nothing feels better than fixing a bug after trying really hard .\n Here are some of my skills; \n-I have experience building user interface with ReactJS along with React-router and Material-UI \n-Hands on experience in using ReactJS with ES6 features to develop reusable components,\n-Experience in responsive web design using CSS3 media queries and libraries such as Bootstrap.\n-Experience in Swift platform where make secure system with national and international transactions.\n-Experience in MVC design pattern by using SpringBoot and Spring MVC.\n-Experience in using Java to create RestFull Api in Spring Environment Experience in version control tools Git GitHub, and package manager NPM .\n-Experience in using JIRA and following agile development process, and deep understanding in Software Solid understanding of Object-Oriented Programming (OOP) and Functional Programming (FP) \n-.Development Life Cycle (SDLC) including requirements analysis, design, testing implementation, and maintenance.\n-Excellent interpersonal abilities, communication skills, time management and team skills.",
     
     experinces:[
         {
             title:'work1',
             date:'2018-Present',
             description:' dsjskjdslksjdl'
         },
         {
            title:'work1',
            date:'2018-Present',
            description:' dsjskjdslksjdl'
        },
        {
            title:'work1',
            date:'2018-Present',
            description:' dsjskjdslksjdl'
        },
        {
            title:'work1',
            date:'2018-Present',
            description:' dsjskjdslksjdl'
        }

     ],
     educations:[
        {
            title:'eeucation 1',
            date:'2018-Present',
            description:' dsjskjdslksjdl'
        },
        {
           title:'education2',
           date:'2018-Present',
           description:' dsjskjdslksjdl'
       },
       {
           title:'education3',
           date:'2018-Present',
           description:' dsjskjdslksjdl'
       },
       {
           title:'work1',
           date:'2018-Present',
           description:' dsjskjdslksjdl'
       }

    ],
    services:[
        {
            title:"Web Dev",
            description:" I have been a basdass web developer for 10 years",
            icon:<WebOutlined/>
        },
        {
            title:"Web Dev",
            description:" I have been a basdass web developer for 10 years",
            icon:<AssignmentOutlined/>
        },
        {
            title:"Web Dev",
            description:" I have been a basdass web developer for 10 years",
            icon:<WebOutlined/>
        }
    ],
    skills: [
        {   id:"1",
            title: "FRONT-END",
            description: [
                "ReactJS",
                "JavaScript",
                "HTML5",
                "CSS3",
                "Bootstrap",
            ]
        },
        {   id:"2",
            title: "BACK-END",
            description: [
                "Java",
                "JavaEE",
                "Spring Framework",
                "Hibernate",
                ,"JDBC",
                "Restful Api",
                "Micro-Services With Spring Boot",
            ]
        },
        {   id:"3",
            title: "DATABASES",
            description: [
                "Oracle SQL",
                "MySQL",
                "MongoDB",
                "PostgreSQL"
                
            ]
        },
        {   id:"4",
            title: "SOURCE CONTROL",
            description: [
                "Git",
                "GitHub",
                "SCRUM/Agile",
                "Jira/Jira Xray"
                
            ]
        }

    ], 
    projects:[
        {
            tag:'React',
            title:'React Project 1',
            caption:"A short description",
            image:'',
            description:'This is my project description',
            links:[
                { link:'https://www.google.com', icon:<YouTube/>},
                { link:'https://www.google.com', icon:<GitHubIcon/>},
                { link:'https://www.google.com', icon:<Language/>},

            ]
        },
        {
            tag:'React',
            title:'React Project 2',
            caption:"A short description",
            image:'',
            description:'This is my project description',
            links:[
                { link:'https://www.google.com', icon:<YouTube/>},
                { link:'https://www.google.com', icon:<GitHubIcon/>},
                { link:'https://www.google.com', icon:<Language/>},

            ]
        },
        {
            tag:'Spring Boot -1',
            title:'React Project 3',
            caption:"A short description",
            image:'',
            description:'This is my project description',
            links:[
                { link:'https://www.google.com', icon:<YouTube/>},
                { link:'https://www.google.com', icon:<GitHubIcon/>},
                { link:'https://www.google.com', icon:<Language/>},

            ]
        },
        {
            tag:'Spring Boot -2',
            title:'React Project 3',
            caption:"A short description",
            image:'',
            description:'This is my project description',
            links:[
                { link:'https://www.google.com', icon:<YouTube/>},
                { link:'https://www.google.com', icon:<GitHubIcon/>},
                { link:'https://www.google.com', icon:<Language/>},

            ]
        }
    ]
  

};