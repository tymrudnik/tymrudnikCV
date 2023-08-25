import { ProjectType } from "@/shared/types"
import MyFirstTodoList from "@/assets/projectImages/MyFirstTodoList.png"
import MyFirstCV from "@/assets/projectImages/MyFirstCV.png"
import EfiscoWebPage from "@/assets/projectImages/EfiscoWebPage.png"
import NewReactCV from "@/assets/projectImages/NewReactCV.png"

const ImageStyling = "shadow-lg"
const listStyling = "list list-disc text-sm pl-6 pt-2"

export const projectsArr: Array<ProjectType> = [
  {
    index: 0,
    title: "Starting off Simple",
    description:
      'My first working JavaScript application was a simple todo list with working "complete", "edit" and "trash" buttons. The list was dynamically rendered and stored locally. During this project, I learned the fundamentals of JavaScript and DOM manipulation',
    image: <img className={ImageStyling} src={MyFirstTodoList} />,
    keyskills: (
      <ul className={listStyling}>
        <li>JavaScript DOM manipulation</li>
        <li>Basic CSS using references and flex box</li>
        <li>Separating Code and good practices when writing functions</li>
      </ul>
    ),
  },
  {
    index: 1,
    title: "A way to express my abilities",
    description:
      "Soon I started working on a CV template website which I could have easily accessible and up to date",
    image: <img src={MyFirstCV} />,
    keyskills: (
      <ul className={listStyling}>
        <li>Deploying a website to the web</li>
        <li>More CSS with reactive formatting</li>
        <li>HTML practising and formatting</li>
      </ul>
    ),
  },
  {
    index: 2,
    title: "New Brand New Me",
    description:
      "In my most recent employment I had the task to create a brand new website for the company as part of a marketing and branding revamp. Using wordpress I had to build a website to specifications with close collaboration with the CEO",
    image: <img src={EfiscoWebPage} />,
    keyskills: (
      <ul className={listStyling}>
        <li>Wordpress website management</li>
        <li>CSS rules and referencing external stylesheets</li>
        <li>Basic content management and storage</li>
      </ul>
    ),
  },
  {
    index: 3,
    title: "Start of my React journey",
    description:
      "And now we arrive at the current iteration of my CV website. In this case I believe I put together several courses worth of knowledge so that I can build a properly reactive website from scratch. Using as many features of React as possible I strived to build something I am proud to show to others",
    image: <img src={NewReactCV} />,
    keyskills: (
      <ul className={listStyling}>
        <li>React Component Management</li>
        <li>TypeScript State and Type Management</li>
        <li>TailwindCSS styling and use of external resources</li>
      </ul>
    ),
  },
]
