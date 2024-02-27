import Accordion from "./components/Accordion";
import AccordionPage from "./pages/AccordionPage";
import ButtonPage from "./pages/ButtonPage";
import DropDownPage from "./pages/DropDown";

function App() {
  return (
    <div>
      <ButtonPage />
      <AccordionPage />
      <DropDownPage />
    </div>
  );
  // return (
  //   <div className="truncate">
  //     <Link to="/accordion">Go to Accordion</Link>
  //     <Link to="/dropdown">Go to DropDown</Link>
  //     <Link to="/accordion">Go to Accordion</Link>
  //   </div>
  // );
}

export default App;
