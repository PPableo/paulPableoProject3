import CategoriesModal from "../components/CategoriesModal"
import InventoryItems from "../components/main/InventoryItems"

const Service = () => {
  return (
    <div>
      <section className="home">
        <div className="wrapper">
        <div className="banner">
          <p>Services</p>
        </div>
          <div className="serviceContainer">
            {/* <CategoriesModal /> */}
            <InventoryItems />
          </div>
        </div>
      </section>
    </div>
  )
}

export default Service
