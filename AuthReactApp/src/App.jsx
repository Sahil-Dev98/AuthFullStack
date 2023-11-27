import "./App.css";
import { SignUp } from "./components/SignUp";
import { UserTable } from "./components/UserCard";

function App() {
  return (
    <>
      <div className="w-full h-screen flex">
        <div className="flex-1" style={{ flex: "1" }}>
          <SignUp />
        </div>
        <div className="flex-1" style={{ flex: "2" }}>
          <UserTable />
        </div>
      </div>
    </>
  );
}

export default App;
