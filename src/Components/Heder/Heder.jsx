import logo from "../../images/Logo.svg"
import "./heder.css"
const Heder = () => {
  return (
    <nav className="heder">
      <div>
        <img src={logo} alt="" />
      </div>
      <div>
        <a href="">home</a>
        <a href="">Contact</a>
        <a href="">Product</a>
        <a href="">About</a>
      </div>
    </nav>
  );
};

export default Heder;