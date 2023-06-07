const AddIdea = () => {
    return(
        <div className="container home wrapper  my-md-5 pl-md-5">
        <div className=" d-md-flex flex-mb-equal ">
          <div className="col-md-6">
            <img className="responsive-ideas create" src="/images/creativity_painted_face.jpg" alt="" />
          </div>
          <form className="form-idea col-md-5" action="#/create" method="post">
            <div className="text-center mb-4">
              <h1 className="h3 mb-3 font-weight-normal">Share Your Idea</h1>
            </div>
            <div className="form-label-group">
              <label htmlFor="ideaTitle">Title</label>
              <input type="text" id="ideaTitle" name="title" className="form-control" placeholder="What is your idea?"
                required="" autoFocus="" />
            </div>
            <div className="form-label-group">
              <label htmlFor="ideaDescription">Description</label>
              <textarea type="text" name="description" className="form-control" placeholder="Description"
                required=""></textarea>
            </div>
            <div className="form-label-group">
              <label htmlFor="inputURL">Add Image</label>
              <input type="text" id="inputURL" name="imageURL" className="form-control" placeholder="Image URL"
                required="" />

            </div>
            <button className="btn btn-lg btn-dark btn-block" type="submit">Create</button>

            <p className="mt-5 mb-3 text-muted text-center">© SoftTerest - 2021.</p>
          </form>
        </div>
      </div>
    );
   }
   
   export default AddIdea;