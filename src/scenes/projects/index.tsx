import { SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"
import Carousel from "./Carousel"
import ProjectData from "./ProjectData"
import { useState } from "react"
import { projectsArr } from "./projectsArr"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Projects = ({ setSelectedPage }: Props) => {
  const [selectedIndex, setSelectedIndex] = useState(0)

  const handlePrev = () => {
    if (selectedIndex > 0) {
      setSelectedIndex((prevIndex) => prevIndex - 1)
    }
  }
  const handleNext = () => {
    if (selectedIndex < projectsArr.length - 1) {
      setSelectedIndex((prevIndex) => prevIndex + 1)
    }
  }

  return (
    <section id="projects" className="w-full bg-gray-20 py-20 md:h-2/3 ">
      <motion.div
        className="mx-auto w-5/6 md:flex md:justify-between  items-center"
        onViewportEnter={() => setSelectedPage(SelectedPage.Projects)}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        {/** Content Container */}
        <div className="md:basis-2/5 pr-8">
          <div>
            <ProjectData index={selectedIndex} />
          </div>
          <div className="flex justify-between pt-10">
            <button
              className="w-1/3 py-2 rounded-md bg-secondary-500   hover:bg-primary-500 hover:text-white "
              onClick={handlePrev}
            >
              Previous
            </button>
            <button
              className="w-1/3 py-2 rounded-md bg-secondary-500   hover:bg-primary-500 hover:text-white "
              onClick={handleNext}
            >
              Next
            </button>
          </div>
        </div>
        {/** Image Container */}
        <div className="md:basis-1/2 py-8 ">
          <Carousel index={selectedIndex} />
        </div>
      </motion.div>
    </section>
  )
}

export default Projects
