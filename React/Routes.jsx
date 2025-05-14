import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Login";
import { Link } from "react-router-dom";

export default function App() {
  return (
    <div>
        <BrowserRouter>
            <Link to='login'>Login</Link>
            <div>Hello World</div>
            <Routes>
                <Route path='login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}