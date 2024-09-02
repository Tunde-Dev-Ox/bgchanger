import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState('red');
  const [text, setText] = useState('white');

  return (
    <div className='main' style={{backgroundColor: color, color: text}}>
      <div className='inner-wrapper'>
        <h1>My Background Color Changer Application</h1>
        <p>
          This is a simple application that changes the background color of the
          page when you click the buttons below. It is built using React. Click the buttons below to change the background color. Have fun! 😊
        </p>
        <div className='button-wrapper'>
          <button onClick={() => {
          setColor('black'); setText('White')}}>Black</button>
          <button onClick={() => setColor('blue')}>
          Blue</button>
          <button onClick={() => setColor('green')}>Green</button>
          <button onClick={() => setColor('red')}>Red</button>
          <button onClick={() => {setColor('white');
          setText('black')}}>White</button>
        </div>
      </div>
    </div>
  )
}

export default App
