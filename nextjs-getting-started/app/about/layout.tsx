import React from "react";
import styles from './styles.module.css'

export default function layout({ children }: { children: React.ReactNode }) {
  // console.log(styles);
  
  return (
    <>
      <nav>About navbar</nav>
      <main className={styles.main}>{children}</main>
    </>
  );
}
