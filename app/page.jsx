import Image from 'next/image'
import styles from './page.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1>Home Page</h1>
      </main>
      <footer className={styles.footer}>
        <p>Footer</p>
      </footer>
    </div>
  )
}
