import type {Metadata} from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {karla} from "@/fonts/karla";
import {ThemeProvider} from "@/components/theme-provider/ThemeProvider";


export const metadata: Metadata = {
    title: "Farhan Keriwala",
    description: "Software Portfolio of Farhan Keriwala",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" suppressHydrationWarning={true}>
        <body
            className={`antialiased ${karla.className} flex flex-col items-center min-h-screen`}
        >
        <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
        >
            <Header/>
            <main className={"flex-grow container max-w-7xl mx-auto"}>
                {children}
            </main>
            <Footer/>
        </ThemeProvider>

        </body>
        </html>
    );
}
