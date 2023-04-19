//@ts-nocheck
import React from 'react'
import styles from './Modal.module.css'

const Modal = ({ setIsOpen }) => {
  return (
    <>
      <div className={styles.darkBG} onClick={() => setIsOpen(false)} />
      <div className={styles.centered}>
        <span
          className={styles.close}
          onClick={() => {
            setIsOpen(false)
            //   console.log('bingo')
          }}
        ></span>
        <div className={styles.modalContent}>Employee Created !</div>
      </div>
    </>
  )
}

export default Modal
