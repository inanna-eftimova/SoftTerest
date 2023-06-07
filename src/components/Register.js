const Register = () => {
    return (
        <div className="container home wrapper  my-md-5 pl-md-5">
            <div className="row-form d-md-flex flex-mb-equal ">
                <div className="col-md-4">
                    <img className="responsive" src="/images/idea.png" alt="" />
                </div>
                <form className="form-user col-md-7" action="" method="">
                    <div className="text-center mb-4">
                        <h1 className="h3 mb-3 font-weight-normal">Register</h1>
                    </div>
                    <div className="form-label-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" id="email" name="email" className="form-control" placeholder="Email" required=""
                            autoFocus="" />
                    </div>
                    <div className="form-label-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" name="password" className="form-control"
                            placeholder="Password" required="" />
                    </div>
                    <div className="form-label-group">
                        <label htmlFor="inputRepeatPassword">Repeat Password</label>
                        <input type="password" id="inputRepeatPassword" name="repeatPassword" className="form-control"
                            placeholder="Repeat Password" required="" />
                    </div>
                    <button className="btn btn-lg btn-dark btn-block" type="submit">Sign Up</button>
                    <div className="text-center mb-4">
                        <p className="alreadyUser"> Don't have account? Then just
                            <a href="">Sign-In</a>!
                        </p>
                    </div>
                    <p className="mt-5 mb-3 text-muted text-center">© SoftTerest - 2019.</p>
                </form>
            </div>
        </div>
    );
}

export default Register;