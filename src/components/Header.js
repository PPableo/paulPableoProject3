import Head from "./Head";
import Search from "./Search";
import Navbar from "./Navbar";
import "../App.scss"
import LandingPageImg from "./LandingPageImg";

const Header = () => {

    // console.log('Header has rendered');

    return (
        <>
            <Head />
            <Search />
            <Navbar />
            {/* <LandingPageImg /> */}
        </>
    )
}

export default Header;