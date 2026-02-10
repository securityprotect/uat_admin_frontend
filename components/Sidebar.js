import Link from "next/link";

export default function Sidebar() {
  return (
    <div style={{ width: 220, background: "#020617", padding: 20 }}>
      <h3>ParkPing</h3>
      <Link href="/dashboard/cards">Card Management</Link><br /><br />
      <Link href="/dashboard/submits">New Submit</Link><br /><br />
      <Link href="/dashboard/payments">Payment Status</Link>
    </div>
  );
}
