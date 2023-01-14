import { useNavigate } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import "../styles/frontPage.css";

export default function FrontPage(props) {

  const navigate = useNavigate();

  return(
    <div id="front-page">
      <NavigationBar itemAmount={props.itemAmount}/>
      <div id="front-page-button-holder">
      <button id="front-page-button" onClick={() => navigate("/shopping-page")}>SHOP NOW</button>
      </div>
    </div>
  )
}