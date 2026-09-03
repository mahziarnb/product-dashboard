import ProductItem from './components/main/Product-item'

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
    <div class="min-h-screen flex flex-col">

      {/* {Header} */}
      <header class="bg-white border-b">
        <div class="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <div>
            <h1 class="text-2xl font-bold text-gray-900">
              Product Dashboard
            </h1>

            <p class="text-sm text-gray-500">
              Manage your products
            </p>
          </div>

          <button
            class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Add Product
          </button>

        </div>
      </header>


      {/* {Main} */}
      <main class="flex-1 max-w-7xl w-full mx-auto px-6 py-8">

        <div class="flex gap-8">

          {/* {Sidebar} */}
          <aside class="w-56 bg-white rounded-xl shadow-sm p-4 h-fit">

            <nav class="space-y-2">

              <a
                href="#"
                class="block px-4 py-3 rounded-lg bg-blue-50 text-blue-600 font-medium"
              >
                Home
              </a>

              <a
                href="#"
                class="block px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100"
              >
                Products
              </a>

              <a
                href="#"
                class="block px-4 py-3 rounded-lg text-gray-600 hover:bg-gray-100"
              >
                Settings
              </a>

            </nav>

          </aside>


        {/* {Products Section} */}
          <section class="flex-1">

            <div class="flex items-center justify-between mb-6">

              <div>
                <h2 class="text-xl font-bold text-gray-900">
                  Products
                </h2>

                <p class="text-sm text-gray-500">
                  Manage your products
                </p>
              </div>

              <span class="text-sm text-gray-500">
                3 Products
              </span>

            </div>


            {/* {Product List} */}
            <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">

                {
                    products.map(product => {
                      return <ProductItem key={product.id} product={product}/>
                    })
                }

            </div>

          </section>

        </div>

      </main>


      {/* {footer} */}
      <footer class="bg-white border-t">

        <div class="max-w-7xl mx-auto px-6 py-5 text-center text-sm text-gray-500">
          © 2026 Product Dashboard. All rights reserved.
        </div>

      </footer>

    </div>
)


}



export default App
