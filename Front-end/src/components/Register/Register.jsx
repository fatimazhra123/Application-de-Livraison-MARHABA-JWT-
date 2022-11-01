import {Link} from 'react-router-dom';
import './Register.css'

function Register() {
 const style1={
    background: " #dfdddd"
 }
const style={
    marginTop:"10px",
    fontSize:"12px",
  background: " #dfdddd"
}
    return (
        <div className='main-Register' style={style1}>
            <div className="right-side">
            <div className="body-right">
                        <div className="container">
                        <h1>Create Account!</h1>
                        <form>
                            <div className="input-group">
                            <h5> First Name</h5>
                              <input type="text" name="Fname" />
                            </div>
                            <div className="input-group">
                                <h5> Last Name</h5>
                                <input type="text" name="lname" />
                            </div>
                            <div className="input-group">
                                <h5> Email</h5>
                                <input type="Email" name="email" />
                            </div>
                            <div className="input-group">
                                <h5> Password</h5>
                                <input type="password"  />
                            </div>
                            <div className="input-group">
                                <h5> Confirm Password</h5>
                                <input type="password"  />
                            </div>
                                <input type="submit" id='sbtn' value="Submit" />
                                <div className="footer" style={style}>
                             <h4>Allready have an account?<Link className='link' to='/Login'>Login Now</Link></h4>
                         </div>
                            </form>
                        </div>

            </div>
           
            </div>
        </div>
    )
}

export default Register;
