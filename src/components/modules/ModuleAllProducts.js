//Done
export default function ModuleAllProducts(props) {

    const products = props.products;


    let listProducts = () => {
        return products.slice(0, 7).map(e => {

            return (
                <div key={e.id} className="module__product-table-row center-content">
                    <div className="module--flex-stretch w-70">
                        <div className="table-item">
                            <p className="text__100">{e.id}</p>
                        </div>
                    </div>
                    <div className="module--flex-stretch">
                        <div className="table-item">
                            <div className="module--flex-stretch">
                                <img
                                    src={e.image}
                                    alt="product img"

                                    className="module__order-image"
                                />
                                <div className="module--flex-stretch">

                                    <div className="mr-16">
                                        <div className="mr-6">
                                            <p className="text__200--bold bold">
                                                {e.title.substr(0, 25) + "\u2026"}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="module--flex-stretch">
                        <div className="table-item">
                            <p className="text__200">{e.category}</p>
                        </div>
                    </div>
                    <div className="module--flex-stretch">
                        <div className="table-item">
                            <p className="text__200">{e.price}</p>

                        </div>
                    </div>
                    <div className="module--flex-stretch">
                        <div className="table-item">
                            <p className="text__200">{e.rating.rate}</p>
                        </div>
                    </div>
                    <div className="module--fle-stretchx">
                        <div className="table-item">
                            <p className="text__200">{e.rating.count}</p>
                        </div>
                    </div>
                </div>
            )
        })
    }
    return (props.loading ? '' :
        <div className="module module__all-products">
            <div className="module__title-wrapper module--flex-apart module__all-products-wrapper">
                <p className="text__200--bold">Products</p>
                <div className="module--flex">
                    <div className="module--flex">
                        <p className="text__300--blue mr-12">See All</p>
                    </div>
                </div>
            </div>
            <div className="module__product-table-row--header">
                <div className="module--flex text__200">ID</div>
                <div className="module--flex text__200">Products</div>
                <div className="module--flex text__200">Category</div>
                <div className="module--flex text__200">Total Sales</div>
                <div className="module--flex text__200">Sales</div>
                <div className="module--flex text__200">Stock</div>
            </div>
            {listProducts()}
            <div className="module__divider"></div>
        </div>
    );
}