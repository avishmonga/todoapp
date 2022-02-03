import React from 'react';
import styled from 'styled-components';
import { MdOutlineDone,MdDelete } from "react-icons/md";
import { FaUndo } from "react-icons/fa";
import axios from 'axios';
function Todoout(props) {
  console.log("props",props)
  return <Wrap>
    <div className='todoItem'>{props.title}</div>
      {props.status?<FaUndo onClick={()=>{
        axios.patch(`http://localhost:3000/users/${props.id}`, {status:false})
        props.getData()
      }}/>:<MdOutlineDone onClick={()=>{
        axios.patch(`http://localhost:3000/users/${props.id}`, {status:true})
        props.getData()
      }} />}
      <MdDelete onClick={()=>{
        axios.delete(`http://localhost:3000/users/${props.id}`)
        props.getData()
      }}/>

  </Wrap>
}
const Wrap = styled.div`

`
export default Todoout;
