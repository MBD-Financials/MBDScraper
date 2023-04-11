"use client";

import { useRouter } from "next/navigation";
import { FormEvent, useRef } from "react";

function PriceTrackerInput() {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSearch = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const response = await fetch("/api/activateScraper", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        search: inputRef.current?.value,
      }),
    });

    const { collection_id, start_eta } = await response.json();

    router.push(
      `/search?keyword=${inputRef.current?.value}&id=${collection_id}&start_eta=${start_eta}`
    );
  };

  return (
    <form onSubmit={handleSearch}>
      <input placeholder="Enter item keyword..." ref={inputRef} type="text" />
      <button type="submit">Search</button>
    </form>
  );
}

export default PriceTrackerInput;

// curl -H "Authorization: Bearer API_TOKEN" -H "Content-Type: application/json" -d '[{"url":"https://www.amazon.com/ASICS-Gel-Venture-Running-Carrier-Habanero/dp/B07SKJLBN3/ref=zg_bs_679286011_5/132-6204607-5611519?pd_rd_i=B08ZRQ141Y&th=1&psc=1"}]' "https://api.brightdata.com/dca/trigger?collector=c_lecvzpi51q4017wnaz&queue_next=1"
