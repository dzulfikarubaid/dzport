import Navbar from "./components/Navbar/Navbar"
import Search from "./components/SearchDiv/Search"
import Value from "./components/ValueDiv/Value"
import Job from "./components/JobDiv/Job"
import Footer from "./components/FooterDiv/Footer"
function App() {
  return(
    <div >
    <Navbar></Navbar>
    
    <Value></Value>
    <Job></Job>
    <Search></Search>
    <Footer></Footer>
  </div>
  )
  
}

export default App
