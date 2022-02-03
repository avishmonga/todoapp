import React, { useState } from 'react';
import styled from 'styled-components'
import axios from 'axios'
function TodoInput({getData}) {
    const [text,settext] = useState("")
    const [texttwo,settexttwo] = useState("")
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
display:flex;
justify-content:center;
input{
    width:38%;
    margin-left:5px;
    margin-right:5px;
    height:30px;
    background-color:#e3e0cc;
    border-radius:10px;
    &:focus{
        outline: 2px solid orange; 
    }
}
.addBtn{
    color:rgb(255, 255, 255);
    background-color:#f49e3f;
    border-radius:10px;
    width:80px;
}
`
