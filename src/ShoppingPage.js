import { useNavigate } from "react-router-dom";
export default function ShoppingPage() {

  const navigate = useNavigate();

  return(
    <div>
    <button onClick={() => navigate("../")}>go back</button>
    </div>
  )
}