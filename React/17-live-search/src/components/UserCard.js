import styles from "./UserCard.module.css";

function UserCard({ name, email }) {
  return (
    <div className={styles.card}>
      <h2 className={styles.name}>{name}</h2>
      <p className={styles.email}>{email}</p>
    </div>
  );
}

export default UserCard;
