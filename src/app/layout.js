import "./globals.css";
import { ToastContainer } from "material-react-toastify";
import "material-react-toastify/dist/ReactToastify.css";
export const metadata = {
  title: "Car Finder",
  description: "Created by Aditya Bhardwaj",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative">
        {children}
        <ToastContainer className="absolute top-10 right-10" />
      </body>
    </html>
  );
}
