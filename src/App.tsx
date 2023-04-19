//@ts-nocheck
import Modal from './components/Modal'
import React, { useState } from 'react'
import styles from './App.module.css'

function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="App">
      <h1>Essai modal</h1>
      <main>
        <button className={styles.primaryBtn} onClick={() => setIsOpen(true)}>
          Open Modal
        </button>
        {isOpen && <Modal setIsOpen={setIsOpen} />}
      </main>
    </div>
  )
}

export default App
