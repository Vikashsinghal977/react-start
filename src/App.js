import "./App.css";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
function App() {
  return (
    <>
      <Navbar title="TextUtiles" aboutUs="About Us" />
      <div className="container">
      <TextForm heading="Enter the text to analyze"/>
      </div>
      {/* <Navbar /> */}
    </>
  );
}
export default App;
