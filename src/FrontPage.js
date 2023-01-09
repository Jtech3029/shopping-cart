import { useNavigate } from "react-router-dom";
export default function FrontPage() {

  const navigate = useNavigate();

  return(
    <div>
    <button onClick={() => navigate("/shopping-page")}>asd</button>
    </div>
  )
}