import { Navbar, Footer } from "@/components";
import "./globals.css";
import type { Metadata } from "next";

// const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: "Car Hub",
    description: "Discover best cars.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body className="relative">
                <Navbar />
                {children}
                <Footer />
            </body>
        </html>
    );
}
