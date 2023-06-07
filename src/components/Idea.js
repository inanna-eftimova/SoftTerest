const Idea = ({data}) => {
    return (
            <div className="card overflow-hidden current-card details" >
                <div className="card-body">
                    <p className="card-text">{data.title}</p>
                </div>
                <img className="card-image" src={data.img} alt="Card image cap" />
                <a className="btn" href="">Details</a>
            </div>
    );
}

export default Idea;