"use client";

import { useEffect, useState } from "react";

export default function SubmitsPage() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/submissions`)
      .then(res => res.json())
      .then(setData)
      .catch(() => {});
  }, []);

  const approve = async (id) => {
    await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/admin/approve/${id}`,
      { method: "POST" }
    );
    alert("Approved");
  };

  return (
    <div>
      <h2>New Submissions</h2>

      {data.length === 0 && <p>No new submissions</p>}

      {data.map(item => (
        <div
          key={item._id}
          style={{ borderBottom: "1px solid #334155", padding: 12 }}
        >
          <b>{item.name}</b><br />
          Vehicle: {item.vehicleNumber}<br />
          Plan: {item.plan}<br />
          <button onClick={() => approve(item._id)}>Approve</button>
        </div>
      ))}
    </div>
  );
}
