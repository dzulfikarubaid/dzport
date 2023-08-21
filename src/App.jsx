import Navbar from "./components/Navbar/Navbar"
import Search from "./components/SearchDiv/Search"
import Value from "./components/ValueDiv/Value"
import Job from "./components/JobDiv/Job"
import Footer from "./components/FooterDiv/Footer"
import Wkwk from "./components/Wkwk/Wkwk"
import Chat from "./components/Chat/Chat"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  return(
    <div >
    
    <Router>
      <Routes>
      <Route path="/" element={<>
        <Navbar></Navbar>
    <Value></Value>
    <Job></Job>
    <Search></Search>
    <Chat></Chat>
      </>}></Route>
      <Route path="/live-project" element={<Wkwk/>}></Route>
      </Routes>
      
    </Router>
    <Footer></Footer>
  </div>
  )
  
}

export default App
