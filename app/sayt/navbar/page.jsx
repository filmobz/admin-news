import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <aside className="fixed top-0 left-0 z-40 w-64 h-full sm:translate-x-0 shadow-xl">
        <div className="h-full px-4 py-6 overflow-y-auto bg-gray-900 text-white border-r">
          
          <h2 className="text-2xl font-bold mb-8 text-center tracking-wide">
            Admin-panel
          </h2>

          <ul className="space-y-4 font-medium flex flex-col">
            
            <Link href={"./users"}>
              <li className="p-3 rounded-xl hover:bg-gray-700 transition cursor-pointer flex items-center gap-3">
                <span className="ms-3">Users</span>
              </li>
            </Link>

            <Link href={"./create"}>
              <li className="p-3 rounded-xl hover:bg-indigo-600 transition cursor-pointer flex items-center gap-3">
                <span className="ms-3">Create</span>
              </li>
            </Link>

            <Link href={"./products"}>
              <li className="p-3 rounded-xl hover:bg-gray-700 transition cursor-pointer flex items-center gap-3">
                <span className="ms-3">Products</span>
              </li>
            </Link>

          </ul>

        </div>
      </aside>
    </div>
  );
}