import React, { useEffect } from "react";
import TodoInput from "./TodoInput";
import styled from "styled-components";
import { useState } from "react/cjs/react.development";
import axios from "axios";
import Todoout from "./Todoout";
function Todo() {
  const [todos, settodos] = useState([]);
  const [page,setpage] = useState(1)
  const [count,setcount]= useState(3)
console.log(count)
  const getData = () => {
    // to count data
    axios.get(`http://localhost:3000/users`).then(function (response) {
      // handle success
      setcount(response.data.length)
    });
    // to use data
    axios.get(`http://localhost:3000/users?_page=${page}&_limit=3`).then(function (response) {
      // handle success
      console.log("res",response)
      settodos(response.data);
    });
  };
  useEffect(() => {
    getData();
  }, [page]);

  return (
    <Container>
      <h1 className="title">Todo...</h1>
      <TodoInput getData={getData} />

<div className="container">
      {todos.map((e)=>{

          return <Todoout getData={getData} body={e.body} key = {e.id} id={e.id} status={e.status} title = {e.title}/>
        
      })}
      </div>
      <Wrap>
        <button disabled={page==1} onClick={()=>{
          setpage(page-1)
        }} className="prev">Prev</button>
        <button disabled={page==(Math.floor(count/2))} onClick={()=>{
          setpage(page+1)
        }} className="next">Next</button>
      </Wrap>
       
    </Container>
  );
}

const Container = styled.div`
h1{
 color:white;
}

width:40%;
background-color:#444444;
border-radius:30px;
margin:auto;
margin-top:6%;
text-align:center;

`;
const Wrap = styled.div`
button{
  background-color:#f49e3f;
  width:80px;
  margin-left:10px;
  margin-top:10px;
  height:40px;
 
}


`;

export default Todo;
