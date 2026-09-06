import Image from "next/image";
import Link from "next/link";
import {
  DOCTOR_CRM,
  DOCTOR_NAME,
  DOCTOR_PROFILE_IMAGE,
  DOCTOR_RQE,
  DOCTOR_TITLE,
} from "@/constants";

export default function AuthorCard({ compact = false }: { compact?: boolean }) {
  return (
    <section className={`author-card ${compact ? "author-card-compact" : ""}`} aria-label="Autoria médica">
      <Image
        src={DOCTOR_PROFILE_IMAGE}
        alt={`Retrato profissional do Dr. ${DOCTOR_NAME}`}
        width={96}
        height={96}
        sizes="64px"
        className="h-16 w-16 shrink-0 rounded-2xl object-cover object-top"
      />
      <div className="min-w-0">
        <p className="font-semibold text-slate-900">Dr. {DOCTOR_NAME}</p>
        <p className="mt-0.5 text-sm text-slate-600">{DOCTOR_TITLE}</p>
        <p className="mt-1 text-xs font-semibold text-primary">
          {DOCTOR_CRM} · {DOCTOR_RQE}
        </p>
        {!compact ? (
          <Link className="mt-3 inline-flex min-h-11 items-center text-sm font-semibold text-primary" href="/sobre">
            Conhecer trajetória
          </Link>
        ) : null}
      </div>
    </section>
  );
}
