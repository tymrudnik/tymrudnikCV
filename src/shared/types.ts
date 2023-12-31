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

export interface ProjectType {
  index: number
  title: string
  description: string
  image: JSX.Element
  keyskills: JSX.Element
}

export interface SelectedIndex {
  index: number
}
