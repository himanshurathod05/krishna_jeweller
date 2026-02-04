import styles from './HeroSection.module.css'
import heroimage from '../assets/web_copy.webp'
const HeroSection = () =>{
  return (
    <>
      <div className={styles.herosectionImage}>
        <img src={heroimage} alt="" className={styles.heroImage} />
      </div>
    </>
  )
}
export default HeroSection