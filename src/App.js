import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  return (
    <>
      <Navbar title="TextUtiles" aboutUs="About Us" />
      <TextForm/>
      {/* <Navbar /> */}
    </>
  );
}
export default App;
