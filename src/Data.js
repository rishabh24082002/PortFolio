import { FaHtml5,FaGithub, FaCss3, FaNodeJs, FaReact, FaPhoneAlt, FaUser, FaMapMarkerAlt, FaPaperPlane,FaInstagram, FaLinkedin } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import {BsFillBootstrapFill} from "react-icons/bs"
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
// import { BsMedium } from "react-icons/bs";
// import portfolio from "./assets/portfolio.jpg"
import work1 from "./assets/work1.png";
import work2 from "./assets/work2.png";
import work3 from "./assets/work3.png";
import work4 from "./assets/work4.png";
import work5 from "./assets/work5.png";
import work6 from "./assets/work6.png";
import { motion } from 'framer-motion'

export const navLinks = ["home", "about", "skills", "portfolio", "contact"]

export const socialIcons = [
    <FaInstagram />,
  <motion.a href="https://www.linkedin.com/in/rishabh-nigam-75a641207/" target="_blank">
    <FaLinkedin />
  
  </motion.a>,
  <motion.a href="https://github.com/rishabh-nigam" target="_blank">
    <FaGithub />
  </motion.a>
]

export const bios = [
  {
    id: 1,
    icon: <FaUser />,
    key: "Name",
    value: "Rishabh Nigam"
  },
  {
    id: 2,
    icon: <FaPhoneAlt />,
    key: "Phone",
    value: "+917379563919"
  },
  {
    id: 3,
    icon: <FaPaperPlane />,
    key: "Email",
    value: "rishabhnigam2408@gmail.com"
  }
]

export const icons = [<FaHtml5 />, <FaCss3 />, <DiJavascript />,<BsFillBootstrapFill/>, <FaReact />, <FaNodeJs />,<SiExpress/>,<SiMongodb/>]

export const educations = [
  {
    id: 1,
    year: "2020-2024",
    position: "ABES Engineering College",
    company: "B.Tech (Computer Science in Artificial Intelligence and Machine Learning)"
  },
  {
    di: 2,
    year: "2019",
    position: "St.Xavier's High School",
    company: "Intermediate"
  },
  {
    id: 3,
    year: "2017",
    position: "S.G.R.R. Public School",
    company: "High School"
  }
]

export const workImages = [
  {
    id: 1,
    img: work1,
    giturl:"https://github.com/rishabh24082002/IMDB-Clone",
    deploy:"https://imdb-clone-pearl.vercel.app/",

    name: "project 1",
    category: "web"
  },
  {
    id: 2,
    img: work2,
    giturl:"https://github.com/rishabh24082002/Mern-Project/tree/master",
    deploy:"https://book-review-application.netlify.app",
    name: "project 2",
    category: "web"
  },
  {
    id: 3,
    img: work3,
    giturl:"https://github.com/rishabh24082002/Mern-Project/tree/master",
    deploy:"https://book-review-application.netlify.app",
    name: "project 3",
    category: "web"
  },
  {
    id: 4,
    img: work4,
    giturl:"https://github.com/rishabh24082002/Mern-Project/tree/master",
    deploy:"https://book-review-application.netlify.app",
    name: "project 4",
    category: "app"
  },
  {
    id: 5,
    img: work5,
    giturl:"https://github.com/rishabh24082002/Mern-Project/tree/master",
    deploy:"https://book-review-application.netlify.app",
    name: "project 5",
    category: 'app'
  },
  {
    id: 6,
    img: work6,
    giturl:"https://github.com/rishabh24082002/Mern-Project/tree/master",
    deploy:"https://book-review-application.netlify.app",
    name: "project 6",
    category: "design"
  }
]


export const workNavs = [
  "All",
  //  "Web", "App", "Design"
]

export const contacts = [
  {
    id: 1,
    icon: <FaMapMarkerAlt />,
    infoText: "Crosssing Republik, Ghaziabad"
  },
  {
    id: 2,
    icon: <FaPaperPlane />,
    infoText: "rishabhnigam2408@gmail.com"
  },
  {
    id: 3,
    icon: <FaPhoneAlt />,
    infoText: "+91 739563919"
  }
]
