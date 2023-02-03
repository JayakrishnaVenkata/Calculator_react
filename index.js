// import React from "react";
// import Modal from './Modal';
// import { useState,useReducer } from "react";
// import { reducer } from "./reducer";
// const defaultState = {
//     people : [],
//     isModalOpen : false,
//     modalContent: "",
// };
// const Index = () =>{
//     const [name,setName] = useState("");
//     const [state,dispatch] = useReducer(reducer,defaultState);
//     const handleSubmit = (e) =>{
//         e.preventDefault();
//         if(name) {
//             const newItem = { id:new Date().getTime().toString(),name};
//             dispatch( {type: "ADD_ITEM",payload:newItem});
//             setName("");
//         }else{
//             dispatch({ type: "NO_VALUE" });
//         }
//     };
//     const closeModal = () =>{
//         dispatch({ type: "CLOSE_MODAL" });
//     }
//     return (
//         <>
//             {state.isModalOpen && (
//                 <Modal closeModal/>
//             )}
//         </>
//     )
// }  

import React from "react";
import ReactDOM from  "react-dom/client";
import App from './App';

const Greeting  = () =>{
    return (
        <>
            <App/>
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Greeting/>);
