import type { Metadata, Viewport } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { I18nProvider } from "@/components/i18n-provider"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

export const metadata: Metadata = {
  title: "América Salcedo | Intérprete Profesional Bilingüe Español-Inglés",
  description:
    "Servicios profesionales de interpretación español-inglés. Especialista en interpretación simultánea, consecutiva, médica y legal. Más de 8 años de experiencia conectando culturas.",
  keywords: [
    "intérprete español inglés",
    "interpretación profesional",
    "traducción simultánea",
    "intérprete bilingüe",
    "servicios de interpretación",
    "Spanish English interpreter",
    "bilingual interpreter",
    "América Salcedo",
  ],
  authors: [{ name: "América Salcedo" }],
  creator: "América Salcedo",
  openGraph: {
    type: "website",
    locale: "es_MX",
    alternateLocale: "en_US",
    title: "América Salcedo | Intérprete Profesional Bilingüe",
    description:
      "Servicios profesionales de interpretación español-inglés. Conectando culturas, construyendo puentes.",
    siteName: "América Salcedo - Intérprete Profesional",
  },
  twitter: {
    card: "summary_large_image",
    title: "América Salcedo | Intérprete Profesional Bilingüe",
    description:
      "Servicios profesionales de interpretación español-inglés. Conectando culturas, construyendo puentes.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: "#8B5A2B",
  width: "device-width",
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="bg-background">
      <body
        suppressHydrationWarning
        className={`${playfair.variable} ${inter.variable} font-sans antialiased`}
      >
        <I18nProvider>{children}</I18nProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
