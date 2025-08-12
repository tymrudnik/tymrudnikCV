import useMediaQuery from "@/hooks/useMediaQuery"
import ActionButton from "@/shared/ActionButton"
import { SelectedPage } from "@/shared/types"
import HomePageGraphic from "@/assets/NavbarLogo.svg"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { motion } from "framer-motion"
import HTMLLogo from "@/assets/technologyLogos/HtmlLogo.png"
import CSSLogo from "@/assets/technologyLogos/CSSLogo.png"
import JSLogo from "@/assets/technologyLogos/JavaScriptLogo.png"
import ReactLogo from "@/assets/technologyLogos/react.svg"
import TailwindLogo from "@/assets/technologyLogos/TailwindCssLogo.png"
import TSLogo from "@/assets/technologyLogos/TypeScriptLogo.png"
import HomePageImage from "@/assets/HomePageGraphic.png"

type Props = {
  setSelectedPage: (value: SelectedPage) => void
}

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width:1060px)")
  return (
    <section id="home" className="gap-16 bg-gray-20 py-10 md:h-full md:pb-0">
      {/** IMAGE AND MAIN HEADER */}
      <motion.div
        className="md:flex mx-auto w-5/6 items-center justify-center md:h-5/6"
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
      >
        {/** MAIN HEADER */}
        <div className="z-10 mt-32 md:basis-3/5">
          {/** HEADINGS */}
          <motion.div
            className="md:-mt-20"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] ">
                <img alt="home-page-text" src={HomePageGraphic} />
              </div>
            </div>
            <p className="mt-8">
              In a world of digital chaos, find clarity through design. Dive in
              to see a fresh perspective, brought to life by a passionate
              beginner eager to make an impact.
            </p>
          </motion.div>
          {/** ACTIONS */}
          <motion.div
            className="mt-8 flex items-center gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Get In Touch
            </ActionButton>
            <AnchorLink
              className="text-sm font-bold text-primary-500 underline hover:text-secondary-500"
              onClick={() => setSelectedPage(SelectedPage.WorkExperience)}
              href={`#${SelectedPage.WorkExperience}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>
        {/** IMAGE */}
        <div
          className="flex justify-center md:z-10
                     md:ml-40 md:mt-16 md:justify-items-end"
        >
          <img
            alt="home-page-graphic"
            src={HomePageImage}
            className="object-scale-down max-h-full m-auto"
          />
        </div>
      </motion.div>
      {/** SPONSORS */}
      {isAboveMediumScreens && (
        <div className="w-full bg-primary-100 py-10 flex flex-col items-center">
          <h1 className="basis-3/5 pb-10 text-center font-montserrat text-3xl font-bold">
            Core Programming Technologies
          </h1>
          <div className="flex w-3/5 flex-wrap items-center justify-center gap-8">
            <img alt="html-logo" src={HTMLLogo} loading="lazy" />
            <img alt="css-logo" src={CSSLogo} loading="lazy" />
            <img alt="javascript-logo" src={JSLogo} loading="lazy" />
            <img
              className="h-[100px] w-[100px]"
              alt="react-logo"
              src={ReactLogo}
              loading="lazy"
            />
            <img alt="tailwind-css-logo" src={TailwindLogo} loading="lazy" />
            <img alt="typescript-logo" src={TSLogo} loading="lazy" />
          </div>
        </div>
      )}
    </section>
  )
}

export default Home
