import { FaAngleUp } from 'react-icons/fa'
import React, { useEffect, useState } from 'react'

import './index.css'

export const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false)
  useEffect(() => {
    window.addEventListener('scroll', () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true)
      } else {
        setShowTopBtn(false)
      }
    })
  }, [])
  const GoToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }
  return (
    <div className='top-to-btm'>
      {' '}
      {showTopBtn && <FaAngleUp className='icon-position icon-style' onClick={GoToTop} />}{' '}
    </div>
  )
}
