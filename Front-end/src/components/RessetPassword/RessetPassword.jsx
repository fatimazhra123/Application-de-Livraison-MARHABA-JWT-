
import './RessetPassword.css'

function RessetPassword() {
   
    return (
        <div className='main-login'>
                <div className="login-contain">
                 <div className="left-side">
                 
                 <div className="card">
        <h2>Resset Password?</h2>
        <p>You can reset your Password here</p>
        <input type="text" className="passInput" placeholder="new Password"/>
        <button class="usa-button" type="submit" value="Send My Password" >Resset Password</button>
    </div>

                 </div>
                  

                </div>
        </div>
    )
}

export default RessetPassword;
