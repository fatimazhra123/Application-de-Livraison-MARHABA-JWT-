
import './Erreurs.css'
import logo from './404 ErrorPage.svg';

function Erreurs() { 
       const style={
        maxWidth:'55%',
        height:'auto'
       }
    return (
        <div>
                          <div className="img-class">
                              <img style={style}   src={logo} id="img-id" alt="" />
                          </div> 
        </div>
    )
}

export default Erreurs;
