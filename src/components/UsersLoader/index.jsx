import React, { Component } from "react";
import PropTypes from "prop-types";
import { getUsers } from "./../../api";
import UserCard from "../UserCard";
import styles from "./UsersLoader.module.scss";
import spinnerStyle from "../../spinner.module.css";

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
      // return <div>Loading...</div>;
      return <div className={spinnerStyle.loader}>Loading...</div>;
    }

    return (
      <ul className={styles.usersList}>
        {users.map((u) => (
          <UserCard key={u.email} user={u} />
        ))}
      </ul>
    );
  }
}

UsersLoader.propTypes = {
  currentPage: PropTypes.number.isRequired,
};

UsersLoader.defaultProps = {
  currentPage: 1,
};

export default UsersLoader;
