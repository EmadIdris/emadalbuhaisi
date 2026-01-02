import useTheme from "../hooks/useTheme";

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="inline-flex items-center gap-2 rounded-full border border-slate-200/80 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-600 shadow-sm transition hover:border-azure/60 hover:text-azure dark:border-slate-800/80 dark:bg-slate-900/70 dark:text-slate-300"
      aria-label="Toggle dark mode"
    >
      <span className="h-2 w-2 rounded-full bg-azure" aria-hidden="true" />
      {theme === "dark" ? "Light" : "Dark"}
    </button>
  );
};

export default ThemeToggle;
