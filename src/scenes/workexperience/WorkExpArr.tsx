import EfiscoLogo from "@/assets/experienceLogos/efisco.png"
import CTMLogo from "@/assets/experienceLogos/ctm_logo.svg"
import CyfroweLogo from "@/assets/experienceLogos/cyfroweLogo.png"
import WinningMovesLogo from "@/assets/experienceLogos/winningMovesLogo.png"
import TastyLogo from "@/assets/experienceLogos/LogoTasty.jpg"
import APMLogo from "@/assets/experienceLogos/apLogo.jpeg"
import { ExperienceType } from "@/shared/types"

const WorkExpArr: ExperienceType[] = [
    {
      icon: (
        <img className="h-[40px] w-[40px]" alt="efisco_logo" src={EfiscoLogo} />
      ),
      company: "Efisco.net",
      url: "https://efisco.net",
      dates: "Jan 2023 – Present",
      title: "Client Acquisition Manager",
      description: (
        <ul className="text-sm list-disc ml-8">
          <li>
            Creating a new website for the business using Wordpress, HTML and
            CSS
          </li>
          <li>Creating and posting content on social media</li>
          <li>Finding leads and contacting potential clients</li>
        </ul>
      ),
    },
    {
      icon: <img className="h-[40px] w-[40px]" alt="ctm_logo" src={CTMLogo} />,
      company: "OBR Centrum Techniki Morskiej",
      url: "https://ctm.gdynia.pl",
      dates: "May 2022 – Dec 2022",
      title: "Purchasing Specialist",
      description: (
        <ul className="text-sm list-disc ml-8">
          <li>
            Ordering raw and complete products for manufacture military and
            commercial r&d projects
          </li>
          <li>
            Negotiating/closing high value contracts and handling complaints or
            objections
          </li>
          <li>
            Improving existing systems for data management and forecasting
          </li>
        </ul>
      ),
    },
    {
      icon: (
        <img
          className="h-[20px] w-[40px]"
          alt="cyfrowe_logo"
          src={CyfroweLogo}
        />
      ),
      company: "Cyfrowe.pl",
      url: "https://www.cyfrowe.pl",
      dates: "Jan 2022 – Apr 2022",
      title: "Assistant Product Manager",
      description: (
        <ul className="text-sm list-disc ml-8">
          <li>
            Creating sales reports for product managers to drive stock
            purchasing and marketing decisions
          </li>
          <li>
            Purchasing goods and maintaining a healthy warehouse stock level
            based on sales analysis
          </li>
          <li>Maintaining good customer and distributor relations</li>
        </ul>
      ),
    },
    {
      icon: (
        <img
          className="h-[40px] w-[40px]"
          alt="winning_moves_logo"
          src={WinningMovesLogo}
        />
      ),
      company: "Winning Moves Polska",
      url: "https://winningmoves.pl",
      dates: "Jan 2021 – Dec 2021",
      title: "Purchase Order Processing Specialist",
      description: (
        <ul className="text-sm list-disc ml-8">
          <li>
            Ordering raw and complete products for manufacture of toys and games
          </li>
          <li>
            Maintaining tight production schedule and contacting suppliers to
            ensure on time production
          </li>
          <li>
            Improving existing systems for data management and forecasting
          </li>
        </ul>
      ),
    },
    {
      icon: (
        <img className="h-[20px] w-[40px]" alt="tasty_logo" src={TastyLogo} />
      ),
      company: "Tasty PLC",
      url: "https://www.linkedin.com/company/tasty-plc/",
      dates: "Sep 2019 – Jul 2020",
      title: "Purchase Order Processing Specialist",
      description: (
        <ul className="text-sm list-disc ml-8">
          <li>
            Forecasting future revenue and expenses through statistical analysis
          </li>
          <li>
            Managing internal IT systems and improving existing infrastructure
          </li>
          <li>
            Configuring internal systems for 57 restaurants to help track
            upcoming promotions
          </li>
        </ul>
      ),
    },
    {
      icon: <img className="h-[40px] w-[40px]" alt="apm_logo" src={APMLogo} />,
      company: "AP Materials Ltd",
      url: "https://www.linkedin.com/company/ap-materials-limited/about/",
      dates: "Apr 2017 – Aug 2019",
      title: "Purchase Order Processing Specialist",
      description: (
        <ul className="text-sm list-disc ml-8">
          <li>
            Communicating regularly with customers to maintain a presence in the
            market
          </li>
          <li>
            Daily PO approvals, checks carried out to ensure accuracy and
            maximisation of profit
          </li>
          <li>
            Using Quickbooks system to place orders daily within a vast network
            of suppliers
          </li>
        </ul>
      ),
    },
  ]

  export default WorkExpArr