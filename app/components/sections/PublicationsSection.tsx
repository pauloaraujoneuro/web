import { readdir } from "node:fs/promises";
import path from "node:path";
import {
  LATTES_URL,
  LATTES_URL_LABEL,
  PUBLICATIONS,
} from "@/constants";
import LattesIcon from "@/app/components/icons/LattesIcon";
import CongressGallery, {
  type CongressGalleryItem,
} from "@/app/components/sections/CongressGallery";

const CONGRESS_GALLERY_DIR = path.join(process.cwd(), "public/other/congressos");
const SUPPORTED_IMAGE_EXTENSIONS = /\.(avif|heic|jpe?g|png|webp)$/i;
const CURATED_CONGRESS_PHOTO_FILES = [
  "PHOTO-2023-11-16-22-41-321.jpg",
  "PHOTO-2023-11-17-12-12-28.jpg",
  "PHOTO-2023-11-17-12-12-281.jpg",
  "PHOTO-2024-09-06-18-29-50.jpg",
  "PHOTO-2024-09-06-18-29-503.jpg",
  "PHOTO-2025-03-18-10-54-5411.jpg",
  "PHOTO-2026-02-11-16-35-48.jpg",
];

function normalizeId(fileName: string) {
  return fileName
    .toLowerCase()
    .replace(/\.[a-z0-9]+$/i, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

function parseYear(fileName: string) {
  const match = fileName.match(/PHOTO-(\d{4})/i);
  return match?.[1] ?? "Evento";
}

async function getCongressGalleryItems(): Promise<CongressGalleryItem[]> {
  try {
    const files = await readdir(CONGRESS_GALLERY_DIR);
    const imageFiles = files.filter((fileName) =>
      SUPPORTED_IMAGE_EXTENSIONS.test(fileName),
    );
    const imageSet = new Set(imageFiles);
    const curatedFiles = CURATED_CONGRESS_PHOTO_FILES.filter((fileName) =>
      imageSet.has(fileName),
    );
    const finalFiles =
      curatedFiles.length > 0 ? curatedFiles : imageFiles.sort((a, b) => a.localeCompare(b));

    return finalFiles.map((fileName) => {
      const year = parseYear(fileName);
      return {
        id: normalizeId(fileName),
        src: `/other/congressos/${fileName}`,
        alt: `Dr. Paulo Araujo em congresso cientifico (${year})`,
        year,
      };
    });
  } catch {
    return [];
  }
}

export default async function PublicationsSection() {
  const congressGalleryItems = await getCongressGalleryItems();

  return (
    <section
      id="publications"
      className="section-shell section-anchor section-tone-spotlight"
    >
      <div className="container-shell relative z-10">
        <div>
          <span className="badge">Publicações</span>
          <h2 className="mt-4 text-balance text-3xl font-semibold text-primary sm:text-4xl">
            Participações recentes em congressos científicos
          </h2>
          <p className="mt-4 text-base leading-relaxed text-primary/84">
            Registro das apresentações como palestrante convidado a partir de
            2023.
          </p>

          <div className="mt-5 text-primary/86">
            <a
              href={LATTES_URL}
              target="_blank"
              rel="noreferrer"
              className="interactive-link inline-flex items-center gap-2.5 text-base font-semibold text-primary sm:text-lg"
            >
              <LattesIcon className="h-5 w-5" />
              {LATTES_URL_LABEL}
            </a>
          </div>
        </div>

        <div className="stagger-grid mt-8 space-y-4">
          {PUBLICATIONS.map((item) =>
            (() => {
              const [, rawRole = "", rawTheme = ""] = item.event
                .split("|")
                .map((value) => value.trim());
              const themeText = rawTheme.replace(/^Tema:\s*/i, "").trim();
              const roleText = rawRole.trim();

              return (
                <article
                  key={item.id}
                  className="card-surface relative overflow-hidden p-5 sm:p-6"
                >
                  <span className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-linear-to-r from-primary/40 via-primary/12 to-transparent" />

                  <div className="flex flex-wrap items-center justify-between gap-2.5">
                    <span className="text-2xl font-semibold tracking-[0.01em] text-primary/78">
                      {item.year}
                    </span>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.12em] text-primary">
                      Congresso
                    </span>
                  </div>

                  <h3 className="mt-3 text-lg font-semibold text-primary">
                    {item.title}
                  </h3>

                  <div className="panel-line mt-4 p-4 sm:p-4.5">
                    <p className="text-xs font-semibold uppercase tracking-[0.12em] text-primary/70">
                      Tema
                    </p>
                    <p className="mt-1.5 text-lg font-semibold leading-relaxed text-primary sm:text-[1.34rem]">
                      {themeText}
                    </p>
                  </div>

                  <div className="mt-4 flex flex-wrap items-center justify-between gap-2">
                    <p className="text-sm font-medium leading-relaxed text-primary/82">
                      Local: {item.location}
                    </p>
                    {roleText ? (
                      <span className="rounded-full border border-primary/20 bg-bg px-3 py-1 text-xs font-semibold tracking-[0.01em] text-primary/78">
                        {roleText}
                      </span>
                    ) : null}
                  </div>

                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="interactive-link mt-4 whitespace-nowrap text-sm font-semibold text-primary"
                    >
                      Acessar material
                    </a>
                  ) : null}
                </article>
              );
            })(),
          )}
        </div>

        <CongressGallery items={congressGalleryItems} />
      </div>
    </section>
  );
}
