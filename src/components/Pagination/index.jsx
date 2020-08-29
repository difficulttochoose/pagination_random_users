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
        <li key={page} className={styles.listItem}>
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
    return <ul>{list}</ul>;
  };

  const pagesList =
    currentPage >= 1 && currentPage < numberOfPages ? (
      createList(1, numberOfPages, currentPage)
    ) : (
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
  numberOfPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  next: PropTypes.func,
  prev: PropTypes.func,
  setPage: PropTypes.func.isRequired,
};

Pagination.defaultProps = {
  numberOfPages: 5,
  currentPage: 1,
};

export default Pagination;
