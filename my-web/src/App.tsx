import { Outlet } from "react-router-dom";
import Header from "./components/Layout/Header";

export default function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-blue-50 to-blue-100 text-gray-800 font-sans antialiased">
      <Header />
      <main className="pt-24 px-6 max-w-6xl mx-auto transition-all duration-500">
        <Outlet />
      </main>
    </div>
  );
}
