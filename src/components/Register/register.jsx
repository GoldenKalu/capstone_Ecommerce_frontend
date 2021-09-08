import React, { useState, useEffect } from "react";
//import { useHistory } from "react-router-dom";
//import * as ROUTES from "../../constants/routes";
import axios from "axios";
import "../Register/register.css";
import { Link } from 'react-router-dom';

// import { useDispatch, useSelector } from 'react-redux'
// import { toast } from 'react-toastify'


// const Register = ({ history, location }) => {
//     const [name, setName] = useState('')
//     const [email, setEmail] = useState('')
//     const [password, setPassword] = useState('')
//     const [passwordConfirm, setPasswordConfirm] = useState('')
  
//     const redirect = location.search ? location.search.split('=')[1] : '/'
  
//     const dispatch = useDispatch()
//     const userLogin = useSelector(state => state.userLogin)
  
//     const { loading, userInfo } = userLogin
  
//     useEffect(() => {
//       window.scrollTo(0, 0)
//       if (userInfo) {
//         history.push(redirect)
//       }
//     }, [userInfo, history, redirect])
  
//     const submitHandler = e => {
//       e.preventDefault()
//       if (password !== passwordConfirm) {
//         toast.error('Passwords do not match')
//       } else if (name && email && password) {
//         dispatch(register(name, email, password))
//       } else {
//         toast.error('Please fill all fields!')
//       }
//     }
  
//     return (
//         <Container>
//           <Top>
//             <i className='fas fa-cogs'></i>
//             <div>
//               <h2>Get Started</h2>
//               <p>Create a new account</p>
//             </div>
//           </Top>
//           {loading && loading ? (
//             <CustomLoader type='Oval' width={20} height={20} />
//           ) : (
//             <Form onSubmit={submitHandler}>
//               <FormControl>
//                 <label htmlFor=''>Name</label>
//                 <input
//                   type='text'
//                   placeholder='Name'
//                   value={name}
//                   onChange={e => setName(e.target.value)}
//                 />
//               </FormControl>
//               <FormControl>
//                 <label htmlFor=''>Email</label>
//                 <input
//                   type='email'
//                   placeholder='Enter Email'
//                   value={email}
//                   onChange={e => setEmail(e.target.value)}
//                 />
//               </FormControl>
//               <FormControl>
//                 <label htmlFor=''>Password</label>
//                 <input
//                   type='password'
//                   placeholder='Password'
//                   value={password}
//                   onChange={e => setPassword(e.target.value)}
//                 />
//               </FormControl>
  
//               <FormControl>
//                 <label htmlFor=''>Confirm Password</label>
//                 <input
//                   type='password'
//                   placeholder='Confirm Password'
//                   value={passwordConfirm}
//                   onChange={e => setPasswordConfirm(e.target.value)}
//                 />
//               </FormControl>
  
//               <Button type='submit'>Signup Now</Button>
//             </Form>
//           )}
  
//           <Bottom>
//             <i className='fas fa-question'></i>
//             Existing user? <Link to='/login'>Login here</Link> instead.
//           </Bottom>
//         </Container>
//     )
//   }
  
//   export default Register;
  

const Register = (props) => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    //const history = useHistory("/profile");
    let specificUser;

   /*  useEffect(() => {
        document.title = "Register - Nouveau shop";
    }, []); */

    const handleSubmit = async (event) => {
        event.preventDefault();

    try {
        let loginInfo = {
            firstName: firstname,
            lastName: lastname,
            username: username,
            email: email,
            password: password,
        };

        await axios.post(
            "http://localhost:3001/api/collections/register",
                // headers: { "x-auth-token": jwt },
            loginInfo
        );

        alert(
            "You have successfully registered your account! Please Click 'OK' to continue to login page."
        );
        //history.push(ROUTES.LOGIN);
      } catch {
        localStorage.removeItem(specificUser);
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
                  <h3 className="mb-5 text-center heading">Noveau shop</h3>
                  <h6 className="msg-info">Please Register to shop</h6>
                  <form onSubmit={handleSubmit} method="POST">
                  <div className="form-group">
                      {" "}
                      <label className="form-control-label text-muted">
                        First Name
                      </label>{" "}
                      <input
                        type="text"
                        id="First Name"
                        name="First Name"
                        placeholder="First Name"
                        className="form-control"
                        onChange={({ target }) => setFirstName(target.value)}
                      />
                      </div>

                      <div className="form-group">
                      {" "}
                      <label className="form-control-label text-muted">
                        Last Name
                      </label>{" "}
                      <input
                        type="text"
                        id="Last Name"
                        name="Last Name"
                        placeholder="Last Name"
                        className="form-control"
                        onChange={({ target }) => setLastName(target.value)}
                      />
                      </div>

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
                          password
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
                            value="Register"
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                  
                </div>
                <div className="bottom text-center mb-5">
                  <Link to='/Login'>
                  <p href="#" className="sm-text mx-auto mb-3">
                    Already have an account?
                    <button className="btn btn-white ml-2">Login</button>
                  </p>
                  </Link>
                  
                  
                </div>
              </div>
              <div className="card card2">
                <div className="my-auto mx-md-5 px-md-5 right">
                  {/* <h3 className="text-white">Welcome to Noveau shop</h3> <small className="text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</small> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    };
    
    export default Register;

//     return (
//         <div class="container">
//             <h1>Hey Golden!</h1>
//             <form>
//                 <input type="text" name="username" />
//                 <input type="text" lname="Last name" />
//             </form>
               
	       
//         </div>
      

//     );
// };


