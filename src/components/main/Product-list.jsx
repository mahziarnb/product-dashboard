import ProductItem from "./Product-item"

export default function ProductList({products}) {
    return(
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    products.map(product => {
                      return <ProductItem key={product.id} product={product}/>
                    })
                }

            </div>
    )
}
