import React, { useEffect, useState, useRef } from 'react'

import './app.css'

function App() {
  const [posTop, setPosTop] = useState(100)
  const [start, setStart] = useState(false)
  const [btntext, setButtonText] = useState('START')
  const btnref = useRef()

  const btnClick = () => {
    console.log('am clickat')
  }
  const resetbtn = () => {
    !start ? setButtonText('STOP') : setButtonText('START')
    setStart(!start)
  }

  useEffect(() => {
    const btn = btnref.current
    const clicare = () => {
      if (start) {
        btn.click()
        setPosTop((posTop + 5) % 100)
      }
    }
    let id = setInterval(clicare, 500)
    return () => clearInterval(id)
  }, [posTop, start])

  return (
    <>
      <div className='container'>
        <p className='pr'>
          <button
            className='btn'
            ref={btnref}
            style={{ top: `${posTop}px` }}
            onClick={btnClick}
          >
            Moving btn
          </button>
          <button onClick={resetbtn} className='btnpornire'>
            {btntext}
          </button>
        </p>
      </div>
    </>
  )
}

export default App
