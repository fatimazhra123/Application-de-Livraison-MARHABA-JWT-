
import './ForgetPassword.css'

function ForgetPassword() {

    const style1={
         fontFamily:"sans-serif",
          fontSize:"50px",
                }
               
    return (
        <div className='main-login'>
                <div className="login-contain">
                 <div className="left-side">
                 
                 <div className="card">
        <p className="lock-icon" style={style1}><i class="fas fa-lock"></i></p>
        <h2>Forgot Password?</h2>
        <p>You can reset your Password here</p>
        <input type="text" className="passInput" placeholder="Email address"/>
        <button class="usa-button" type="submit" value="Send My Password" >Send My Password</button>
        
    </div>

                 </div>
                  

                </div>
        </div>
    )
}

export default ForgetPassword;
