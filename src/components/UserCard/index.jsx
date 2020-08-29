import React from "react";
import PropTypes from "prop-types";
import styles from "./UserCard.module.scss";

function UserCard(props) {
  const { user } = props;

  return (
    <li key={`${user.email}`} className={styles.userListItem}>
      <br />
      <div className={styles.imageWrapper}>
        <img src={user.picture.large} alt={user.name} title={user.name} />
      </div>
      <p>
        {user.name.title} {user.name.first} {user.name.last}
      </p>
      <a href={user.email} className={styles.link}>
        {user.email}
      </a>
      <br />
    </li>
  );
}

UserCard.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserCard;
