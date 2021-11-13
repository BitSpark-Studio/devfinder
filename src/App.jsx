import "./App.css";
import Header from "./components/Header/Header";
import ProfileInfo from "./components/ProfileInfo/ProfileInfo";
import SearchBox from "./components/SearchBox/SearchBox";
import { ProfileProvider } from "./context/ProfileContext";

function App() {
  return (
    <div className="App">
      <ProfileProvider>
        <div className="flex justify-center border-2 border-red-500 items-center h-screen">
          <div className="w-730">
            <Header />
            <SearchBox />
            <ProfileInfo />
          </div>
        </div>
      </ProfileProvider>
    </div>
  );
}

export default App;
