import React, { useState } from "react";

const App = () => {
  const [name, setName] = useState("");

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Controlled</h2>

      <input 
        type="text" 
        value={name} 
        onChange={(e) => setName(e.target.value)} 
        placeholder="Ismingizni kiriting"
        style={{ padding: "8px", fontSize: "16px", marginRight: "10px" }}
      />

      <p>Natija: <strong>{name}</strong></p>
    </div>
  );
}

export default App;


// import React, { useRef } from "react";

// const App = () => {
//   const nameRef = useRef();

//   const handleClick = () => {
//     alert("Kiritilgan ism: " + nameRef.current.value);
//   };

//   return (
//     <div style={{ padding: "20px", fontFamily: "Arial" }}>
//       <h2>Uncontrolled</h2>

//       <input 
//         type="text" 
//         ref={nameRef} 
//         placeholder="Ismingizni kiriting"
//         style={{ padding: "8px", fontSize: "16px", marginRight: "10px" }}
//       />

//       <button onClick={handleClick} style={{ padding: "8px 12px", fontSize: "16px" }}>
//         Submit
//       </button>
//     </div>
//   );
// }

// export default App;
