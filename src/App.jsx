import ProductList from './components/main/Product-list'
import Sidebar from './components/main/Sidebar'

function App() {
const products = [
  {
    id: 1,
    title: "Laptop",
    price: 1200,
    emoji: `💻` ,
    intro: 'Powerful laptop for work and study'
  },
  {
    id: 2,
    title: "Phone",
    emoji: `📱` ,
    price: 800,
    intro : 'Modern smartphone with great camera'
  },
  {
    id: 3,
    title: "Headphone",
    emoji: `🎧` ,
    price: 150,
    intro : 'Wireless headphones with clear sound'
  }
]

return(
    <div className="min-h-screen flex flex-col">

      {/* {Header} */}
      <header className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Product Dashboard
            </h1>

            <p className="text-sm text-gray-500">
              Manage your products
            </p>
          </div>

          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add Product
          </button>

        </div>
      </header>


      {/* {Main} */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-6 py-8">

        <div className="flex gap-8">

          {/* {Sidebar} */}
          <Sidebar />

        {/* {Products Section} */}
          <section className="flex-1">

            <div className="flex items-center justify-between mb-6">

              <div>
                <h2 className="text-xl font-bold text-gray-900">
                  Products
                </h2>

                <p className="text-sm text-gray-500">
                  Manage your products
                </p>
              </div>

              <span className="text-sm text-gray-500">
                3 Products
              </span>

            </div>


            {/* {Product List} */}
            <ProductList products={products} />

          </section>

        </div>

      </main>


      {/* {footer} */}
      <footer className="bg-white border-t">

        <div className="max-w-7xl mx-auto px-6 py-5 text-center text-sm text-gray-500">
          © 2026 Product Dashboard. All rights reserved.
        </div>

      </footer>

    </div>
)


}



export default App
