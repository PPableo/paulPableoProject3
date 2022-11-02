import { Link } from 'react-router-dom'

const Search = () => {
  return (
    <>
        <section className="search">
          <div className="container cFlex">
            <div className="logo width">
              <a href='/' className='brandLogo'>
                <span className='logoTitle'>LUX</span>
                <span className="subtitle">NAIL | BEAUTY BAR</span>
              </a>
            </div>

            <div className="searchBox fFlex">
              <i className='fa fa-search'></i>
              <input type="text" placeholder="Services" />
              <span>All Category</span>
            </div> 

            <div className="icon fFlex width">
                <i className="fa fa-user icon-circle"></i>
                <div className="cart">
                  <Link to="/cart">
                    <i className="fa fa-shopping-bag icon-circle"></i>
                    <span className='cartNumber'>0</span>
                  </Link>
                </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default Search