import { BrowserRouter as Router } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import AllRoutes from "./AllRoutes";
import { fetchAllQuestion } from "./actions/question"
import { fetchAllUsers } from "./actions/users"

function App() {

  const dispatch = useDispatch()

  useEffect(() => {

    (function(d, m){
        var kommunicateSettings = 
            {"appId":"1a8db6b55619d928f93d1550e19940911","popupWidget":true,"automaticChatOpenOnNavigation":true};
        var s = document.createElement("script"); s.type = "text/javascript"; s.async = true;
        s.src = "https://widget.kommunicate.io/v2/kommunicate.app";
        var h = document.getElementsByTagName("head")[0]; h.appendChild(s);
        window.kommunicate = m; m._globals = kommunicateSettings;
    })(document, window.kommunicate || {});

    dispatch(fetchAllQuestion())
    dispatch(fetchAllUsers())
  },[dispatch])

  return (
    <div className='App'>
      <Router>
        <Navbar />
        <AllRoutes />  
      </Router>
    </div>
  );
}

export default App;
