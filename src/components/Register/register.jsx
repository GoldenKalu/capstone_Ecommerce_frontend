import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import * as ROUTES from "../../constants/routes";
import axios from "axios";
import "../Register/register.css";

const Register = (props) => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [username, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const history = useHistory("/profile");
    let specificUser;

    useEffect(() => {
        document.title = "Register - Nouveau shop";
    }, []);

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
            "http://localhost:3001/api/collections",
                // headers: { "x-auth-token": jwt },
            loginInfo
        );

        alert(
            "You have successfully registered your account! Please Click 'OK' to continue to login page."
        );
        history.push(ROUTES.LOGIN);
      } catch {
        localStorage.removeItem(specificUser);
        console.log("HandleSubmit has failed");
      }
    };

    return (
        <div class="container">
	        <div class="row" />
                <div class="col-md-6" />
                    <form action="" method="post" id="fileForm" role="form" />
                        <fieldset /><legend class="text-center">Valid information is required to register. <span class="req"><small> required *</small></span></legend>
                        <form onSubmit={handleSubmit}>

            <div class="form-group"> 	 
                <label for="firstname"><span class="req">* </span> First name: </label>
                    <input 
                        class="form-control" 
                        type="text" 
                        name="firstname" 
                        id = "txt" 
                        onkeyup = "Validate(this)" 
                        required onChange={({ target }) => setFirstName(target.value)}
                    /> 
                        <div id="errFirst"></div>    
            </div>

            <div class="form-group">
                <label for="lastname"><span class="req">* </span> Last name: </label> 
                    <input 
                        class="form-control" 
                        type="text" 
                        name="lastname" 
                        id = "txt" 
                        onkeyup = "Validate(this)" 
                        placeholder="hyphen or single quote OK" 
                        required onChange={({ target }) => setLastName(target.value)}
                    />  
                        <div id="errLast"></div>
            </div>

            <div class="form-group">
                <label for="email"><span class="req">* </span> Email Address: </label> 
                    <input 
                        class="form-control" 
                        required type="text" 
                        name="email" 
                        id = "email"  
                        onchange="email_validate(this.value);" 
                        onChange={({ target }) => setEmail(target.value)}
                    />   
                        <div class="status" id="status"></div>
            </div>

            <div class="form-group">
                <label for="username"><span class="req">* </span> User name:  <small>This will be your login user name</small> </label> 
                    <input 
                        class="form-control" 
                        type="text" name="username" 
                        id = "txt" onkeyup = "Validate(this)" 
                        placeholder="minimum 6 letters" 
                        required 
                        onChange={({ target }) => setUserName(target.value)}
                    />  
                        <div id="errLast"></div>
            </div>

            <div class="form-group">
                <label for="password"><span class="req">* </span> Password: </label>
                    <input 
                        required name="password" 
                        type="password" 
                        class="form-control inputpass" 
                        minlength="4" maxlength="16"  
                        id="pass1" 
                        onChange={({ target }) => setPassword(target.value)}
                    />
            </div>

                <label for="password"><span class="req">* </span> Password Confirm: </label>
                    <input 
                        required name="password" 
                        type="password" 
                        class="form-control inputpass" minlength="4" 
                        maxlength="16" 
                        placeholder="Enter again to validate"  
                        id="pass2" onkeyup="checkPass(); return false;" 
                    />
                        <span id="confirmMessage" class="confirmMessage"></span>
            <div />
            </form>

            <div class="form-group" />
                <input type="hidden" value="<?php //echo $date_entered; ?>" name="dateregistered" />
                <input type="hidden" value="0" name="activate" />
                <hr />

                <input type="checkbox" required name="terms" onchange="this.setCustomValidity(validity.valueMissing ? 'Please indicate that you accept the Terms and Conditions' : '');" id="field_terms"> /</input>   <label for="terms">I agree with the <a href="terms.php" title="You may read our terms and conditions by clicking on this link">terms and conditions</a> for Registration.</label><span class="req">* </span>
            <div />

            <div class="form-group" />
                <input class="btn btn-success" type="submit" name="submit_reg" value="Register" />
            <div />
                      <h5>You will receive an email to complete the registration and validation process. </h5>
                      <h5>Be sure to check your spam folders. </h5>
        </div>
      

    );
};


export default Register;