import "./Footer.css";
import design from "../../assets/images/pan.png";

const Footer = () => {
  return (
    <div className="footer-div">
    Coded by
      <a
        href="https://github.com/omer-fsdev"
        target="_blank"
        rel="noopener noreferrer"
         style={{ textDecoration: "none" }}
      >
        <code className="brand">{" <Ömer-FSDev/> "}</code>
        {/*  "code" to use <></> */}
      </a>
      <img
        src={design}
        alt="design"
        style={{ width: "70px", margin: "auto  30px auto 10px" }}
      />
      <span>Copyright {new Date().getFullYear()}</span>
    </div>
  );
};

export default Footer;
