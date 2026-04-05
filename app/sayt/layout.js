// app/sayt/users/layout.js
import Link from 'next/link';
import Navbar from './navbar/page';
// import './users.css'; ← убрали, чтобы не было ошибки

export const metadata = {
  title: 'Users Sahifasi',
};

export default function UsersLayout({ children }) {
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      
     
      
 <div className="flex min-h-screen">
      
      
      <aside className="">
        <Navbar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {children}
      </main>

    </div>

    </div>
  );
}