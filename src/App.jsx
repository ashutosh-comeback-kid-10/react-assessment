import "./App.css";
import { ShoppingListItem } from "./components/ShoppingListItem";
import React from "react";
import { nanoid } from "nanoid";
import { faker } from "@faker-js/faker";

faker.seed(2)

const DATA = ["Carrots", "Apple", "haricot beans"];

function App() {
  const [items, setItems] = React.useState(dataMap);
  const [inputValue, setInputValue] = React.useState("");


  

  
  function updateState(e) {
    setInputValue(e.target.value);
  }

  function dataMap() {
    return DATA.map((item) => ({ id: nanoid(), name: item, checked: false }));
  }

  function addItem() {
    const duplicate = items.some(
      (item) => item.name.toLowerCase() === inputValue.toLowerCase()
    );
    if (inputValue === "") {
      return alert("You need to enter some items");
    } else if (duplicate) {
      return alert("You have already added the item");
    } else {
      return (
        setItems((prevItem) => [
          { id: nanoid(), name: inputValue, checked: false },
          ...prevItem,
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

  function resetBtn() {
    setItems(dataMap());
  }

  function removeItem(id) {
    setItems((prevItems) => prevItems.filter((item) => id !== item.id));
  }

  function removeCheckedItems() {
    setItems((prevItems) => prevItems.filter((item) => item.checked === false));
  }
 

  const randomIngredient = () => {
    const random = faker.food.ingredient()
    const duplicate = items.some(
      (item) => item.name.toLowerCase() === random.toLowerCase()
    );
    duplicate ? alert("You have already added the item") : setItems(prevItem => [...prevItem, ({name: random, id: nanoid(), checked: false})]);
    
  };


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
          onKeyDown={(e) => (e.key === "Enter" ? addItem() : null)}
        />

        <button className="v__button" onClick={addItem}>
          Add
        </button>

        <button
          className="v__button"
          onClick={() => {
            setItems((prevItem) =>
              prevItem.map((item, index) =>
                index === 0 ? { ...item, checked: !item.checked } : item
              )
            );
          }}
        >
          Make first checked
        </button>

        <button className="v__button" onClick={resetBtn}>
          Reset
        </button>

        <button className="v__button" onClick={removeCheckedItems}>
          Remove Checked Items
        </button>

        <button className="v__button" onClick={randomIngredient}>
          Random
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
        <div>
          <p>
            Value: {items.filter((item) => item.checked === true).length} /{" "}
            {items.length}
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
