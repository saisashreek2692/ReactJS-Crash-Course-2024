import { Routes, Route } from "react-router-dom";
import Menubar from "./UIUX/Menubar";
import BGChanger from "./Projects/BGChanger";
import Card from "./Projects/Card";
import CounterApp from "./Projects/CounterApp";
import Password from "./Projects/Password";

function App() {
  return (
    <>
      <Menubar />
      <Routes>
        <Route path="/counter" element={<CounterApp />} />
        <Route path="/cards" element={<Card />} />
        <Route path="/bgchange" element={<BGChanger />} />
        <Route path="/pwd" element={<Password />} />
      </Routes>
    </>
  );
}

export default App;
