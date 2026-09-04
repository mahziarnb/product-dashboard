import { useState } from "react"

export default function Sidebar() {

    const [active , setActive] = useState(1)

    let links = [
        {id:1 , title:'Home'},
        {id:2 , title:'Product'},
        {id:3 , title:'Setting'}
    ]




    return (
            <aside className="w-56 bg-white rounded-xl shadow-sm p-4 h-fit">

                <nav className="space-y-2">

                    {
                        links.map(link => {
                            return (
                                        <a
                                            key={link.id}
                                            href="#"
                                            className={`block px-4 py-3 rounded-lg ${active === link.id ? 'bg-blue-500' : 'hover:bg-gray-100'} text-gray-600`}
                                            onClick={() => setActive(link.id)}
                                        >
                                            {link.title}
                                        </a>
                            )
                        })
                    }

                </nav>

            </aside>
    )
}
