import {AiFillClockCircle} from 'react-icons/ai'
import './index.css'

const CourseTimelineCard = props => {
  const {cardDetails} = props
  const {courseTitle, description, duration, tagsList} = cardDetails

  return (
    <>
      <div className="course-card-header">
        <h1 className="title">{courseTitle}</h1>
        <div className="duration-interval-container">
          <AiFillClockCircle height={25} width={25} />
          <p className="duration">{duration}</p>
        </div>
      </div>
      <p className="description">{description}</p>
      <ul className="tags-list">
        {tagsList.map(eachTag => (
          <li className="tags-list-item" key={eachTag.id}>
            <div className="tag-container">
              <span className="tag-name">{eachTag.name}</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}

export default CourseTimelineCard
