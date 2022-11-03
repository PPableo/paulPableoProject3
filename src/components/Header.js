import Search from "./Search";
import Navbar from "./Navbar";
import "../App.scss"

const Header = () => {
    return (
        <div className="wrapper">
            <Search />
            <Navbar />
        </div>
    )
}

export default Header