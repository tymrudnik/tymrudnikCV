import { SelectedIndex } from "@/shared/types"
import { projectsArr } from "./projectsArr"
import HText from "@/shared/HText"

const ProjectData: React.FC<SelectedIndex> = ({ index }) => {
  return (
    <div>
      <div className="overflow-hidden ">
        <HText>{projectsArr[index].title}</HText>
        <p className="pt-6">{projectsArr[index].description}</p>
        <h4 className="italic pt-6">Key Skills:</h4>
        {projectsArr[index].keyskills}
      </div>
    </div>
  )
}

export default ProjectData
