// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimeline = props => {
  const {data} = props

  return (
    <div className="course-card">
      <div className="time-title-cont">
        <h1>{data.courseTitle}</h1>
        <div className="time-cont">
          <AiFillClockCircle />

          <p>{data.duration}</p>
        </div>
      </div>
      <p>{data.description}</p>
      <ul className="tags">
        {data.tagsList.map(each => (
          <p className="each-tag" key={each.id}>
            {each.name}
          </p>
        ))}
      </ul>
    </div>
  )
}

export default CourseTimeline
