import { useState } from "react"
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import Logo from "@/assets/NavbarLogo.svg"
import LinkedInImage from "@/assets/LinkedIn.svg"
import Link from "./Link"
import { SelectedPage } from "@/shared/types"
import useMediaQuery from "@/hooks/useMediaQuery"

type Props = {
  isTopOfPage: boolean
  selectedPage: SelectedPage
  setSelectedPage: (value: SelectedPage) => void
}

const Navbar = ({ isTopOfPage, selectedPage, setSelectedPage }: Props) => {
  const flexBetween = "flex items-center justify-between"
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)")
  const navbarBackground = isTopOfPage ? "" : "bg-primary-100 drop-shadow"
  return (
    <nav>
      <div
        className={`${navbarBackground} ${flexBetween} fixed top-0 z-30 w-full py-6`}
      >
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* LEFT SIDE */}
            <a
              onClick={() => setSelectedPage(SelectedPage.Home)}
              href={`#${SelectedPage.Home}`}
            >
              <img alt="logo" src={Logo} className="h-[45px]" />
            </a>
            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween} w-full`}>
                <div className={`${flexBetween} gap-8 text-sm`}>
                  <Link
                    page="Home"
                    offset={0}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Work Experience"
                    offset={0}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="About Me"
                    offset={90}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  {/* <Link
                    page="Projects"
                    offset={0}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  /> */}
                  <Link
                    page="Contact Me"
                    offset={0}
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className={`${flexBetween} gap-8 pr-10`}>
                  <a
                    href="https://www.linkedin.com/in/tymrudnik/"
                    target="_blank"
                  >
                    <img src={LinkedInImage} />
                  </a>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-100 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-400" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="ml-[25%] flex flex-col gap-10 text-2xl pr-5">
            <Link
              page="Home"
              offset={0}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Work Experience"
              offset={0}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="About Me"
              offset={90}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            {/* <Link
              page="Projects"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            /> */}
            <Link
              page="Contact Me"
              offset={0}
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar
