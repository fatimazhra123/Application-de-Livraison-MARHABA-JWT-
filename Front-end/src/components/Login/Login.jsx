import './Login.css';
import {Link} from 'react-router-dom';
import logo from './logoPng.png';
import welcomeimg from './welcomeback.svg';

function Login() {
    const style1={
        fontSize:"12px",
        marginTop:"10px"
    }
const style={
    marginTop: "30%",

}
    return (
        <div className='main-login'>
                <div className="login-contain">
                 <div className="left-side">
                         <div className="img-class" >
                              <img src={logo} id="img-id" alt="" />
                          </div>
                 
                        <form >
                        <label htmlFor="emil1">Email</label>
                            <input placeholder="Enter your email..." type="email"/>
                        <label htmlFor="pwd1">Password</label>
                            <input placeholder="Enter password" type="password" />
                            <button type="submit" id="sub_butt">Login</button>
                         </form>

                         <div className="footer">
                             <h4 style={style1}>Don't have an Account ? <Link className='link' to='/Register'>Register Now</Link></h4>
                         </div>

                 </div>
                  <div className="right-side">
                    <div className="welcomeImg">
                        <img style={style}  src={welcomeimg} id='wel-img-id' alt=""  />
                    </div>
                  </div>

                </div>
        </div>
    )
}

export default Login;
