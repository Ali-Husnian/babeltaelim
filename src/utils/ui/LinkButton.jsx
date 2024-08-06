/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const LinkButton = ({ className, text, link, onClick }) => {
  return (
    <>
      <Link to={link} className={`${className}`} onClick={onClick}>
        {text}
      </Link>
    </>
  );
};

export default LinkButton;
