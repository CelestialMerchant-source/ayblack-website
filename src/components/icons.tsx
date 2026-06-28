// Tiny inline icon set so we never depend on an icon-library CDN.
export function ServiceIcon({ name, className }: { name: string; className?: string }) {
  const common = { viewBox: "0 0 24 24", className: className ?? "w-7 h-7", fill: "none", stroke: "currentColor", strokeWidth: 1.6 };

  switch (name) {
    case "shirt":
      return (
        <svg {...common}>
          <path d="M8 2l4 2 4-2 4 4-3 3v11H7V9L4 6l4-4z" strokeLinejoin="round" />
        </svg>
      );
    case "briefcase":
      return (
        <svg {...common}>
          <rect x="3" y="7" width="18" height="13" rx="2" />
          <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
        </svg>
      );
    case "users":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3" />
          <path d="M3 20c0-3 2.5-5 6-5s6 2 6 5" />
          <circle cx="17" cy="9" r="2.5" />
          <path d="M15 14.5c2.5.3 4.5 2 4.5 5.5" />
        </svg>
      );
    case "pencil":
      return (
        <svg {...common}>
          <path d="M4 20l4-1 11-11-3-3L5 16l-1 4z" strokeLinejoin="round" />
        </svg>
      );
    case "ruler":
      return (
        <svg {...common}>
          <rect x="3" y="9" width="18" height="6" rx="1" transform="rotate(-15 12 12)" />
        </svg>
      );
    case "fabric":
      return (
        <svg {...common}>
          <path d="M4 4h16v6c0 4-4 4-4 8H8c0-4-4-4-4-8V4z" />
        </svg>
      );
    default:
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="9" />
        </svg>
      );
  }
}
