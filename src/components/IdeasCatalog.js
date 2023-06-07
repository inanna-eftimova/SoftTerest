const IdeasCatalog = () => {
    return (
        <div id="dashboard-holder">
        <div className="card overflow-hidden current-card details" >
          <div className="card-body">
            <p className="card-text">Dinner Recipe</p>
          </div>
          <img className="card-image" src="/images/dinner.jpg" alt="Card image cap" />
          <a className="btn" href="">Details</a>
        </div>
        <div className="card overflow-hidden current-card details" >
          <div className="card-body">
            <p className="card-text">4 easy DIY ideas to try!</p>
          </div>
          <img className="card-image" src="/images/brightideacropped.jpg" alt="Card image cap" />
          <a className="btn" href="">Details</a>
        </div>
        <div className="card overflow-hidden current-card details" >
          <div className="card-body">
            <p className="card-text">Best Pilates Workouts to Do at Home</p>
          </div>
          <img className="card-image" src="/images/best-pilates-youtube-workouts-2__medium_4x3.jpg" alt="Card image cap" />
          <a className="btn" href="">Details</a>
        </div>
        <h1>No ideas yet! Be the first one :)</h1>
      </div>
    );
}

export default IdeasCatalog;