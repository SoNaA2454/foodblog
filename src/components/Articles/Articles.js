import React, { useState } from "react";
import ItemCard from "./Itemcard";
import data from "./data";
import Pagination from "./Pagination";
import './itemcard.css';

const Articles = () => {
  const [showPerPage] = useState(3);

  const [pagination, setPagination] = useState({
    start: 0,
    end: showPerPage,
  });

  const onPaginationChange = (start, end) => {
    setPagination({ start: start, end: end });
  };

  return (
    <>
      <section className="container">
      <header className="header">
        Latest Articles
      </header>
        <div className="page">
          {data.productData
            .slice(pagination.start, pagination.end)
            .map((item, index) => {
              return (
                <ItemCard
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                  key={index}
                />
              );
            })}
        </div>
      </section>
      <Pagination
        showPerPage={showPerPage}
        onPaginationChange={onPaginationChange}
        total =  {data.length}
      />
    </>
  );
};

export default Articles;
