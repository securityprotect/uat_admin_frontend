"use client";
import { useState } from "react";

export default function Payments() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  const search = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/admin/payments?q=${query}`
    );
    setData(await res.json());
  };

  return (
    <div>
      <h2>Payment Status</h2>
      <input placeholder="Mobile / Email" onChange={e => setQuery(e.target.value)} />
      <button onClick={search}>Search</button>

      {data.map(p => (
        <div key={p._id}>
          {p.transactionId} – {p.status}
        </div>
      ))}
    </div>
  );
}
