import React, { useState } from 'react'

import data from './data'
const App = () => {
  const[count,setCount]=useState(0);
  const [text,setText] = useState([]);
  const submitHandler = (e) =>{
    e.preventDefault();
    let number = parseInt(count);
    if(count<=0){
      number =1;
    }if (count >10){
      number = 10;
    }
    setText(data.slice(0,number));
  }
  return (
    <section className="section-center">
      <h3>Get a better random content</h3>
      <form className='lorem-form' onSubmit={submitHandler}>
        <label htmlFor="count">Paragraphs: </label>
        <input type="number"
        name='count'
        id='count'
        value={count}
        onChange ={(e)=>setCount(e.target.value)}
        />
        <button className="btn">Generate</button>
      </form>
      <article>
        {text.map((item,index)=>{
          return <p key={index}>{item}</p>
        })}
      </article>
    </section>
  )
}

export default App