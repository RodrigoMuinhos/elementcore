export function LogoMark({ size = 44 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path
        d="M24 3 41 12.5v23L24 45 7 35.5v-23z"
        stroke="url(#lg)"
        strokeWidth="1.6"
      />
      <path
        d="M24 8 36 15v18l-12 7-12-7V15z"
        stroke="#2a2a28"
        strokeWidth="1.2"
      />
      <path d="M18 18h12l-4 6h6l-12 12 4-9h-6z" fill="url(#lg)" />
      <defs>
        <linearGradient
          id="lg"
          x1="7"
          y1="3"
          x2="41"
          y2="45"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#e2a93b" />
          <stop offset="1" stopColor="#765015" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Wordmark({ size = 26 }: { size?: number }) {
  return (
    <span
      className="font-display uppercase tracked font-600 leading-none"
      style={{ fontSize: size }}
    >
      <span className="text-ink">ELEMENT CORE</span>
    </span>
  );
}
