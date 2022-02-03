import React, { useEffect } from "react";
import TodoInput from "./TodoInput";
import styled from "styled-components";
import { useState } from "react/cjs/react.development";
import axios from "axios";
import Todoout from "./Todoout";
function Todo() {
  const [todos, settodos] = useState([]);
  const [page,setpage] = useState(1)

  const getData = () => {
    axios.get(`http://localhost:3000/users?_page=${page}&_limit=3`).then(function (response) {
      // handle success
      console.log("res",response)
      // {response==null?"null":"shi"}
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
        if(e.delete==false){
          return <Todoout getData={getData} key = {e.id} id={e.id} status={e.status} title = {e.title}/>
        }
        
      })}
      </div>
      <Wrap>
        <button disabled={page==1} onClick={()=>{
          setpage(page-1)
        }} className="prev">Prev</button>
        <button onClick={()=>{
          setpage(page+1)
        }} className="next">Next</button>
      </Wrap>
       
    </Container>
  );
}

const Container = styled.div``;
const Wrap = styled.div``;
export default Todo;
