import "./App.css";
import Header from "./layouts/Header/Header";
import Sidebar from "./layouts/Sidebar/Sidebar";
import MainDashboard from "./pages/MainDashboard/MainDashboard";

function App() {
  return (
    <div className="App">
      <Header name={"John Doe"} />
      <div className="body-container">
        <div>
          <Sidebar />
        </div>
        <div className="dashboard-container-main">
          <MainDashboard name={"John Doe"} />
        </div>
      </div>
    </div>
  );
}

export default App;
