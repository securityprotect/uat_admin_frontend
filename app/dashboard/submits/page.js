"use client";
import { useEffect, useState } from "react";

export default function Submits() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/submissions`)
      .then(r => r.json())
      .then(setData);
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
      {data.map(d => (
        <div key={d._id} style={{ borderBottom: "1px solid #334155", padding: 10 }}>
          <b>{d.name}</b> – {d.vehicleNumber}
          <br />
          <button onClick={() => approve(d._id)}>Approve</button>
        </div>
      ))}
    </div>
  );
}
