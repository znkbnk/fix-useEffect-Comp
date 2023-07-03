//incorrect

import React from "react";  

function Mycomponent() {
  
  const [count, setCount] = useState(); 

  useEffect(() => {
    console.log("Component is mounted");
    setCount(count + 1); 
  }, []);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, []); 

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button> 
    </div>
  );
}

export default Mycomponent;

