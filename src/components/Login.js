const Login = () => {
    return (
        <div className="container home wrapper  my-md-5 pl-md-5">
        <div className="row-form d-md-flex flex-mb-equal ">
          <div className="col-md-4">
            <img className="responsive" src="/images/idea.png" alt="" />
          </div>
          <form className="form-user col-md-7" action="" method="">
            <div className="text-center mb-4">
              <h1 className="h3 mb-3 font-weight-normal">Login</h1>
            </div>
            <div className="form-label-group">
              <label htmlFor="inputEmail">Email</label>
              <input type="text" id="inputEmail" name="email" className="form-control" placeholder="Email" required=""
                autoFocus="" />
            </div>
            <div className="form-label-group">
              <label htmlFor="inputPassword">Password</label>
              <input type="password" id="inputPassword" name="password" className="form-control"
                placeholder="Password" required="" />
            </div>
            <div className="text-center mb-4 text-center">
              <button className="btn btn-lg btn-dark btn-block" type="submit">Sign In</button>
              <p className="alreadyUser"> Don't have account? Then just
                <a href="">Sign-Up</a>!
              </p>
            </div>
            <p className="mt-5 mb-3 text-muted text-center">© SoftTerest - 2019.</p>
          </form>
        </div>
      </div>
    );
}

export default Login;