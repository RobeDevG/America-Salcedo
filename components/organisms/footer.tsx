import { Mail } from "lucide-react"

const navLinks = [
  { href: "#inicio", label: "Inicio" },
  { href: "#sobre-mi", label: "Sobre Mí" },
  { href: "#servicios", label: "Servicios" },
  { href: "#experiencia", label: "Experiencia" },
  { href: "#contacto", label: "Contacto" },
]

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-border bg-card py-12 px-6">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Logo */}
          <div>
            <a href="#inicio" className="text-xl font-bold text-foreground">
              América<span className="text-primary">.</span>
            </a>
            <p className="mt-2 text-sm text-muted-foreground">
              Intérprete Bilingüe y Biotecnóloga Genómica
            </p>
          </div>

          {/* Navigation */}
          <nav className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Social */}
          <a
            href="mailto:katherinsalcedo.fcqb2020@uas.edu.mx"
            className="flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <Mail className="h-4 w-4" />
            katherinsalcedo.fcqb2020@uas.edu.mx
          </a>
        </div>

        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {currentYear} América Salcedo. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
