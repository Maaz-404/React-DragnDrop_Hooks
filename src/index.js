import React, { useState } from "react";
import { render } from "react-dom";

import RLDD from "react-list-drag-and-drop/lib/RLDD";

import "./index.css";

const bananas = require("./bananas.json");

export const Example = () => {
  const [items, setItems] = useState(bananas.bananas);

  const itemRenderer = (item, index) => {
    return (
      <div className="item">
        <p className="title">{item.title}</p>
        <p className="body">{item.body}</p>
        <div className="small">
          item.id: {item.id} - index: {index}
        </div>
      </div>
    );
  };

  const handleRLDDChange = (reorderedItems) => {
    setItems(reorderedItems);
  };

  // this.itemRenderer = this.itemRenderer.bind(this);
  // this.handleRLDDChange = this.handleRLDDChange.bind(this);
  // }

  // render() {
  // const items = this.state.items;
  return (
    <div>
      <h1>react-list-drag-and-drop</h1>
      <p>
        <a href="https://www.npmjs.com/package/react-list-drag-and-drop">
          <img
            alt="npm install react-list-drag-and-drop"
            src="https://nodei.co/npm/react-list-drag-and-drop.png?mini=true"
          />
        </a>
      </p>
      <h2>Javascript Example 1: Draggable List of Bananas</h2>
      <p>Drag and drop items to re-order the list.</p>
      <RLDD
        cssClasses="example"
        items={items}
        itemRenderer={itemRenderer}
        onChange={handleRLDDChange}
      />
    </div>
  );
  // }
};

render(<Example />, document.getElementById("root"));
