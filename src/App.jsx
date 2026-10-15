import { Routes, Route } from "react-router";
import FindPeople from "./pages/Transfer/FIndPeople";
import PeopleInformation from "./pages/Transfer/PeopleInformation";
function App() {
  return (
    <Routes>
      <Route path="/" element={<FindPeople />} />
      <Route path="/transferinfo" element={<PeopleInformation />} />
    </Routes>
  );
}

export default App;
