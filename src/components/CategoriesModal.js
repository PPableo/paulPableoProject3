// Stretch/New Feature; Popup modal to show categories

const CategoriesModal = () => {
    const data = [
        {
            cateImg: "../../assets/lashCateImg",
            cateName: "Lashes",
        },
        {
            cateImg: "../../assets/browCateImg",
            cateName: "Brows",
        },
        {
            cateImg: "../../assets/nailCateImg",
            cateName: "Nails",
        },
    ]

    return (
        <>
            <div className="category">
                {data.map((value, index) => {
                     return(
                    <div className="box fFlex" key={index}>
                        <img src={value.cateImg} alt="category image" />
                        <span>{value.cateName}</span>
                    </div>
                )
                }
                )
            }
            </div>
        </>
    )
}

export default CategoriesModal