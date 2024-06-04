import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ChatBbot from "@/components/chatbot";
import useServerDarkMode from "@/hooks/use-server-dark-mode";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin']
})

export const metadata = {
  title: {
    template: '%s | Tascagdas',
    default: 'Tascagdas'
  },
  description: "Nextjs öğreniyorum.",
};

export default function RootLayout({ children }) {
  const theme = useServerDarkMode()
  return (
    <html lang="en" className={theme}>
      <body className={roboto.className}>
        <Header></Header>
        <main className="mt-12 mx-4">
          {children}
        </main>
        <ChatBbot></ChatBbot>
      </body>
    </html>
  );
}
