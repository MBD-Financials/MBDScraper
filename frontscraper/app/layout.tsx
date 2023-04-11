import "../styles/globals.css";
import Header from "../components/Header";
import Sidebar from "./Sidebar";
import ClientProvider from "./ClientProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <head />
      <body className="flex md:flex-row bg-[#F7FBFF] h-screen">
        <ClientProvider>
          <Sidebar />

          <main className="p-10 max-w-7xl w-full mx-auto overflow-y-auto scrollbar-thin scrollbar-thumb-indigo-600/30 scrollbar-track-gray-100">
            <Header />
            {children}
          </main>
        </ClientProvider>
      </body>
    </html>
  );
}
