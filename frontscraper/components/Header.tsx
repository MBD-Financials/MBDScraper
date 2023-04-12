"use client";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { toast } from "react-hot-toast";

function Header() {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSearch = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const input = inputRef.current?.value;
    const notification = toast.loading(`Starting a Scraper for: ${input}`);

    if (inputRef.current?.value) {
      inputRef.current.value = "";
    }

    if (!input) return;

    try {
      const response = await fetch("/api/activateScraper", {
        method: "POST",
        // headers: {
        //   "Content-Type": "application/json",
        // },
        body: JSON.stringify({
          search: input,
        }),
      });

      const { collection_id, start_eta } = await response.json();

      toast.success("Scraper Started Successfully", {
        id: notification,
      });

      router.push(`/search/${collection_id}`);
    } catch (error) {
      toast.error("Whoops... Something Went Wrong!", {
        id: notification,
      });
    }
  };

  return (
    <header>
      <form
        className="flex items-center justify-center space-x-2
         rounded-full py-2 px-4 bg-indigo-100 max-w-md mx-auto"
        onSubmit={handleSearch}
      >
        <input
          placeholder="Search..."
          type="text"
          ref={inputRef}
          className="flex-1 outline-none bg-transparent text-indigo-400 placeholder:text-indigo-300"
        />
        <button hidden type="submit">
          Search
        </button>
        <MagnifyingGlassIcon className="h-6 w-6 text-indigo-300" />
      </form>
    </header>
  );
}

export default Header;
