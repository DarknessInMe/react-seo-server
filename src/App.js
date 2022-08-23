import { Home } from './components/Home';
import { Post } from "./components/Post";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";

const routingList = [1, 2, 3, 4, 5];

function App() {
  return (
    <BrowserRouter>
      <div>
        <nav>
          <li><Link to='/'>Home</Link></li>
          {routingList.map(route => (
              <li key={route}>
                <Link to={`/post/${route}`}>Post {route}</Link>
              </li>
          ))}
        </nav>
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path='/post/:id' element={<Post />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
