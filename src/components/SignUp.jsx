import styles from './SignUp.module.css'
import LoginForm from './LoginForm'
const SignUp = ({switchToLogin, onClose}) => {
  return(
    <>
    <div className={styles.formContainer}>
      <button className={styles.closeBtn} onClick={onClose}>
        ✕
      </button>
      <h2>Signup</h2>
      <div className={styles.form}>
        <label htmlFor="name">Name</label>
        <input type="text" id='name' name='name' placeholder='Enter your name'/>
        <label htmlFor="number">Phone Number</label>
        <input type="number" id='number' name='number' placeholder='Enter your number' />
        <label htmlFor="email">Email</label> <br />
        <input type="email" id="email" name="email" placeholder='Your email'/>
        <label htmlFor="password">Password</label> <br />
        <input type="password" id="password" name="password" placeholder='Your Password'/>
        <label htmlFor="confirmPassword">Confirm Password</label> <br />
        <input type="password" id="confirmPassword" name="confirmPassword" placeholder='Confirm your Password'/>
        <button type="submit">Signup</button>
      </div>
      <p className={styles.noAccount}>
                Already have an account?
              <a onClick={switchToLogin}>Login</a>
            </p>
    </div>
    </>
  )
}
export default SignUp