import { Inter, Roboto } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ChatBbot from "@/components/chatbot";

const inter = Inter({ subsets: ["latin"] });

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin']
})

export const metadata = {
  title: {
    template:'%s | Tascagdas',
    default:'Tascagdas'
  },
  description: "Nextjs öğreniyorum.",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={roboto.className}>
        <Header></Header>
        <main className="mt-12">
          {children}
        </main>
        <ChatBbot></ChatBbot>
      </body>
    </html>
  );
}
