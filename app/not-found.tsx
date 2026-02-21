import Link from "next/link";

function HomeIcon() {
  return (
    <svg
      aria-hidden="true"
      className="mr-2 h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <path d="m3 10 9-7 9 7" />
      <path d="M5 10v10h14V10" />
      <path d="M10 20v-6h4v6" />
    </svg>
  );
}

function SearchIcon() {
  return (
    <svg
      aria-hidden="true"
      className="h-4 w-4"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
    >
      <circle cx="11" cy="11" r="7" />
      <path d="m21 21-4.3-4.3" />
      <path d="M8 11h6" />
    </svg>
  );
}

export default function NotFound() {
  return (
    <main className="grid h-[100svh] place-items-center overflow-hidden bg-gradient-to-br from-bg via-bg to-secondary/30 md:h-[100dvh]">
      <section className="container-shell w-full px-6 py-6 sm:px-8 sm:py-8 lg:px-12">
        <div className="card-surface relative mx-auto w-full max-w-2xl overflow-hidden p-8 sm:p-12">
          <div className="pointer-events-none absolute -right-20 -top-20 h-52 w-52 rounded-full bg-secondary/35 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-52 w-52 rounded-full bg-primary/20 blur-3xl" />

          <div className="relative z-10">
            <span className="mb-5 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-bg px-4 py-2 text-sm font-semibold text-primary">
              <SearchIcon />
              Erro 404
            </span>

            <h1 className="text-3xl font-bold tracking-tight text-primary sm:text-5xl">
              Página não encontrada
            </h1>

            <p className="mt-4 text-base leading-relaxed text-primary/85 sm:text-lg">
              A rota que você tentou acessar não existe ou foi movida. Use os botões abaixo para voltar à página inicial e continuar sua navegação.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link href="/" className="btn-primary w-full sm:w-auto">
                <HomeIcon />
                Ir para a página inicial
              </Link>

              <Link href="/#contact" className="btn-secondary w-full sm:w-auto">
                Falar com a clínica
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
