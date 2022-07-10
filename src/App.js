import React, { useState } from "react";
import "./App.css";
import ToDoList from "./ToDoList";

const App = () => {
  const [inputlist, setInputlist] = useState("");
  const [items, setItems] = useState([]);

  const itemEvent = (e) => {
    setInputlist(e.target.value);
  };

  const listOfItmes = () => {
    setItems((oldItems) => {
      return [...oldItems, inputlist];
    });
    setInputlist("");
  };


  const deleteItems = (id) => {
    // console.log('deleted');

    setItems((oldItems) => {
      return oldItems.filter((arrElem, idx) => {
        return idx !==id;
      })
    })
}



  return (
    <>
      <div className="main-div">
        <div className="center-div">
          <br />
          <h1> ToDo List </h1>
          <br />
          <input
            type="text"
            placeholder="Add items"
            value={inputlist}
            onChange={itemEvent}
          />
          <button onClick={listOfItmes}> + </button>

          <ol>
            {/* <li>{inputlist}</li> */}

            {items.map((itemVal, idx) => {
              return <ToDoList key={idx} id={idx} text={itemVal} onSelect = {deleteItems} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
