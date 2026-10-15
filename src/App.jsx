import { Routes, Route } from "react-router";
import FindPeople from "./pages/Transfer/FIndPeople";
import PeopleInformation from "./pages/Transfer/PeopleInformation";
import EditProfile from "./pages/EditProfile";
function App() {
  return (
    <Routes>
      <Route path="/" element={<FindPeople />} />
      <Route path="/transferinfo" element={<PeopleInformation />} />

      <Route path="/edit-profile" element={<EditProfile />} />
    </Routes>
  );
}

export default App;
