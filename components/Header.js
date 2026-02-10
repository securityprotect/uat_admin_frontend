import { logout } from "../utils/auth";

export default function Header() {
  return (
    <div style={{ padding: 12, background: "#020617", textAlign: "right" }}>
      <button onClick={logout}>Logout</button>
    </div>
  );
}
