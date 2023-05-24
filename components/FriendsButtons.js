import React from 'react';
import styles from '../styles/FriendsButtons.module.css';

export default function FriendsButtons() {
  return (
    <>
      <div className={styles.container}>
        <button
          className={styles.buttons}
          onClick={() => {
            addFriend('Yohan');
          }}
        >
          Yohan
        </button>
        <button
          className={styles.buttons}
          onClick={() => {
            addFriend('Anne-So');
          }}
        >
          Anne-So
        </button>
        <button
          className={styles.buttons}
          onClick={() => {
            addFriend('José');
          }}
        >
          José
        </button>
      </div>
    </>
  );
}
