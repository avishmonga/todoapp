import React from 'react';
import styled from 'styled-components';
import { MdOutlineDone,MdDelete } from "react-icons/md";
import { FaUndo } from "react-icons/fa";
import axios from 'axios';
function Todoout(props) {
  console.log("props",props)
  const done  = props.status?"done":"notedone"
  const classes = `todoItem title ${done}`
  const calassestwo = `todoItem  ${done}`
  return <Wrap>
    <Items>
    <div  className={classes}>{props.title}</div>
    <div className={calassestwo}>{props.body}</div>
    </Items>
    <Another>
      {props.status?<FaUndo onClick={()=>{
        axios.patch(`http://localhost:3000/users/${props.id}`, {status:false})
        props.getData()
      }}/>:<MdOutlineDone onClick={()=>{
        axios.patch(`http://localhost:3000/users/${props.id}`, {status:true})
        props.getData()
      }} />}
      <MdDelete className='delete' onClick={()=>{
        axios.delete(`http://localhost:3000/users/${props.id}`)
        props.getData()
      }}/>
      </Another>

  </Wrap>
}
const Wrap = styled.div`
display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 4px auto;
  margin-top:20px;
  color: #fff;
  background-color:#618685;
  font-size:20px;
  color:#f0f0f0;

  padding: 16px;
  border-radius: 5px;
  width: 90%;

`
const Another = styled.div`
font-size:24px;
.delete{
  margin-left:20px;
}

`
const Items = styled.div`
display: flex;
.title{
  color:#f49e3f;
  font-size:22px;
  font-weight:bold;
}
.done{
  text-decoration: line-through;
}
div{
  margin-left:30px;
}

`
export default Todoout;
