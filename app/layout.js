import "../styles/globals.css";

export const metadata = {
  title: "ParkPing Admin",
  description: "Admin Panel"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
