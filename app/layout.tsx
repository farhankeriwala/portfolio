import type {Metadata} from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {karla} from "@/fonts/karla";
import {ThemeProvider} from "@/components/theme-provider/ThemeProvider";
import {ThemeToggle} from "@/components/theme-provider/ThemeToggle";


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
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
        >
            <Header/>
            <main className={"flex-grow container max-w-7xl mx-auto"}>
                {children}
                <div className="fixed bottom-8 right-8 z-50">
                    <ThemeToggle />
                </div>
            </main>
            <Footer/>
        </ThemeProvider>

        </body>
        </html>
    );
}
