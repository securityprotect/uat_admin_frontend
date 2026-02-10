"use client";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import { isLoggedIn } from "../../utils/auth";

export default function DashboardLayout({ children }) {
  if (!isLoggedIn()) {
    if (typeof window !== "undefined") {
      window.location.href = "/login";
    }
    return null;
  }

  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <div style={{ flex: 1 }}>
        <Header />
        <div style={{ padding: 20 }}>{children}</div>
      </div>
    </div>
  );
}
