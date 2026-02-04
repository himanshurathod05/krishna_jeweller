import styles from './Card.module.css'
import bracelet from '../assets/heartBracelet.webp'
import product_1 from '../assets/product_1.webp'
import { FaStar } from "react-icons/fa";
import { useState } from 'react'
const Card = () =>{
const [isHovered, setIsHovered] = useState(false);

  // Event handlers
  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false)

  return(
    <>
      <div className={styles.card}>
        <div  onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave} className={styles.imageContainer}>
          <img src={isHovered ? product_1 : bracelet} alt="" className={styles.cardImage} />
        </div>  
        <p className={styles.productName}>Hearts All Over Bracelet</p>
        <p className={styles.price}><span className={styles.newPrice}>₹ 2,229.00</span> <span className={styles.oldPrice}>₹ 3,184.00</span> <span className={styles.discount}>(30%)</span></p>
        <p className={styles.reviews}><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /> <span className={styles.rating}>(1,878)</span></p>
        <button className={styles.button}>Add to Cart</button>
      </div>
    </>
  )
}
export default Card