export enum SelectedPage {
  Home = "home",
  AboutMe = "aboutme",
  WorkExperience = "workexperience",
  Projects = "projects",
  ContactMe = "contactme",
}

export interface ExperienceType {
  icon: JSX.Element
  url: string
  company: string
  dates: string
  title: string
  description: JSX.Element
}

export interface ClassType {
  name: string
  description?: string
  image: string
}
