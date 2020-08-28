import React, { Component } from "react";
import PropTypes from "prop-types";
import UsersLoader from "../UsersLoader";
import Pagination from "../Pagination";

class UsersCardsPagination extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFetching: true,
      users: [],
      error: null,
      currentPage: 1,
    };
  }

  render() {
    return (
      <>
        <UsersLoader />
        <Pagination />
      </>
    );
  }
}

// UsersCardsPagination.propTypes = {
//         prop: PropTypes
//     }
export default UsersCardsPagination;
