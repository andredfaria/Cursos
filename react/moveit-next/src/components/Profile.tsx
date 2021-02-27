import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="http://github.com/andredfaria.png" alt="profile picture" />
      <div>
        <strong>André de Faria</strong>
        <p>
          <img src="icons/level.svg" alt="level "/>
          Level 1
        </p>
      </div>
    </div>
  );
}