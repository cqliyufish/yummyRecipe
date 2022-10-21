import Pages from "routes/Pages";
import { BrowserRouter } from "react-router-dom";
import Category from "components/category/Category.component";
import Search from "components/search/Search.component";
import Logo from "components/logo/Logo";
import "App.css";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Logo />
        <Search />
        <Category />
        <Pages />
      </BrowserRouter>
    </div>
  );
}

export default App;
