import "./App.css";
import Card from "./components/card";
import PostComponent from "./components/post";
import PatchComponent from "./components/patch";
import RemoveComponent from "./components/remove";
import GetCatComponent from "./components/getCat";
import GetCatsComponent from "./components/getCats";
import LogoutComponent from "./components/logout";
import LoginComponent from "./components/login";

function App() {
  return (
    <>
      <div className="horizontal-container">
        <h1>Panel?</h1>
        <Card>
          <LogoutComponent />
        </Card>
        <Card>
          <LoginComponent />
        </Card>
      </div>
      <div className="horizontal-container">
        <Card>
          <GetCatComponent />
        </Card>
        <Card>
          <GetCatsComponent />
        </Card>
      </div>
      <div className="horizontal-container">
        <Card>
          <PostComponent />
        </Card>
        <Card>
          <PatchComponent />
        </Card>
        <Card>
          <RemoveComponent />
        </Card>
      </div>
    </>
  );
}

export default App;
