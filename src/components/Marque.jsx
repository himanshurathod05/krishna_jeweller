import styles from './Marque.module.css'
const Marque = () =>{
  return(
    <div className={styles.marqueWrapper}>
      <div className={styles.marquee}>
        <span>BUY 2 at 1898</span>
      </div>
    </div>
  )
}
export default Marque