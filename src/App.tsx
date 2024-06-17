import Header from "./components/Header";
import JobDetails from "./components/JobDetails";
import Sidebar from "./components/Sidebar";

function App() {
  return (
    <div>
      <Header />
      <div className="flex bg-muted/50 px-20 py-4">
        <Sidebar />
        <JobDetails />
      </div>
    </div>
  );
}

export default App;
