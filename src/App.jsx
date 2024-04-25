import AuthLayout from "./_auth/AuthLayout";
import Signin from "./_auth/SigninForm/Signin";
import Signup from "./_auth/SignupForm/Signup";
import RootLayout from "./_root/RootLayout";
import { Route, Routes } from "react-router-dom";
import { Home } from "./_root/pages";
import Categories from "./_root/pages/Categories";
function App() {
  return (
    <Routes>
      <Route element={<AuthLayout />}>
        <Route path="/sign-in" element={<Signin />} />
        <Route path="/sign-up" element={<Signup />} />
      </Route>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/categories" element={<Categories />} />
      </Route>
    </Routes>
  );
}

export default App;
