import "@/styles/globals.css";
import type { AppProps } from "next/app";
import NavBar from "@/components/navbar";
import { Stars } from "@/components/main";
export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Stars />
            <NavBar />

            <canvas id="bg"></canvas>

            <Component {...pageProps} />
        </>
    );
}
