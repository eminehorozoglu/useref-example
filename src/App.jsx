import { useRef } from "react";


export default function App(){

  const ref = useRef(0);
  console.log(ref);
  const inputref1 = useRef(null);
  const inputref2 = useRef(null);
  const inputref3 = useRef(null);

function handleclick (){
 ref.current =ref.current + 1;
 alert('You clicked ' + ref.current + ' times!');
 console.log(ref.current);
  }


function handleclick1 (){
inputref1.current.focus();
inputref1.current.style.backgroundColor = "yellow";
inputref2.current.style.backgroundColor = "";
inputref3.current.style.backgroundColor = "";
 }
 function handleclick2 (){
  inputref2.current.focus();
  inputref2.current.style.backgroundColor = "yellow";
  inputref1.current.style.backgroundColor = "";
  inputref3.current.style.backgroundColor = "";
  
   }
   function handleclick3 (){
    inputref3.current.focus();
    inputref3.current.style.backgroundColor = "yellow";
    inputref2.current.style.backgroundColor = "";
    inputref1.current.style.backgroundColor = "";
    
     }

  return (
    <>
    <h1>home page</h1>
    <button onClick={handleclick}>click me!</button>
    <h1>Another Example</h1>
    <button onClick={handleclick1}>click me-1</button>
    <input ref={inputref1}></input>
    <button onClick={handleclick2}>click me-2</button>
    <input ref={inputref2}></input>
    <button onClick={handleclick3}>click me-3</button>
    <input ref={inputref3}></input>
    </>
  )
}