export function FindMonkLogo({ className = "h-10 w-10" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background glow circle */}
      <circle cx="50" cy="50" r="48" fill="url(#bgGradient)" opacity="0.15" />
      
      {/* Monk's robe/body - simplified silhouette */}
      <path
        d="M50 35C42 35 35 40 35 47C35 50 36 53 38 55L38 75C38 77 39 78 41 78L59 78C61 78 62 77 62 75L62 55C64 53 65 50 65 47C65 40 58 35 50 35Z"
        fill="url(#robeGradient)"
        opacity="0.9"
      />
      
      {/* Monk's head */}
      <ellipse cx="50" cy="40" rx="10" ry="12" fill="url(#headGradient)" />
      
      {/* Monk's meditation/prayer hands position */}
      <path
        d="M42 55L42 62C42 63 43 64 44 64C45 64 46 63 46 62L46 55"
        stroke="#38bdf8"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M58 55L58 62C58 63 57 64 56 64C55 64 54 63 54 62L54 55"
        stroke="#38bdf8"
        strokeWidth="2"
        strokeLinecap="round"
      />
      
      {/* Monk's peaceful closed eyes */}
      <path
        d="M45 38C45 38 46 39 47 39C48 39 49 38 49 38"
        stroke="#0ea5e9"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
      />
      <path
        d="M51 38C51 38 52 39 53 39C54 39 55 38 55 38"
        stroke="#0ea5e9"
        strokeWidth="1.5"
        strokeLinecap="round"
        opacity="0.7"
      />
      
      {/* Search icon integrated subtly at bottom */}
      <g opacity="0.8">
        <circle cx="50" cy="68" r="6" stroke="#38bdf8" strokeWidth="2" fill="none" />
        <line x1="54.5" y1="72.5" x2="58" y2="76" stroke="#38bdf8" strokeWidth="2" strokeLinecap="round" />
      </g>
      
      {/* Subtle enlightenment dot (third eye) */}
      <circle cx="50" cy="35" r="1.5" fill="#38bdf8" opacity="0.8" />
      
      <defs>
        <linearGradient id="bgGradient" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38bdf8" />
          <stop offset="100%" stopColor="#0ea5e9" />
        </linearGradient>
        <linearGradient id="robeGradient" x1="35" y1="35" x2="65" y2="78" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0.2" />
        </linearGradient>
        <linearGradient id="headGradient" x1="40" y1="30" x2="60" y2="50" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#7dd3fc" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.3" />
        </linearGradient>
      </defs>
    </svg>
  )
}
