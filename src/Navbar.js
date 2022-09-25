import logo from "./images/logo.png"
import Adobe_Photoshop from "./images/Adobe_Photoshop.png"
import Adobe_Illustrator from "./images/Adobe_Illustrator.png"
import Adobe_After_Effects from "./images/Adobe_After_Effects.png"

const Navbar = () => {
    return (  
        <div className="sidebar">
                <img className='sidebar_logo' src={logo} width="40px"/>
                <div className="nav-list">
                    <ul>
                        <li><a href="#"><i className="material-icons">home</i><p><b>Home</b></p></a></li>
                        <li><a href="#" ><i className="material-symbols-outlined">add_box</i><p>Create</p></a></li>
                        <li><a href="#"><i className="material-symbols-outlined">mail</i><p>Message</p></a></li>
                        <li><a href="#"><img src={Adobe_Photoshop} width="24px"/><p>Photoshop</p></a></li>
                        <li><a href="#"><img src={Adobe_Illustrator} width="24px"/><p>IIIustrator</p></a></li>
                        <li><a href="#"><img src={Adobe_After_Effects} width="24px"/><p>Aftereffect</p></a></li>
                    </ul>
                </div>
        
    </div>

    );
}
 
export default Navbar;