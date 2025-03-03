import Header from "../components/Common/Header.tsx";
import {Outlet} from "react-router-dom";
import Footer from "../components/Common/Footer.tsx";

const RootLayout = () => {
  return (
    <div className='w-full min-h-screen pt-16 bg-[url(/assets/bg.jpeg)] bg-fixed'>
      <Header />
      <Outlet />
      <Footer />
    </div>
  )
}
export default RootLayout
