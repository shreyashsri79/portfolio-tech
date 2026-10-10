import { Permanent_Marker, Newsreader, IBM_Plex_Mono, Covered_By_Your_Grace } from "next/font/google";
import "./globals.css";

const marker = Permanent_Marker({
  variable: "--font-marker",
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

const felt = Covered_By_Your_Grace({
  variable: "--font-felt",
  subsets: ["latin"],
  weight: "400",
});

export const metadata = {
  title: "Shreyash Neeraj · Software engineer",
  description:
    "Shreyash Neeraj builds reliable, well-tested systems in Java, C++, Go, Python and Kotlin. Available Summer 2027, on-site in India.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${marker.variable} ${newsreader.variable} ${plexMono.variable} ${felt.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
