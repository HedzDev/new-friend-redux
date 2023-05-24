import React from 'react';
import styles from '../styles/Home.module.css';
import FriendsButtons from './FriendsButtons';
import FriendsDisplay from './FriendsDisplay';

export default function Home() {
  return (
    <div className={styles.container}>
      <FriendsButtons />
      <FriendsDisplay />
    </div>
  );
}
