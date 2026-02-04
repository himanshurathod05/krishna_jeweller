import styles from './LoginForm.module.css'
import image from '../assets/product_1.webp'
import SignUp from './SignUp.jsx'
const LoginForm = ({switchToSignup}) => {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.imageContainer}>
          <img src={image} alt="" className={styles.image} />
        </div>
        <div className={styles.formContainer}>
          <h2>Login</h2>
          <div className={styles.form}>
            <label htmlFor="email">Email</label> <br />
            <input type="email" id="email" name="email" placeholder='Your email'/>
            <label htmlFor="password">Password</label> <br />
            <input type="password" id="password" name="password" placeholder='Your Password'/>
            <button type="submit">Login</button>
          </div>
          <div className={styles.socialLogin}>
            <button>Google</button>
            <button>Facebook</button>
          </div>
          <p className={styles.noAccount}>
            Don’t have an account?<a onClick={switchToSignup}> Sign up</a>
          </p>
        </div>
      </div>
    </>
  )
}
export default LoginForm 