import {BrowserRouter, Route, Routes} from "react-router-dom";
import RootLayout from "../../layouts/RootLayout.tsx";
import Home from "../../pages/Home.tsx";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default Router
