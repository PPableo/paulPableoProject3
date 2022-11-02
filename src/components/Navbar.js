import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <header className='header'>
                <div className="container dFlex">
                    <div className="categories dFlex">
                        <span className='fa-solid fa-border-all'></span>
                        <h4>
                            Categories <i className='fa fa-chevron-down'></i>
                        </h4>
                    </div>
                    <div className="navlink">
                        <ul className="nav">
                            <li>
                                <Link to="./">HOME</Link>
                            </li>
                            <li>
                                <Link to="./">SERVICES</Link>
                            </li>
                            <li>
                                <Link to="./store">store</Link>
                            </li>
                            <li>
                                <Link to="./contact">contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Navbar