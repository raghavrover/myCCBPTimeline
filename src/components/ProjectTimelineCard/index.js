import {AiFillCalendar} from 'react-icons/ai'
import './index.css'

const ProjectTimelineCard = props => {
  const {cardDetails} = props
  const {
    projectTitle,
    description,
    duration,
    imageUrl,
    projectUrl,
  } = cardDetails

  return (
    <>
      <img src={imageUrl} className="card-image" alt="project" />
      <div className="project-card-content">
        <div className="project-card-header">
          <h1 className="title">{projectTitle}</h1>
          <div className="duration-interval-container">
            <AiFillCalendar height={10} width={10} />
            <p className="duration">{duration}</p>
          </div>
        </div>
        <p className="project-card-description">{description}</p>
        <a
          href={projectUrl}
          target="_blank"
          rel="noreferrer"
          className="anchor-tag"
        >
          Visit
        </a>
      </div>
    </>
  )
}

export default ProjectTimelineCard
