import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Turnito APP",
  description:
    "Ver turnos disponibles en los registros de motovehículos Rosario.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`flex flex-col ${inter.className}`}>
        {children}
        <div className="text-center p-4">
          <small className="text-slate-600 font-bold">
            Si queres que agreguemos algun registro envia un email a
            samuburgueno@gmail.com
          </small>
        </div>
      </body>
    </html>
  );
}
