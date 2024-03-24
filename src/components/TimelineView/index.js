// Write your code here
import {Chrono} from 'react-chrono'
import CourseTimeline from '../CourseTimelineCard'
import ProjectTimeline from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props
  console.log(timelineItemsList)
  return (
    <div className="chrono-container">
      <h1 className="heading">MY JOURNEY OF CCBP 4.0</h1>
      <Chrono mode="VERTICAL" items={timelineItemsList}>
        {timelineItemsList.map(each => {
          if (each.categoryId === 'COURSE') {
            return <CourseTimeline data={each} key={each.id} />
          }
          return <ProjectTimeline data={each} key={each.id} />
        })}
      </Chrono>
    </div>
  )
}
export default TimelineView
