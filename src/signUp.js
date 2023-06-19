
import React, { Component } from 'react';
import './login.css'
import axios from 'axios';



export default class login extends Component {


    state = {
        email_id: '',
        password: ''
    }

  
    handle_email = (event) => {

        this.setState({ email_id: event.target.value })
    }

    handle_pass = (event) => {

        this.setState({ password: event.target.value })
    }


    handle_cpass = (event) => {

        
    
        this.setState({ cpassword: event.target.value })
    }


    handle_submit = () => {


        // console.log("jknkjhf")
        var data = {
            email_id: this.state.email_id,
            password: this.state.password,
            

        }

        // console.log(data)

        try {

            console.log("jfgf")
            axios.post("http://localhost:8000/singUp", data, {
                headers: { 'Content-Type': 'multipart/form-data', 'content-Type': 'application/json' },
                onUploadProgress: data => {

                    this.setState({
                        progress: Math.round((100 * data.loaded) / data.total)

                    });
                },

            })
                .then(res => {

                    if (res.data.msg === 'success') {

                        alert("Registration SuccessFull!")
                        document.getElementById("reset_id").reset();

                    }
        

                })
        } catch (error) {

            console.log(error)
            this.setState({
                Load: false,
            });
            console.log("internal server error");
        }//some code



    }
    render() {
        return (
            <div>

                <div className="wrapper fadeInDown">
                    <div id="formContent">
                        {/* Tabs Titles */}
                        {/* Icon */}
                        <h4 style={{ paddingTop: "10px", paddingBottom: "27px" }}>Sign Up</h4>
                        {/* Login Form */}
                        <form id="reset_id">
                            <input style={{ height: "20px" }} type="text" id="login" className="fadeIn second" name="login" placeholder="Email" onChange={this.handle_email} />
                            {/* <input style={{ height: "20px" }} type="password" id="password" className="fadeIn third" name="pass" placeholder="Password" onChange={this.handle_pass} /> */}
                            {/* <input style={{ height: "20px" }} type="text" id="password" className="fadeIn third" name="cpass" placeholder="Confirm Password" onChange={this.handle_cpass} /> */}
                            <input style={{ height: "20px" }} type="password" id="password" className="fadeIn third" name="login" placeholder="Password" onChange={this.handle_pass} />

                            <div><br></br></div>
                            <input style={{ width: "50%", textAlign: "center", cursor: "pointer" }} type="button" onClick={this.handle_submit} className="fadeIn fourth" defaultValue="Sign Up" />
                        </form>

                        <div id="formFooter">
                            <a className="underlineHover" href="/">Login</a>
                        </div>
                        {/* Remind Passowrd */}

                    </div>
                </div>


            </div>
        )
    }
}