// Kept dependency-free so DeferredCongressGallery can render it without
// pulling the dynamically imported gallery chunk into the main bundle.

export const GALLERY_FRAME_ASPECT_CLASS = "aspect-4/5 sm:aspect-16/10";

export const GallerySlideSkeleton = () => (
  <div
    className="gallery-skeleton absolute inset-0 flex items-center justify-center"
    aria-hidden="true"
  >
    <svg
      viewBox="0 0 24 24"
      className="h-10 w-10 text-primary/20 sm:h-12 sm:w-12"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <circle cx="9" cy="9" r="2" />
      <path d="m21 15-3.09-3.09a2 2 0 0 0-2.82 0L6 21" />
    </svg>
  </div>
);

const CongressGallerySkeleton = () => (
  <article
    className="card-surface mt-9 overflow-hidden p-4 sm:p-5"
    aria-busy="true"
    aria-label="Carregando galeria de fotos"
  >
    <div className="flex flex-wrap items-center justify-between gap-3">
      <p className="text-xs font-semibold uppercase tracking-[0.14em] text-primary/70">
        Galeria
      </p>
      <span className="gallery-skeleton hidden h-6.5 w-14 rounded-full border border-primary/14 sm:inline-flex" />
    </div>

    <div className="mt-4 overflow-hidden rounded-xl border border-primary/14 bg-primary/6">
      <div className={`relative w-full bg-bg/70 ${GALLERY_FRAME_ASPECT_CLASS}`}>
        <GallerySlideSkeleton />
      </div>
    </div>

    <div className="mt-3 flex items-center justify-between gap-2 rounded-lg border border-primary/12 bg-primary/5 px-2.5 py-2 sm:hidden">
      <span className="gallery-skeleton h-9 w-9 rounded-full" />
      <span className="gallery-skeleton h-3 w-10 rounded-full" />
      <span className="gallery-skeleton h-9 w-9 rounded-full" />
    </div>
  </article>
);

export default CongressGallerySkeleton;
