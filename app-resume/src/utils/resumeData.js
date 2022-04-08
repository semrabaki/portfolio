import React from "react";
import { AssignmentOutlined , Language, WebOutlined, YouTube} from "@mui/icons-material";
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Calculator from "../assets/images/calculator.PNG";
import ToDoList from "../assets/images/ToDoListUI.PNG";
import UserInfoUI from "../assets/images/UserInfoCrudOpUI.PNG";
import BootstrapApi from "../assets/images/Bootstrap-Api.PNG";
import SureBankUI from  "../assets/images/SureBankUI.PNG";
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
    about: "Former researcher and teacher, current software engineer and life-long learner who has a huge passion for building software and exploring new technologies. Seeking to utilize broad educational background with excellent analytical, technical, and programming skills to meet business needs.\n \n My  skills:\n\n -Have an experience in Spring Framework by using Spring Boot and Spring JWT.\n\n-Experience in using Java to create Restful-API in Spring environment. \n\n-I have experience building user interface with ReactJS along with React-router and Material-UI \n\n-Experience in using ReactJS with ES6 features to develop reusable components. \n\n-Experience in responsive web design using CSS3 media queries and libraries such as Bootstrap. \n\n-Experience in version control tools such as Git, GitHub.\n\n-Experience in using JIRA and following agile development process. \n\n-Deep understanding of Software Development Life Cycle (SDLC) including requirements analysis, design, testing implementation, and maintenance.\n\n-Deep understanding of Object-Oriented Programming (OOP) and Functional Programming (FP).\n\n-Excellent interpersonal abilities, communication skills, time management and team skills.",
    experinces:[
         {
             title:'Software Engineer',
             date:'June 2021 - Present',
             description:'Currently working as a Software Engineer utilizing technologies where we worked on national and international transactions to make payments on a secure system. Spring Tool Suite is used to develop the backend structure of this project. Spring Boot and Spring JWT is the framework on the backend to create secure, authenticated and authorized Restful APIs with the Maven project structure.I extended UserDetailsService and  I made connections to the Database which is PostgreSQL by extending JPA repository and build Spring powered applications. I am currently working on creating user interface with ReactJS along with React-router and reusable components with ES6 features. Many external libraries such as Bootstrap, Formik, Material-UI, Yup, React-strap, React-toastify help me to complete the UI part of the project. Git and GitHub are being used in my current team as a source control tool daily. Jira and Jira Xray are project management tools for our SCRUM team. I am currently working in an Agile environment and having Grooming meetings to understand user stories. Our Sprints are two weeks long and we are having daily standups. '
         },
         {
            title:'Computer Science/Robotics Teacher/ IT Specialist',
            date:'August 2016 - June 2021',
            description:'Experience teaching programming basics and robotics classes for K-8th grade students. Also helped with IT related issues.  Joined weekly school meetings. Design morning and after-school extra-curricular technology programs such as coaching Robotics and  CyberPatriot team.  Incorporated technology into lessons to strengthen student understanding by utilizing the online textbook programs to assign lessons. I used many different software to connect the databases to enter students grades, take attendance, and submit lesson plans'
        },
        {
            title:'Research Assistant',
            date:'2015 - 2016',
            description:'Helping course professors with technology related tasks such as hardware, modifying online courses.  Created an iBook for the Teacher Candidates.'
        }


     ],
     educations:[
        {
            title:'Ph.D in Instructional Technology',
            description:'My huge passion about learning lead me to start my Ph.D degree. During my Ph.D journey I took several Multimedia Production and Project Management classes. While I was working as a computer science teacher I realized that students reading levels differ and the most important factor on this differnce is students` current vocabulary knowledge. As I doctorate dissertation I designed a software that aims to teach students grade level vocabulary.'
        },
        {
           title:'MSCS in Computer Science',
           description:'Right after my graduation from Computer Engineering, I started a master program in Computer Science at one of the valunrable university in Turkey.\nDuring my master I had took several valuable classes such as Data Mining, Pattern Recognition, Artificial Intelligence, Neural Network,Natural Language Processing, Advanced Operationg Systems,etc. I had also worked on four different projects that are recently published in international journals.'
       },
       {
           title:'BS in Computer Engineering',
           description:'During my Bachelor Degree I took several enginering and advanced math classes. I also took algorithm, advanced algotirthm and database management classes.'
       }

    ],
    services:[
        {
            title:"Custom Software Dev",
            description:"Translate unique client requirements into custom solutions with advance technologies",
            icon:<WebOutlined/>
        },
        {
            title:"Web Development",
            description:"Comprehending your business ideas using web development services for innovative application",
            icon:<AssignmentOutlined/>
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
                "Node.js"
            ]
        },
        {   id:"2",
            title: "BACK-END",
            description: [
                "Java",
                "JavaEE",
                "JDBC",
                "Spring Framework",
                "Hibernate",
                "Restful-API"
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
            tag:'React/JS',
            title:'Calculator',
            caption:"Basic Calculator with React/JS",
            image:Calculator,
            description:'',
            links:[
                { link:'https://github.com/semrabaki/reactCalculator', icon:<GitHubIcon/>},
                { link:'https://basiccalculatorwithreact.netlify.app/', icon:<Language/>},

            ]
        },
        {
            tag:'React/JS',
            title:'To Do List with React',
            caption:"To Do list that enables user to track daily todos",
            image:ToDoList,
            description:'In this project I used React hooks for managing states. UI support adding and deleting items in the list. The backend of this project also created and will be connected soon.You can check backend in the Java/SpringBoot projects section',
            links:[
                { link:'https://github.com/semrabaki/ToDoListUI', icon:<GitHubIcon/>},
                { link:'https://todolistbysemrabaki.netlify.app/', icon:<Language/>},

            ]
        },
        {
            tag:'React/JS',
            title:'User Info Submit with React-',
            caption:"Saving User Information into the DB",
            image:UserInfoUI,
            description:'In this project I used Forms and Hooks',
            links:[
                { link:'https://github.com/semrabaki/UserAddressProjectFrontEnd', icon:<GitHubIcon/>},
                { link:'https://userinfoui.netlify.app/', icon:<Language/>},

            ]
        },
        {
            tag:'React/JS',
            title:'First Bootstrap Project',
            caption:"Bootstrap and API Fetching",
            image:BootstrapApi,
            description:'With this project I practised using Bootstrap, online Api fething and routing',
            links:[
                { link:'https://github.com/semrabaki/Rauting-Apifecthing-Example', icon:<GitHubIcon/>},
                { link:'https://react-routing-fetching-api.netlify.app/', icon:<Language/>},

            ]
        },
        {
            tag:'React/JS',
            title:'SureBank UI',
            caption:"SureBank FrontEnd",
            image:SureBankUI,
            description:'I am currently developing a bank project from scratch. UI part of the project is currently being created with ReactJS along with external libraries such as Material-UI, BootStrap, react-router-dom etc.  Please refer to the GitHub repo for more updating information about it. ',
            links:[
                { link:'https://github.com/semrabaki/SurebankFrontEnd', icon:<GitHubIcon/>},
            ]
        },
        {
            tag:'Java/Spring Boot',
            title:'SureBank',
            caption:"SureBank BackEnd",
            image:SureBankUI,
            description:'The BackEnd part of the Bank Application is created by SpringBoot with help of external dependencies. Method-Based Authorication and JWT is being used for security and MySQL is for DataBase.  Please refer to the GitHub repo for more updating information about it.',
            links:[
                { link:'https://github.com/semrabaki/SureBankBackEnd', icon:<GitHubIcon/>},
            ]
        },
        {
            tag:'Java/Spring Boot',
            title:'To Do List',
            caption:"To Do List BackEnd",
            image:ToDoList,
            description:'The BackEnd part of this application is created by SpringBoot with help of external dependencies. This project is created for practising basic CRUD operations. Please check the UI part of this project from the React/JS project section. UI part and BackEnd will be connected in the future. I  Please refer to the GitHub repo for more updating information about it.',
            links:[
                { link:'https://github.com/semrabaki/SureBankBackEnd', icon:<GitHubIcon/>},
            ]
        },
        {
            tag:'Java/Spring Boot',
            title:'User Info -CRUD Operations',
            caption:"User Info -CRUD Operations BackEnd",
            image:UserInfoUI,
            description:'The BackEnd part of this application is created by SpringBoot with help of external dependencies. This project is created for practising basic CRUD operations. UI part and BackEnd will be connected in the future. I  Please refer to the GitHub repo for more updating information about it.',
            links:[
                { link:'https://github.com/semrabaki/UserInfoBackEnd', icon:<GitHubIcon/>},
            ]
        }
    ]
  

};