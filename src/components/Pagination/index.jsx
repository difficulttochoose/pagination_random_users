import React from "react";
import PropTypes from "prop-types";
import styles from "./Pagination.module.scss";
import classNames from "classnames";
import Icon from "@mdi/react";
import { mdiDotsHorizontal, mdiChevronRight, mdiChevronLeft } from "@mdi/js";

function Pagination(props) {
  const { numberOfPages, currentPage, next, prev, setPage } = props;
  const currentPosition = Math.ceil(numberOfPages / 2);
  const leftBorderPageButton = 1 + (currentPage - currentPosition);
  const rightBorderPageButton = numberOfPages + (currentPage - currentPosition);

  const createList = (firstIndex, lastIndex, currentPage) => {
    let list = [];
    for (let page = firstIndex; page <= lastIndex; ++page) {
      list.push(
        <li className={styles.listItem}>
          <button
            className={classNames(styles.listItemButton, {
              [styles.currentPage]: page === currentPage,
            })}
            onClick={() => setPage(page)}
          >
            {page}
          </button>
        </li>
      );
    }
    return <ul className={styles.listStyle}>{list}</ul>;
  };

  let pagesList = null;
  if (currentPage >= 1 && currentPage < numberOfPages) {
    pagesList = createList(1, numberOfPages, currentPage);
  } else {
    pagesList = (
      <>
        {leftBorderPageButton > 2 && (
          <>
            <button
              className={styles.listItemButton}
              onClick={() => setPage(1)}
            >
              1
            </button>
            <Icon path={mdiDotsHorizontal} className={styles.ellipsisStyle} />
          </>
        )}
        {createList(leftBorderPageButton, rightBorderPageButton, currentPage)}
      </>
    );
  }
  return (
    <div className={styles.wrapper}>
      <button
        className={classNames(styles.listItemButton, styles.nextPrevButton)}
        disabled={currentPage > 1 ? false : true}
        onClick={prev}
      >
        <Icon path={mdiChevronLeft} />
      </button>
      {pagesList}
      <Icon path={mdiDotsHorizontal} className={styles.ellipsisStyle} />
      <button
        className={classNames(styles.listItemButton, styles.nextPrevButton)}
        onClick={next}
      >
        <Icon path={mdiChevronRight} />
      </button>
    </div>
  );
}

Pagination.propTypes = {
  prop: PropTypes,
};
export default Pagination;
