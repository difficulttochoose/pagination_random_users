import React, { Component } from "react";
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
        <h1 style={{ textAlign: "center" }}>USERS LIST:</h1>
        <UsersLoader currentPage={currentPage} />
        <Pagination
          numberOfPages={7}
          currentPage={currentPage}
          next={this.next}
          prev={this.prev}
          setPage={this.setPage}
        />
      </>
    );
  }
}

export default UsersCardsPagination;
