/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const LinkButton = ({ className, text, link, onClick }) => {
  return (
    <>
      <Link to={link} className={`${className}`} onClick={onClick}>
        {text}
      </Link>
      {/*class="text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-md px-5 py-2.5 text-center me-2 mb-2"*/}
    </>
  );
};

export default LinkButton;
