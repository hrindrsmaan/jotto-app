import "./App.module.scss";

import Input from "./components/input/input";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Input />
      <Footer />
    </div>
  );
}

export default App;
