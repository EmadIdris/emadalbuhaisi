type IconProps = {
  name:
    | "code"
    | "spark"
    | "database"
    | "lowcode"
    | "cloud"
    | "api"
    | "microsoft"
    | "scrum"
    | "company-enterprise"
    | "company-database"
    | "education"
    | "training"
    | "project-automation"
    | "project-portal"
    | "project-microservices"
    | "project-lowcode"
    | "email"
    | "phone"
    | "linkedin"
    | "arrow-up";
  className?: string;
};

const Icon = ({ name, className }: IconProps) => {
  const base = "h-5 w-5 flex-shrink-0 text-azure " + (className ?? "");
  const sized = "h-5 w-5 flex-shrink-0 " + (className ?? "");

  switch (name) {
    case "code":
      return (
        <svg viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M8 9L4 12l4 3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M16 9l4 3-4 3" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M10 19l4-14" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "spark":
      return (
        <svg viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 3l2.2 4.4L19 9l-4.8 1.6L12 15l-2.2-4.4L5 9l4.8-1.6L12 3z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "database":
      return (
        <svg viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="5" rx="7" ry="3" />
          <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
          <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
        </svg>
      );
    case "lowcode":
      return (
        <svg viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 3h6v4H9z" />
          <path d="M3 9h6v4H3z" />
          <path d="M15 9h6v4h-6z" />
          <path d="M9 15h6v6H9z" />
        </svg>
      );
    case "cloud":
      return (
        <svg viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M7 18a4 4 0 1 1 1-7.8A5 5 0 0 1 18 9a4 4 0 0 1 0 8H7z" />
        </svg>
      );
    case "api":
      return (
        <svg viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="6" cy="6" r="2" />
          <circle cx="18" cy="6" r="2" />
          <circle cx="12" cy="18" r="2" />
          <path d="M8 6h8M7.5 7.5l3 8M16.5 7.5l-3 8" />
        </svg>
      );
    case "microsoft":
      return (
        <svg viewBox="0 0 24 24" className={sized} fill="none">
          <rect x="3" y="3" width="8" height="8" fill="#F25022" />
          <rect x="13" y="3" width="8" height="8" fill="#7FBA00" />
          <rect x="3" y="13" width="8" height="8" fill="#00A4EF" />
          <rect x="13" y="13" width="8" height="8" fill="#FFB900" />
        </svg>
      );
    case "scrum":
      return (
        <svg viewBox="0 0 24 24" className={sized} fill="none" stroke="#F59E0B" strokeWidth="2">
          <circle cx="12" cy="12" r="9" fill="#FEF3C7" stroke="#F59E0B" />
          <path d="M4 12a8 8 0 0 1 13.7-5.7" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M20 12a8 8 0 0 1-13.7 5.7" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M17 4v4h-4" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M7 20v-4h4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case "company-enterprise":
      return (
        <svg viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 21h16" />
          <path d="M6 21V7h12v14" />
          <path d="M9 11h2M13 11h2M9 15h2M13 15h2" />
        </svg>
      );
    case "company-database":
      return (
        <svg viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="2">
          <ellipse cx="12" cy="6" rx="7" ry="3" />
          <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" />
        </svg>
      );
    case "education":
      return (
        <svg viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M3 9l9-4 9 4-9 4-9-4z" />
          <path d="M7 12v4c0 1.7 2.7 3 5 3s5-1.3 5-3v-4" />
        </svg>
      );
    case "training":
      return (
        <svg viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="5" width="16" height="14" rx="2" />
          <path d="M8 9h8M8 13h5" />
        </svg>
      );
    case "project-automation":
      return (
        <svg viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="6" cy="6" r="2" />
          <circle cx="18" cy="6" r="2" />
          <circle cx="12" cy="18" r="2" />
          <path d="M8 6h8M7.5 7.5l3 8M16.5 7.5l-3 8" />
        </svg>
      );
    case "project-portal":
      return (
        <svg viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="4" y="5" width="16" height="14" rx="2" />
          <path d="M4 9h16M9 9v10" />
        </svg>
      );
    case "project-microservices":
      return (
        <svg viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="4" width="7" height="6" rx="1" />
          <rect x="14" y="4" width="7" height="6" rx="1" />
          <rect x="8.5" y="14" width="7" height="6" rx="1" />
          <path d="M10 10l2 4M14 10l-2 4" />
        </svg>
      );
    case "project-lowcode":
      return (
        <svg viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M9 3h6v4H9z" />
          <path d="M3 9h6v4H3z" />
          <path d="M15 9h6v4h-6z" />
          <path d="M9 15h6v6H9z" />
        </svg>
      );
    case "email":
      return (
        <svg viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="2">
          <rect x="3" y="5" width="18" height="14" rx="2" />
          <path d="M3 7l9 6 9-6" />
        </svg>
      );
    case "phone":
      return (
        <svg viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M6 4h4l2 4-3 2a12 12 0 0 0 6 6l2-3 4 2v4c0 1-1 2-2 2C9 21 3 15 3 7c0-1 1-3 3-3z" />
        </svg>
      );
    case "linkedin":
      return (
        <svg viewBox="0 0 24 24" className={base} fill="currentColor" aria-hidden="true">
          <path d="M20.45 2H3.55A1.55 1.55 0 0 0 2 3.55v16.9C2 21.3 2.7 22 3.55 22h16.9c.85 0 1.55-.7 1.55-1.55V3.55C22 2.7 21.3 2 20.45 2zM8.09 19H5.42V9.78h2.67V19zM6.75 8.5a1.55 1.55 0 1 1 0-3.1 1.55 1.55 0 0 1 0 3.1zM19 19h-2.67v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39V19H10.4V9.78h2.56v1.26h.04c.36-.68 1.24-1.4 2.55-1.4 2.73 0 3.23 1.8 3.23 4.14V19z" />
        </svg>
      );
    case "arrow-up":
      return (
        <svg viewBox="0 0 24 24" className={base} fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5l-6 6M12 5l6 6" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 5v14" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    default:
      return null;
  }
};

export default Icon;
