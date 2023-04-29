import { useState } from 'react';
import Card from './Card';
import './Content.css';
import dividerDesktop from '../../public/assets/pattern-divider-desktop.svg'
import dividerMobile from '../../public/assets/pattern-divider-mobile.svg'
import squareIcon from '../../public/assets/icon-dice.svg';


const Content = () => {
  const [counsel, setCounsel] = useState("");
  const [slip, setSlipe] = useState("");

   const getAdvice = () =>{
    fetch('https://api.adviceslip.com/advice')
    .then(response => response.json())
    .then(data => {
      setCounsel(data.slip.advice)
      setSlipe(data.slip.id)
    })
   }


  
  return <Card>
    <h1>ADVICE #{slip}</h1>
    {counsel ? (
      <p className='advice'>"{counsel}"</p>
    ) : (
      <p></p>
    )}
    <picture>
     <source media="(min-width: 600px)" srcSet={dividerDesktop} />
    <img src={dividerMobile} alt="divider"  className='divider'/>
    </picture>
    <div id="square">
      <img src={squareIcon} alt="square button"  className='square'  onClick={getAdvice}/>
    </div>
  </Card>
}

export default Content