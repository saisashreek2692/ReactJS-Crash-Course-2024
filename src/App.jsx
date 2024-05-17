import { Routes, Route } from "react-router-dom";
import Menubar from "./UIUX/Menubar";
import BGChanger from "./Projects/BGChanger";
import Card from "./Projects/Card";
import CounterApp from "./Projects/CounterApp";
import Password from "./Projects/Password";
import Currency from "./Projects/CurrencyCoverter";
import Contextapp from "./Projects/Contextapp";

function App() {
  return (
    <>
      <Menubar />
      <div className="m-20">
        <Routes>
          <Route path="/counter" element={<CounterApp />} />
          <Route path="/cards" element={<Card />} />
          <Route path="/bgchange" element={<BGChanger />} />
          <Route path="/pwd" element={<Password />} />
          <Route path="/currency" element={<Currency />} />
          <Route path="/context" element={<Contextapp />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
