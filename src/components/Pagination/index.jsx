import React from "react";
import PropTypes from "prop-types";

function Pagination(props) {
  const { numberOfPages, currentPage, next, prev, setPage } = props;
  const currentPosition = Math.ceil(numberOfPages / 2);
  const leftBorderPageButton = 1 + (currentPage - currentPosition);
  const rightBorderPageButton = numberOfPages + (currentPage - currentPosition);

  const createList = (firstIndex, lastIndex) => {
    let list = [];
    for (let page = firstIndex; page <= lastIndex; ++page) {
      list.push(
        <li style={{ display: "inline" }}>
          <button onClick={() => setPage(page)}>{page}</button>
        </li>
      );
    }
    return <ul>{list}</ul>;
  };

  let pagesList = null;
  if (currentPage >= 1 && currentPage < numberOfPages) {
    pagesList = createList(1, numberOfPages);
  } else {
    pagesList = (
      <>
        {leftBorderPageButton > 2 && (
          <>
            <button onClick={() => setPage(1)}>1</button>
            <span>...</span>
          </>
        )}
        {createList(leftBorderPageButton, rightBorderPageButton)}
      </>
    );
  }
  return (
    <div
      style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
    >
      {currentPage > 1 && <button onClick={prev}>prev</button>}
      {pagesList}
      <span>...</span>
      <button onClick={next}>next</button>
    </div>
  );
}

Pagination.propTypes = {
  prop: PropTypes,
};
export default Pagination;
