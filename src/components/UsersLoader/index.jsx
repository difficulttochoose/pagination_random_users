import React, { Component } from "react";
import { getUsers } from "./../../api";
import UserCard from "../UserCard";
import styles from "./UsersLoader.module.scss";

class UsersLoader extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isFetching: true,
      users: [],
      error: null,
    };
  }

  loadUsers = () => {
    const { currentPage } = this.props;
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
    const { currentPage } = this.props;
    if (prevProps.currentPage !== currentPage) {
      this.loadUsers();
    }
  }

  render() {
    const { users, error, isFetching } = this.state;
    if (error) {
      return <div>Error</div>;
    }

    if (isFetching) {
      return <div>Loading...</div>;
    }

    return (
      <ul className={styles.usersList}>
        {users.map((u) => (
          <UserCard user={u} />
        ))}
      </ul>
    );
  }
}

export default UsersLoader;
