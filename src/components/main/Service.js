import CategoriesModal from "./CategoriesModal"
import ProductDisplay from "./ProductDisplay"

const Service = () => {
  return (
    <div>
        <section className="home">
          <div className="container dFlex">
            <CategoriesModal />
            <ProductDisplay />
          </div>
        </section>
    </div>
  )
}

export default Service
 