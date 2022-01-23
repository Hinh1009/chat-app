import "./App.css";
import Login from "./components/Login";
import ChatRoom from "./components/ChatRoom ";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import AuthProvider from "./Context/AuthProvider";
import AppProvider from "./Context/AppProvider";
import AddRoomModal from "./components/Modals/AddRoomModal";
import InviteMemberModal from "./components/Modals/InviteMembersModal";
import StorageFileModal from "./components/Modals/StorageFileModal";

function App() {
  return (
    <Router>
      <AuthProvider>
        <AppProvider>
          <Routes>
            <Route element={<Login />} path="/login" />
            <Route element={<ChatRoom />} path="/" />
          </Routes>
          <AddRoomModal />
          <InviteMemberModal />
          <StorageFileModal />
        </AppProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;
