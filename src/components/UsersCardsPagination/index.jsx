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

  prev = () => {
    const { currentPage } = this.state;
    if (currentPage > 1) {
      this.setState({
        currentPage: currentPage - 1,
      });
    }
  };

  next = () => {
    const { currentPage } = this.state;
    this.setState({
      currentPage: currentPage + 1,
    });
  };

  setPage = (page) => {
    this.setState({
      currentPage: page,
    });
  };

  render() {
    const { currentPage } = this.state;
    return (
      <>
        <h1>{currentPage}</h1>
        <Pagination
          numberOfPages={5}
          currentPage={currentPage}
          next={this.next}
          prev={this.prev}
          setPage={this.setPage}
        />
        <UsersLoader currentPage={currentPage} />
      </>
    );
  }
}

// UsersCardsPagination.propTypes = {
//         prop: PropTypes
//     }
export default UsersCardsPagination;
