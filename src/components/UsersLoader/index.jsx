import React, { Component } from "react";
import { getUsers } from "./../../api";
import Pagination from "../Pagination";

class UsersLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFetching: true,
      users: [],
      error: null,
      currentPage: 1,
    };
  }

  loadUsers = () => {
    const { currentPage } = this.state;
    getUsers({
      page: currentPage,
    })
      .then((data) => {
        this.setState({
          users: data.results,
          isFetching: false,
        });
      })
      .catch((error) => {
        this.setState({
          error,
          isFetching: false,
        });
      });
  };

  componentDidMount() {
    this.loadUsers();
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.currentPage !== this.state.currentPage) {
      this.loadUsers();
    }
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
    const { users, error, isFetching, currentPage } = this.state;

    if (error) {
      return <div>Error</div>;
    }

    if (isFetching) {
      return <div>Loading...</div>;
    }

    return (
      <>
        <h1>{currentPage}</h1>
        <Pagination
          numberOfPages={8}
          currentPage={currentPage}
          next={this.next}
          prev={this.prev}
          setPage={this.setPage}
        />
        <ul>
          <li>
            <h2>USERS LIST:</h2>
          </li>
          {users.map((u) => (
            <li
              key={`${u.email}`}
              style={{
                background: "yellow",
                border: "2px solid orange",
                maxWidth: "350px",
                height: "300px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <br />
              <div>
                <img src={u.picture.large} alt="" />
              </div>
              <p>
                {u.name.title} {u.name.first} {u.name.last}
              </p>
              <a href={u.email}>{u.email}</a>
              <br />
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default UsersLoader;
