const GetStarted = () => {
    return(
        <div className="container home wrapper  my-md-5 pl-md-5">
        <div className="d-md-flex flex-md-equal ">
          <div className="col-md-5">
            <img className="responsive" src="/images/01.svg" />
          </div>
          <div className="home-text col-md-7">
            <h2 className="featurette-heading">Do you wonder if your idea is good?</h2>
            <p className="lead">Join our family =)</p>
            <p className="lead">Post your ideas!</p>
            <p className="lead">Find what other people think!</p>
            <p className="lead">Comment on other people's ideas.</p>
          </div>
        </div>
        <div className="bottom text-center">
          <a className="btn btn-secondary btn-lg " href="">Get Started</a>
        </div>
      </div>
    );
   }
   
   export default GetStarted;