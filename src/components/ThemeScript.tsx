export default function ThemeScript() {
  return (
    <script>{`
    (() => {
    const theme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const isDark = theme === "dark" || (theme === null && prefersDark);
    document.documentElement.classList.toggle("dark", isDark);
    })();
    `}</script>
  );
}
