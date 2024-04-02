import "./App.css";
import Feed from "./Components/Feed/Feed";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import Widget from "./Components/Widgets/Widget";
import Login from "./Components/Login/Login";

function App() {
  const user = 'hai';
  return (
    <div className="App">
      
     
      {!user ? (
        <Login />
      ) : (
        <>
          <Header />
          <div className="app-body">
            <Sidebar />
            <Feed />
            <Widget />
          </div>
        </>
      )}
      
    </div>
  );
}

export default App;
