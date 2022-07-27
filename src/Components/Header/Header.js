import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <div>
      {/* <h1>Header Components</h1> */}
      <Link to="/">Quiz App</Link>
      <hr/>
    </div>
  )
}

export default Header
