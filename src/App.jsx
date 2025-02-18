import { useRef,useEffect,useState } from "react";


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

      const [inputValue, setInputValue] = useState("");
      const count = useRef(0);
      useEffect(() => {
        count.current = count.current + 1;
      });   

  return (
    <>
    <h1>UseRef Examples</h1>
    <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count: {count.current}</h1>
    <button onClick={handleclick}>click me and see the messagge!</button>
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