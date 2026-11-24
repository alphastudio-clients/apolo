import { IconStar } from "./icons";

export default function Stars({ n = 5 }: { n?: number }) {
  return (
    <span className="stars" aria-label={`${n} de 5 estrellas`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <IconStar key={i} className={`star${i < n ? "" : " off"}`} />
      ))}
    </span>
  );
}
