"use client";
import { useEffect, useState } from "react";

export default function Cards() {
  const [cards, setCards] = useState([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/admin/cards`)
      .then(r => r.json())
      .then(setCards);
  }, []);

  return (
    <div>
      <h2>Card Management</h2>
      {cards.map(c => (
        <div key={c._id} style={{ borderBottom: "1px solid #334155", padding: 10 }}>
          {c.cardNumber} – {c.vehicleNumber} – {c.status}
        </div>
      ))}
    </div>
  );
}
