import {Link} from 'react-router-dom';
import './Home.css'
// import logo from './head-logo.png';

function Home() {

    const style1={

  background:" #4dd6b6"
    }
const style={
color:"#F9F9F9",

}

    return (
       <div style={style1}>
  {/* Navbar  */}
        <div className="navbar">
            
            <div className="container">
                
                <div className="logo">
                    <h2 className="logo-text">Ultra Profile</h2>
                </div>
                
                <input type="checkbox" id="nav"/>
                <label for="nav"></label>
                <ul className="ul-list">
                    <li className="list-item"><a href={"#"}>Home</a></li>
                    <li className="list-item"><a href={"#"}>Work</a></li>
                    <li className="list-item"><a href={"#" }>About</a></li>
                    <li className="list-item"><a href={"#" }>Contact</a></li>
                    <li className="list-item"><Link to='/Register'>Sing-up</Link></li>
                </ul>
               
                
            </div>
            
        </div>
        
        
        <div className="home ">
            <div className="container">
                <div className="home-information">
                    <h2 className="home-title margin-bottom">Application de Livraison MARHABA</h2>
                    <button type="submit" id="sub_butt"><Link to='/Login' style={style}>Login Now</Link></button>
                </div>
            </div>
        </div>





       </div>
    )
}

export default Home;
