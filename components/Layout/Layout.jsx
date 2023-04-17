
import Navbar from '../NavBar/NavBar'
import Footer from "../Footer/Footer";

export default function Layout({ children }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
            <Footer/>
        </>
    )
}