import { Gabriela, Newsreader, IBM_Plex_Mono, Reenie_Beanie } from "next/font/google";
import "./globals.css";

const gabriela = Gabriela({
  variable: "--font-gabriela",
  subsets: ["latin"],
  weight: "400",
});

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const plexMono = IBM_Plex_Mono({
  variable: "--font-plex-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
});

const reenie = Reenie_Beanie({
  variable: "--font-reenie",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Shreyash Neeraj · Backend & Systems",
  description:
    "Shreyash Neeraj works on the layer under the application: protocol design, QUIC and TCP transports, NAT traversal and kernel I/O.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${gabriela.variable} ${newsreader.variable} ${plexMono.variable} ${reenie.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
