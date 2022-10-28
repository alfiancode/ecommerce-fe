import Link from "next/link";
import Navbar from "./navbar";

export default function RootLayout({ children }) {
  return (
    <html>
      <head></head>
      <body>
        {/* navigate 2 different  */}
     <Navbar/>

        {children}</body>
    </html>
  )
}
