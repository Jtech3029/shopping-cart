import { useNavigate } from "react-router-dom";
import NavigationBar from "./NavigationBar";
import "../styles/frontPage.css";

export default function FrontPage(props) {

  const navigate = useNavigate();

  return(
    <div>
      <NavigationBar itemAmount={props.itemAmount}/>
      <button onClick={() => navigate("/shopping-page")}>SHOP NOW</button>
    </div>
  )
}