import { GoogleAnalytics } from '@next/third-parties/google'
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { ThemeProvider } from "./context/themeContext";
import Footer from "./components/Footer";
import CustomCursor from './components/CustomCursor';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "gmsadiq",
  description: "React and Wordpress lover portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <ThemeProvider>
        <CustomCursor />
      <Header />
      {children}
      <Footer />
      </ThemeProvider>
        </body>
        <GoogleAnalytics gaId="G-X2W9TLCW50" />
    </html>
  );
}
