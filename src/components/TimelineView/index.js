import {Chrono} from 'react-chrono'
import CourseTimelineCard from '../CourseTimelineCard'
import ProjectTimelineCard from '../ProjectTimelineCard'
import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div className="app-container">
      <h1 className="ccbp-text">MY JOURNEY OF CCBP 4.0</h1>
      <div className="chrono-container">
        <Chrono mode="VERTICAL_ALTERNATING" items={timelineItemsList}>
          {timelineItemsList.map(eachObject => {
            if (eachObject.categoryId === 'COURSE') {
              return (
                <CourseTimelineCard
                  key={eachObject.id}
                  cardDetails={eachObject}
                />
              )
            }
            return (
              <ProjectTimelineCard
                key={eachObject.id}
                cardDetails={eachObject}
              />
            )
          })}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
