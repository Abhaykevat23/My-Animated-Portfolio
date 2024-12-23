import { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
// import Header from "./Components/Header";
import Landing from "./Home Components/Landing";
import Loading from "./Components/Loading";

function App() {

  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2500);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  const style = {
    // backgroundImage: "linear-gradient(140deg, #0300FB 0%, #BC70A4 50%, #BFD641 75%)",
    // backgroundColor:"#000066",
  }

  return (
    <>
      <div style={style} className="bg-blue-950  text-white m-0 p-0 overflow-x-hidden">
        <Router>
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Landing />} />
          </Routes>
        </Router>
      </div>
    </>
  )
}

export default App
