import React, { useState } from 'react';
import styled from 'styled-components'
import axios from 'axios'
function TodoInput({getData}) {
    const [text,settext] = useState("")
    const [texttwo,settexttwo] = useState("")
    const [word,setword] = useState("")
    function sendData(text){
        const data = { status: false, title: text,body:texttwo };
        console.log(data)
        axios.post("http://localhost:3000/users", data)
        getData()
    }
  return (
  <Wrap>
      <input className='inputTitle' onChange={(e)=>{
          settext(e.target.value)
      }} type='text'/> 
      <input className='inputBody' placeholder='Add Task...' onChange={(e)=>{
          settexttwo(e.target.value)
      }} type='text'/> 
      <button className='addBtn' onClick={()=>{
          sendData(text)
      }}>Add</button>
  </Wrap>
  )
}

export default TodoInput;
const Wrap = styled.div`
.addBtn{
    color:rgb(255, 255, 255);
}
`
