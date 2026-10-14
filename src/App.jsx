import { Route, Routes } from "react-router";
import EditProfile from "./pages/EditProfile";
function App() {
  return <Routes>
    <Route path="/edit-profile" element={<EditProfile/>}/>
  </Routes>;
}

export default App;
