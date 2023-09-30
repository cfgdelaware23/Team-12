import './Card.css'

function Card({ name,time }) {
    return (
    <div className = "card">
            <h1>{name}</h1>
            <h3>Description: </h3>
            <h4>Time: {time} </h4>
        </div>
    )
  }
  
  export default Card