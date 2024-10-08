import React from "react";
import Header from "./components/Header";
import AddressBookContainer from "./components/AddressBookContainer";

const App: React.FC = () => {
  return (
    <div className="App">
      <Header />
      <AddressBookContainer />
    </div>
  );
};

export default App;
