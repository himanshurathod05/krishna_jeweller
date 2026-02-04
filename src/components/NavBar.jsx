import styles from './NavBar.module.css'
const NavBar = () =>{
  return(
    <>
      <div className={styles.navbar}>
        <span>New Arrivals</span>
        <span>Best Seller</span>
        <span>Fine Silver</span>
        <span>9KT Fine Gold</span>
        <span>Demi-fine Jwellery</span>
        <span>Gifting</span>
        <span>About Us</span>
      </div>
    </>
  )
}
export default NavBar