import ActionButton from "@/shared/ActionButton"
import HText from "@/shared/HText"
import { motion } from "framer-motion"
import { SelectedPage } from "@/shared/types"
import AboutMeGraphic from "@/assets/AboutMeGraphic.svg"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const AboutMe = ({ setSelectedPage }: Props) => {
  return (
    <section id="aboutme" className="z-[-1]">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.AboutMe)}
        className="w-full bg-primary-100 py-10"
      >
        <div className="mx-auto w-5/6">
          <div className="mt-2 items-center justify-between gap-20 md:mt-10 md:flex">
            {/** GRAPHIC */}
            <img
              className="mx-auto"
              alt="aboutme-page-graphic"
              src={AboutMeGraphic}
              loading="lazy"
            />
            {/** DESCRIPTION */}
            <div>
              {/** TITLE */}
              <div className="relative">
                <div className="mt-5">
                  <motion.div
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
                      ABOUT <span className="text-primary-500">ME</span>
                    </HText>
                  </motion.div>
                </div>
              </div>
              {/** DESCRIPTION */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <p className="my-5 text-lg">
                  I am a self-taught software developer specialising in
                  Front-end JavaScript based technologies. I have experience in
                  Data Analysis and Purchasing/Logistics however I have
                  discovered a passion for programming. My current goal is to
                  improve and develop my skills as a web developer. I am open to
                  learning new things and bettering myself. I thrive in
                  challenging situations when there is a need to come up with a
                  creative solution to a problem.
                </p>
              </motion.div>
              {/** BUTTON */}
              <div className="relative mt-16">
                <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Get In Touch
                  </ActionButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default AboutMe
