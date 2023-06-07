const IdeasDetails = () => {
    return(
        <div className="container home some">
        <img className="det-img" src="/images/dinner.jpg" />
        <div className="desc">
          <h2 className="display-5">Dinner Recipe</h2>
          <p className="infoType">Description:</p>
          <p className="idea-description">There are few things as comforting as heaping bowl of pasta at the end of a long
            day. With so many easy pasta recipes out there, there's something for every palate to love. That's why
            pasta
            makes such a quick, easy dinner for your family—it's likely to satisfy everyone's cravings, due to its
            versatility.</p>
        </div>
        <div className="text-center">
          <a className="btn detb" href="">Delete</a>
        </div>
      </div>
    );
   }
   
   export default IdeasDetails;