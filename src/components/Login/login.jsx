import React, { useState, useEffect /*, PropTypes*/ } from "react";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import axios from "axios";
import "../Login/login.css";

const Login = () => {
    const [userData, setUserData] = useState([]);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory();
    let specificUser;
  
    useEffect(() => {
      document.title = "Login - Glamazon";
    }, []);
  
    useEffect(() => {
      fetchAllUsers();
    }, []);
  
    const fetchAllUsers = async (event) => {
      await axios
        .get("http://localhost:3001/api/collections/user")
        .then((response) => {
          setUserData(response.data);
        });
    };
  
    const handleSubmit = (event) => {
      event.preventDefault();
      try {
        specificUser = userData.filter(function (el) {
          return email === el.email;
        });
        localStorage.setItem("specificUser", JSON.stringify(specificUser));
        setUserData(specificUser);
        history.push(ROUTES.PROFILE);
      } catch {
        localStorage.removeItem(userData);
        setUserData(null);
        console.log("HandleSubmit has failed");
      }
    };

return (
    <div className="login container px-4 py-5 mx-auto">
      <div className="card card0"></div>
      <div className="d-flex flex-lg-row flex-column-reverse">
        <div className="card card1">
          <div className="row justify-content-center my-auto">
            <div className="col-md-8 col-10 my-5">
              {/* <div className="row justify-content-center px-3 mb-3"> <img id="logo" src="https://i.imgur.com/PSXxjNY.png"> </div> */}
              <h3 className="mb-5 text-center heading">Glamazon</h3>
              <h6 className="msg-info">Please login to your account</h6>
              <form onSubmit={handleSubmit} method="POST">
                <div className="form-group">
                  {" "}
                  <label className="form-control-label text-muted">
                    Email
                  </label>{" "}
                  <input
                    type="text"
                    id="email"
                    name="email"
                    placeholder="Email"
                    className="form-control"
                    onChange={({ target }) => setEmail(target.value)}
                  />
                  <div className="form-group">
                    {" "}
                    <label className="form-control-label text-muted">
                      Password
                    </label>{" "}
                    <input
                      type="password"
                      id="psw"
                      name="psw"
                      placeholder="Password"
                      className="form-control"
                      onChange={({ target }) => setPassword(target.value)}
                    />
                    <div className="row justify-content-center my-3 px-3">
                      <input
                        className="btn-block btn-color"
                        type="submit"
                        value="Login"
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="bottom text-center mb-5">
              <p href="#" className="sm-text mx-auto mb-3">
                Don't have an account?
                <button className="btn btn-white ml-2">Create new</button>
              </p>
            </div>
          </div>
          <div className="card card2">
            <div className="my-auto mx-md-5 px-md-5 right">
              {/* <h3 className="text-white">Welcome to Glamazon</h3> <small className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</small> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;








//     <div class="container">
//     	<div class="row"></div>
// 			<div class="col-md-6 col-md-offset-3">
// 				<div class="panel panel-login">
// 					<div class="panel-heading">
// 						<div class="row">
// 							<div class="col-xs-6">
// 								<a href="#" class="active" id="login-form-link">Login</a>
// 							</div>
// 							<div class="col-xs-6">
// 								<a href="#" id="register-form-link">Register</a>
// 							</div>
// 						</div>
// 						<hr>
// 					</div>
// 					<div class="panel-body">
// 						<div class="row">
// 							<div class="col-lg-12">
// 								<form id="login-form" action="https://phpoll.com/login/process" method="post" role="form" style="display: block;">
// 									<div class="form-group">
// 										<input type="text" name="username" id="username" tabindex="1" class="form-control" placeholder="Username" value="">
// 									</div>
// 									<div class="form-group">
// 										<input type="password" name="password" id="password" tabindex="2" class="form-control" placeholder="Password">
// 									</div>
// 									<div class="form-group text-center">
// 										<input type="checkbox" tabindex="3" class="" name="remember" id="remember">
// 										<label for="remember"> Remember Me</label>
// 									</div>
// 									<div class="form-group">
// 										<div class="row">
// 											<div class="col-sm-6 col-sm-offset-3">
// 												<input type="submit" name="login-submit" id="login-submit" tabindex="4" class="form-control btn btn-login" value="Log In">
// 											</div>
// 										</div>
// 									</div>
// 									<div class="form-group">
// 										<div class="row">
// 											<div class="col-lg-12">
// 												<div class="text-center">
// 													<a href="https://phpoll.com/recover" tabindex="5" class="forgot-password">Forgot Password?</a>
// 												</div>
// 											</div>
// 										</div>
// 									</div>
// 								</form>
// 								<form id="register-form" action="https://phpoll.com/register/process" method="post" role="form" style="display: none;">
// 									<div class="form-group">
// 										<input type="text" name="username" id="username" tabindex="1" class="form-control" placeholder="Username" value="">
// 									</div>
// 									<div class="form-group">
// 										<input type="email" name="email" id="email" tabindex="1" class="form-control" placeholder="Email Address" value="">
// 									</div>
// 									<div class="form-group">
// 										<input type="password" name="password" id="password" tabindex="2" class="form-control" placeholder="Password">
// 									</div>
// 									<div class="form-group">
// 										<input type="password" name="confirm-password" id="confirm-password" tabindex="2" class="form-control" placeholder="Confirm Password">
// 									</div>
// 									<div class="form-group">
// 										<div class="row">
// 											<div class="col-sm-6 col-sm-offset-3">
// 												<input type="submit" name="register-submit" id="register-submit" tabindex="4" class="form-control btn btn-register" value="Register Now">
// 											</div>
// 										</div>
// 									</div>
// 								</form>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	</div>
// );
// };


