import "./topbar.scss"
import {Smartphone,Email} from '@material-ui/icons';
//import EmailIcon from '@mui/icons-material/Email';

export default function TopBar({menuOpen, setMenuOpen}) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">Fran33.</a>
          <div className="itemContainer">
            <Smartphone className="icon"/>
            <span>33 29 04 04 73</span>
          </div>
          <div className="itemContainer">
               
            <Email className="icon"/>
            <span>fran33397@gmail.com</span>
          </div>
        </div>
        
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span> 
          </div>
        </div>
        
      </div>
    </div>
  );
}
