import Header from "./components/Header";
import GetStarted from "./components/GetStarted";
import Register from "./components/Register";
import Login from "./components/Login";
import IdeasCatalog from "./components/IdeasCatalog";
import IdeasDetails from "./components/IdeasDetails";
import AddIdea from "./components/AddIdea";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
    <Header/>
    <GetStarted/>
    <Register/>
    <Login/>
    <IdeasCatalog/>
    <IdeasDetails/>
    <AddIdea/>
     <Footer/>
    </div>
  );
}

export default App;
