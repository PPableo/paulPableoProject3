import { Link } from "react-router-dom"

function LandingPageImg() {
  return (
    <section className="heroImg">
        <span className='heroTitle'>Lux</span>
        <span className='heroSubtitle'>NAIL | BEAUTY BAR</span>
        <div>
          <Link to="./main/Service.js">
          <p className="bookNow">book now</p>
          </Link>
        </div>
    </section>
    )
}

export default LandingPageImg