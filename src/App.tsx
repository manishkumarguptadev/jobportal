import Header from "./components/Header";
import JobDetails from "./components/JobDetails";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header />
      <div className="mx-24 my-4 flex">
        <Sidebar />
        <JobDetails />
      </div>
    </div>
  );
}

export default App;
