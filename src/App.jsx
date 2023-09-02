import { Route, Routes } from "react-router";
import DropdownPage from "./pages/dropdownpage";
import AccordionPage from "./pages/accordion";
import ButtonPage from "./pages/buttonpage";
import Layout from "./pages/layout";
import ModalPage from "./pages/modalpage";
import TablePage from "./pages/tablepage";
import CounterPage from "./pages/counterpage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<AccordionPage />} />
        <Route path="/dropdown" element={<DropdownPage />} />
        <Route path="/button" element={<ButtonPage />} />
        <Route path="/modal" element={<ModalPage />} />
        <Route path="/table" element={<TablePage />} />
        <Route path="/counter" element={<CounterPage />} />
      </Route>
    </Routes>
  );
};

export default App;
