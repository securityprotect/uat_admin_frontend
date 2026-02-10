"use client";

import { useState } from "react";

export default function PaymentsPage() {
  const [query, setQuery] = useState("");
  const [data, setData] = useState([]);

  const search = async () => {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/admin/payments?q=${query}`
    );
    const result = await res.json();
    setData(result);
  };

  return (
    <div>
      <h2>Payment Status</h2>

      <input
        placeholder="Search by email or mobile"
        onChange={e => setQuery(e.target.value)}
      />
      <button onClick={search}>Search</button>

      {data.map(p => (
        <div
          key={p._id}
          style={{ borderBottom: "1px solid #334155", padding: 10 }}
        >
          Txn: {p.transactionId}<br />
          Amount: {p.amount}<br />
          Status: {p.status}
        </div>
      ))}
    </div>
  );
}
