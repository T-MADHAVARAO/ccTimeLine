// Write your code here
// Write your code here
import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimeline = props => {
  const {data} = props

  return (
    <div>
      <img src={data.imageUrl} alt="project-img" className="project-img" />
      <div className="time-title-cont">
        <h1>{data.projectTitle}</h1>
        <div className="time-cont">
          <AiFillCalendar />

          <p>{data.duration}</p>
        </div>
      </div>
      <p>{data.description}</p>
      <a href={data.projectUrl}>Visit</a>
    </div>
  )
}

export default ProjectTimeline
