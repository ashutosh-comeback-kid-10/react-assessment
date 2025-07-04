import "./App.css";
import { ShoppingListItem } from "./components/ShoppingListItem";
import React from "react";
import { nanoid } from "nanoid";

function App() {
  const [items, setItems] = React.useState([]);
  const [inputValue, setInputValue] = React.useState("");

  

  function updateState(e) {
    setInputValue(e.target.value);
  }

  function addItem() {
    const duplicate = items.some(item => item.name.toLowerCase() === inputValue.toLowerCase())
    if (inputValue === "" || duplicate) {
      return alert("Error");
    } else {
      return (
        setItems((prevItem) => [
          ...prevItem,
          { id: nanoid(), name: inputValue, checked: false },
        ]),
        setInputValue("")
      );
    }
  }

  function isChecked(id) {
    setItems((prevItem) =>
      prevItem.map((item) =>
        id === item.id ? { ...item, checked: !item.checked } : item
      )
    );
  }

  function removeItem(id) {
    setItems((prevItems) => prevItems.filter((item) => id !== item.id));
  }

  return (
    <div className="container">
      <h1 className="mb-4">My Shopping List</h1>

      <div className="flex gap-4 pb-3 border-b-2 border-gray-700">
        <input
          type="text"
          placeholder="E.g. Carrots"
          className="v__input flex-1"
          value={inputValue}
          onChange={(e) => updateState(e)}
        />

        <button
          className="v__button"
          onClick={addItem}
        >
          Add
        </button>
      </div>
      <div className="v__list-container overflow-y-scroll">
        {items.map((item) => (
          <ShoppingListItem
            key={item.id}
            id={item.id}
            item={item.name}
            removeItem={() => removeItem(item.id)}
            toggleChecked={() => isChecked(item.id)}
            checked={item.checked}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
