import HText from "@/shared/HText"
import { ExperienceType, SelectedPage } from "@/shared/types"
import { motion } from "framer-motion"
import Experience from "./Experience"
// import WorkExpArr from "./WorkExpArr"
import { useState } from "react"
import { scroller } from "react-scroll"
import { Element } from "react-scroll"
import WorkExpArr from "./WorkExpArr"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const WorkExperience = ({ setSelectedPage }: Props) => {
  const [showAll, setShowAll] = useState(false)

  const renderedExperience = (
    showAll ? WorkExpArr : WorkExpArr.slice(0, 3)
  ).map((work: ExperienceType) => (
    <Experience
      key={work.company}
      icon={work.icon}
      url={work.url}
      title={work.title}
      description={work.description}
      company={work.company}
      dates={work.dates}
    />
  ))

  const handleExperienceButton: React.MouseEventHandler<
    HTMLButtonElement
  > = () => {
    setShowAll(!showAll)
    setSelectedPage(SelectedPage.WorkExperience)

    if (!!showAll) {
      scroller.scrollTo("topOfParentDiv", {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      })
    }
  }

  return (
    <section id="workexperience" className="mx-auto w-5/6 py-20 mt-10 ">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.WorkExperience)}
      >
        {/** HEADER */}
        <Element name="topOfParentDiv">
          <motion.div
            className="md:my-5 md:w-3/5 "
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <HText>
              MY <span className="text-primary-500">WORK</span> EXPERIENCE
            </HText>
          </motion.div>

          {/** EXPERIENCE */}
          <div className="mt-5 items-start grid md:grid-cols-3 gap-8">
            {renderedExperience}
          </div>
        </Element>
        <button
          className="mt-5 mx-auto block text-sm font-bold text-primary-500 underline hover:text-secondary-500"
          onClick={handleExperienceButton}
        >
          {showAll ? "Show Less" : "Show More"}
        </button>

        {/** GRAPHICS AND DESCRIPTION */}
      </motion.div>
    </section>
  )
}

export default WorkExperience
