import logo from '../assets/logo.png'
import styles from './Header.module.css'
import { IoSearchSharp } from "react-icons/io5";
import { FiUser, FiHeart, FiShoppingBag } from "react-icons/fi";
import { useState } from 'react';
import LoginForm from './LoginForm';
import SignUp from './SignUp';

const Header = () => {

  const [showAuth, setShowAuth] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <img src={logo} alt="logo" className={styles.image} />
        </div>

        <div className={styles.input}>
          <input type="text" placeholder="Search for Necklace.." className={styles.inputText} />
          <span><IoSearchSharp className={styles.searchIcon} /></span>
        </div>

        <div className={styles.interaction}>
          {/* USER ICON */}
          <FiUser
            className={styles.user}
            onClick={() => {
              setShowAuth(true);
              setIsLogin(true);
            }}
          />

          <FiHeart className={styles.heart} />
          <FiShoppingBag className={styles.shoppingBag} />
        </div>
      </div>

      {/* AUTH MODAL */}
      {showAuth && (
        <div className={styles.overlay}>
          <div className={styles.modal}>
            <button className={styles.close} onClick={() => setShowAuth(false)}>✕</button>
            

            {isLogin ? (
              <LoginForm switchToSignup={() => setIsLogin(false)} />
            ) : (
              <SignUp switchToLogin={() => setIsLogin(true)} onClose={() => setShowAuth(false)} />
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
