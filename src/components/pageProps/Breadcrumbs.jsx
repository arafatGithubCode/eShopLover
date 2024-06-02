import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";
import { useLocation } from "react-router-dom";

const Breadcrumbs = ({ title, prevLocation }) => {
  const location = useLocation();
  const [locationPath, setLocationPath] = useState("");

  useEffect(() => {
    setLocationPath(location.pathname.split("/")[1]);
  }, [location]);

  return (
    <div className="py-5 w-full space-y-3">
      <h1 className="text-5xl font-titleFont font-bold text-primeColor">
        {title}
      </h1>
      <p className="flex items-center capitalize text-lightText text-sm font-normal">
        <span>{prevLocation === "" ? "Home" : prevLocation}</span>
        <span className="px-1 text-lg">
          <HiOutlineChevronRight />
        </span>
        <span className="capitalize font-semibold text-primeColor">
          {locationPath}
        </span>
      </p>
    </div>
  );
};

Breadcrumbs.propTypes = {
  title: PropTypes.string,
  prevLocation: PropTypes.string,
};

export default Breadcrumbs;
