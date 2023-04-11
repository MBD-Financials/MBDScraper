"use client";
import { collection, orderBy, query } from "firebase/firestore";
import { useCollection } from "react-firebase-hooks/firestore";
import { db } from "../firebase";
import { DocumentMagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import SidebarRow from "../components/SidebarRow";

function Sidebar() {
  const [snapshot, loading, error] = useCollection(
    query(collection(db, "searches"), orderBy("start_eta", "desc"))
  );
  const router = useRouter();

  return (
    <div className="p-2 md:p-10 py-6 overflow-y-auto border-b border-indigo-500/50 scrollbar-thin scrollbar-thumb-indigo-600/30 scrollbar-track-gray-100">
      <div className="flex flex-col items-center mb-10">
        <DocumentMagnifyingGlassIcon className="h-16 md:w-16 text-indigo-600" />
        <h1 className="hidden md:inline text-3xl mt-2">MBDataShop</h1>
        <h2 className="hidden md:inline text-xs italic">
          Scraping the Matrix
        </h2>
      </div>

      <ul className="flex flex-col gap-2 py-2 overflow-x-auto">
        {snapshot?.docs.map((doc) => (
          <SidebarRow key={doc.id} doc={doc} />
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
