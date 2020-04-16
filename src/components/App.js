import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Route path="/" exact />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
