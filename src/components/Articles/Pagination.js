import React, { useState, useEffect } from "react";
import './itemcard.css';


const Pagination = ({ showPerPage, onPaginationChange, total }) => {
  const [counter, setCounter] = useState(1);

  useEffect(() => {
    const value = showPerPage * counter;
    onPaginationChange(value - showPerPage, value);
  });

  const onButtonClick = (type) => {
    if (type === "prev") {
      if (counter === 1) {
        setCounter(1);
      } else {
        setCounter(counter - 1);
      }
    } else if (type === "next") {
      if (Math.ceil(total / showPerPage) === counter) {
        setCounter(counter);
      } else {
        setCounter(counter + 1);
      }
    }
  };
  return (
    <div className="pagenumber">
      <button className="btn btn-light" onClick={() => onButtonClick("prev")}>
        1
      </button>
      <button className="btn btn-light" onClick={() => onButtonClick("next")}>
        2
      </button>
    </div>
  );
};

export default Pagination;
