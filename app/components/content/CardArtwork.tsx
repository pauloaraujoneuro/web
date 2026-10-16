import type { ReactNode } from "react";
import type { Treatment } from "@/content/types";

/**
 * Line artwork for a card whose page has no illustration yet. Abstract on
 * purpose — fibres, segments, arcs — so it reads as the area's texture and
 * never as a depiction of a condition. `seed` varies the drawing per card so a
 * grid of placeholders does not look stamped.
 */

const WIDTH = 320;
const HEIGHT = 180;

/** Small deterministic PRNG; the same card always draws the same picture. */
const createRandom = (seed: string) => {
  let state = [...seed].reduce((hash, char) => (hash * 31 + char.charCodeAt(0)) >>> 0, 7);
  return () => {
    state = (state * 1664525 + 1013904223) >>> 0;
    return state / 2 ** 32;
  };
};

const round = (value: number) => Math.round(value * 10) / 10;

/** A bundle of fibres that gathers in the middle and fans out at both ends. */
const drawFibres = (random: () => number) => {
  const count = 9;
  const waist = 70 + random() * 40;
  const waistX = 120 + random() * 80;
  return Array.from({ length: count }, (_, index) => {
    const offset = index - (count - 1) / 2;
    const startY = HEIGHT / 2 + offset * (14 + random() * 6);
    const midY = waist + offset * 3.5;
    const endY = HEIGHT / 2 + offset * (18 + random() * 8) + (random() - 0.5) * 20;
    return {
      d: `M -10 ${round(startY)} C ${round(waistX - 70)} ${round(startY)}, ${round(waistX - 50)} ${round(midY)}, ${round(waistX)} ${round(midY)} S ${round(waistX + 90)} ${round(endY)}, ${WIDTH + 10} ${round(endY)}`,
      accent: index === 3,
    };
  });
};

/** Rounded segments stacked along a gentle curve, threaded by one line. */
const drawSegments = (random: () => number) => {
  const phase = random() * Math.PI;
  const amplitude = 14 + random() * 10;
  const yAt = (x: number) => HEIGHT / 2 + Math.sin(x / 70 + phase) * amplitude;
  const angleAt = (x: number) => (Math.atan(Math.cos(x / 70 + phase) * (amplitude / 70)) * 180) / Math.PI;
  const segments = Array.from({ length: 10 }, (_, index) => {
    const x = 12 + index * 33;
    return { x, y: yAt(x), angle: angleAt(x) };
  });
  const cord = Array.from({ length: 34 }, (_, index) => {
    const x = -10 + index * 10;
    return `${index ? "L" : "M"} ${x} ${round(yAt(x))}`;
  }).join(" ");
  return { segments, cord };
};

/** Arcs radiating from one corner, crossed by a dotted path of movement. */
const drawArcs = (random: () => number) => {
  const originX = random() > 0.5 ? -20 : WIDTH + 20;
  const originY = HEIGHT + 20;
  const radii = Array.from({ length: 8 }, (_, index) => 40 + index * 26 + random() * 6);
  const path = `M ${originX < 0 ? 20 : WIDTH - 20} ${HEIGHT - 30} Q ${WIDTH / 2} ${round(10 + random() * 30)}, ${originX < 0 ? WIDTH - 30 : 30} ${round(60 + random() * 40)}`;
  return { originX, originY, radii, path };
};

type Random = () => number;

const FibreArt = ({ random }: { random: Random }) =>
  drawFibres(random).map(({ d, accent }) => (
    <path key={d} d={d} className={accent ? "card-artwork-line card-artwork-accent" : "card-artwork-line"} />
  ));

const SegmentArt = ({ random }: { random: Random }) => {
  const { segments, cord } = drawSegments(random);
  return (
    <>
      <path d={cord} className="card-artwork-line card-artwork-accent" />
      {segments.map(({ x, y, angle }) => (
        <rect
          key={x}
          x={x - 11}
          y={round(y - 17)}
          width={22}
          height={34}
          rx={8}
          transform={`rotate(${round(angle)} ${x} ${round(y)})`}
          className="card-artwork-line"
        />
      ))}
    </>
  );
};

const ArcArt = ({ random }: { random: Random }) => {
  const { originX, originY, radii, path } = drawArcs(random);
  return (
    <>
      {radii.map((radius, index) => (
        <circle
          key={radius}
          cx={originX}
          cy={originY}
          r={round(radius)}
          className="card-artwork-line"
          opacity={round(1 - index * 0.09)}
        />
      ))}
      <path d={path} className="card-artwork-line card-artwork-accent card-artwork-dotted" />
    </>
  );
};

const ART_BY_AREA: Record<Treatment["group"], (props: { random: Random }) => ReactNode> = {
  "peripheral-nerve": FibreArt,
  spine: SegmentArt,
  rehabilitation: ArcArt,
};

interface CardArtworkProps {
  /** Articles without a related treatment fall back to the fibres. */
  area?: Treatment["group"];
  seed: string;
}

const CardArtwork = ({ area, seed }: CardArtworkProps) => {
  const Art = area ? ART_BY_AREA[area] : FibreArt;
  return (
    <svg
      viewBox={`0 0 ${WIDTH} ${HEIGHT}`}
      preserveAspectRatio="xMidYMid slice"
      fill="none"
      strokeLinecap="round"
      className="card-artwork"
    >
      <Art random={createRandom(seed)} />
    </svg>
  );
};

export default CardArtwork;
