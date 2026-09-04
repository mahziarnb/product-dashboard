
export default function Header() {

    return(
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
    )
}
