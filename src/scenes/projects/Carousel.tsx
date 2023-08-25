import { SelectedIndex } from "@/shared/types"
import { projectsArr } from "./projectsArr"

const Carousel: React.FC<SelectedIndex> = ({ index }) => {
  return <div className="shadow-lg">{projectsArr[index].image}</div>
}

export default Carousel
