import Navbar from "@/scenes/navbar"
import { useEffect, useState } from "react"
import { SelectedPage } from "@/shared/types"
import Home from "@/scenes/home"
import WorkExperience from "@/scenes/workexperience"
// import Projects from "@/scenes/projects"
import ContactMe from "@/scenes/contactMe"
import Footer from "./scenes/footer"
import AboutMe from "./scenes/aboutme"

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Home
  )
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home)
      }
      if (window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  })

  return (
    <div className="app bg-gray-20">
      <Navbar
        isTopOfPage={isTopOfPage}
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      {/**<OurClasses setSelectedPage={setSelectedPage} />*/}
      <WorkExperience setSelectedPage={setSelectedPage} />
      <AboutMe setSelectedPage={setSelectedPage} />
      <ContactMe setSelectedPage={setSelectedPage} />
      <Footer />
    </div>
  )
}

export default App
