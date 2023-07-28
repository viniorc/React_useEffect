export const Card = (props) => {
    return(
        <div className="col">
            <div className="card">
                <img src={props.image} className="card-img-top" alt="..."  />
                <div className="card-body"></div>
                <h5 className="card-title">{props.title}</h5>
                <p className="card-text">{props.text}</p>
            </div>
        </div>
    )
}