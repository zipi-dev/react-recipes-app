import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import RecipeDetails from "./pages/RecipeDetails";
import Controlled from "./pages/login/controlled";
import Uncontrolled from "./pages/login/uncontrolled";
import RHF from "./pages/login/rhf";



export default function App() {
  return (

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="recipes/:id" element={<RecipeDetails />} />

        <Route path="login/controlled" element={<Controlled />} />
        <Route path="login/uncontrolled" element={<Uncontrolled />} />
        <Route path="login/rhf" element={<RHF />} />

        <Route path="*" element={<NotFound />} />

      </Route>
    </Routes>
  );
   
}
