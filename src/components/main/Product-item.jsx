
export default function ProductItem({product}) {
    console.log(product)
    return(
            <article className="bg-white rounded-xl shadow-sm p-5">

              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <span className="text-xl">{product?.emoji}</span>
              </div>

              <h3 className="text-lg font-semibold text-gray-900">
                {product?.title}
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                {product?.intro}
              </p>

              <div className="flex items-center justify-between mt-5">

                <span className="text-lg font-bold text-gray-900">
                  {`$${product?.price}`}
                </span>

                <button
                  className="text-blue-600 text-sm font-medium hover:text-blue-800"
                >
                  View
                </button>

              </div>

            </article>
    )
}
