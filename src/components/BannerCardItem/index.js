// Write your code here.
import './index.css'

const Card = props => {
  const {cardDetails} = props
  const {headerText, description, className} = cardDetails

  return (
    <li className={className}>
      <div className="content">
        <h1 className="h1">{headerText}</h1>
        <p className="p1">{description}</p>
        {
          // eslint-disable-next-line
          <button className="button">Show More</button>
        }
      </div>
    </li>
  )
}

export default Card
