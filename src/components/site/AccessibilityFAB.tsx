import { useEffect, useRef, useState } from "react";
import {
  Accessibility,
  X,
  Plus,
  Minus,
  Contrast,
  Droplet,
  Link2,
  Type,
  AlignJustify,
  PauseCircle,
  MousePointer2,
  BookOpen,
  RotateCcw,
} from "lucide-react";

type ToggleKey =
  | "highContrast"
  | "grayscale"
  | "highlightLinks"
  | "readableFont"
  | "spacing"
  | "pauseAnimations"
  | "bigCursor"
  | "readingMode";

type State = {
  fontStep: number; // -2..3
  toggles: Record<ToggleKey, boolean>;
};

const DEFAULT: State = {
  fontStep: 0,
  toggles: {
    highContrast: false,
    grayscale: false,
    highlightLinks: false,
    readableFont: false,
    spacing: false,
    pauseAnimations: false,
    bigCursor: false,
    readingMode: false,
  },
};

const TOGGLE_CLASS: Record<ToggleKey, string> = {
  highContrast: "ap-high-contrast",
  grayscale: "ap-grayscale",
  highlightLinks: "ap-highlight-links",
  readableFont: "ap-readable-font",
  spacing: "ap-spacing",
  pauseAnimations: "ap-pause-animations",
  bigCursor: "ap-big-cursor",
  readingMode: "ap-reading-mode",
};

const STORAGE_KEY = "access-platform-settings";

function applyState(state: State) {
  const root = document.documentElement;
  // Font steps
  ["ap-font-step--2", "ap-font-step--1", "ap-font-step-1", "ap-font-step-2", "ap-font-step-3"].forEach(
    (c) => root.classList.remove(c),
  );
  if (state.fontStep !== 0) {
    root.classList.add(`ap-font-step-${state.fontStep > 0 ? state.fontStep : "-" + Math.abs(state.fontStep)}`);
  }
  // Toggles
  (Object.keys(TOGGLE_CLASS) as ToggleKey[]).forEach((k) => {
    root.classList.toggle(TOGGLE_CLASS[k], state.toggles[k]);
  });
}

export function AccessibilityFAB() {
  const [open, setOpen] = useState(false);
  const [state, setState] = useState<State>(DEFAULT);
  const panelRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // Load
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const parsed = { ...DEFAULT, ...JSON.parse(raw) } as State;
        setState(parsed);
        applyState(parsed);
      }
    } catch {}
  }, []);

  // Apply + persist on changes
  useEffect(() => {
    applyState(state);
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {}
  }, [state]);

  // Esc to close
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        buttonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const setFont = (delta: number) =>
    setState((s) => ({ ...s, fontStep: Math.max(-2, Math.min(3, s.fontStep + delta)) }));

  const toggle = (k: ToggleKey) =>
    setState((s) => ({ ...s, toggles: { ...s.toggles, [k]: !s.toggles[k] } }));

  const reset = () => setState(DEFAULT);

  const items: { key: ToggleKey; label: string; icon: React.ComponentType<{ size?: number }> }[] = [
    { key: "highContrast", label: "Alto contraste", icon: Contrast },
    { key: "grayscale", label: "Escala de cinza", icon: Droplet },
    { key: "highlightLinks", label: "Destacar links", icon: Link2 },
    { key: "readableFont", label: "Fonte legível", icon: Type },
    { key: "spacing", label: "Espaçamento do texto", icon: AlignJustify },
    { key: "pauseAnimations", label: "Pausar animações", icon: PauseCircle },
    { key: "bigCursor", label: "Cursor maior", icon: MousePointer2 },
    { key: "readingMode", label: "Modo leitura", icon: BookOpen },
  ];

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        aria-label="Abrir recursos de acessibilidade"
        aria-expanded={open}
        aria-controls="access-platform-panel"
        onClick={() => setOpen((v) => !v)}
        className="ap-pulse fixed bottom-6 right-6 z-[60] flex h-14 w-14 items-center justify-center rounded-full bg-[#2563eb] text-white shadow-[0_10px_30px_-8px_rgba(37,99,235,0.6)] ring-4 ring-white outline-none transition-transform hover:scale-110 focus-visible:ring-4 focus-visible:ring-yellow-300"
      >
        <Accessibility size={28} strokeWidth={2.2} />
      </button>

      {open && (
        <>
          <div
            className="fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm"
            onClick={() => setOpen(false)}
            aria-hidden="true"
          />
          <aside
            id="access-platform-panel"
            ref={panelRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="ap-title"
            className="fixed right-0 top-0 z-[61] flex h-full w-full max-w-sm flex-col bg-white text-slate-900 shadow-2xl animate-fade-up sm:rounded-l-2xl"
          >
            <header className="flex items-start justify-between gap-3 border-b border-slate-200 bg-gradient-to-r from-[#2563eb] to-[#5B2A73] p-5 text-white sm:rounded-tl-2xl">
              <div>
                <div className="flex items-center gap-2">
                  <Accessibility size={22} />
                  <h2 id="ap-title" className="text-lg font-bold">
                    Acessibilidade
                  </h2>
                </div>
                <p className="mt-1 text-xs opacity-90">
                  Personalize sua experiência no site.
                </p>
                <p className="mt-1 text-[11px] uppercase tracking-wider opacity-80">
                  Recursos de acessibilidade por Access Platform
                </p>
              </div>
              <button
                type="button"
                aria-label="Fechar painel de acessibilidade"
                onClick={() => setOpen(false)}
                className="rounded-full p-1.5 text-white/90 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300"
              >
                <X size={20} />
              </button>
            </header>

            <div className="flex-1 overflow-y-auto p-5">
              <section aria-labelledby="ap-font">
                <h3 id="ap-font" className="mb-2 text-sm font-semibold text-slate-700">
                  Tamanho do texto
                </h3>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => setFont(-1)}
                    aria-label="Diminuir fonte"
                    className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 font-medium hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-[#5B2A73]"
                  >
                    <Minus size={18} /> A-
                  </button>
                  <div className="min-w-[3rem] text-center text-sm tabular-nums text-slate-600">
                    {state.fontStep > 0 ? `+${state.fontStep}` : state.fontStep}
                  </div>
                  <button
                    type="button"
                    onClick={() => setFont(1)}
                    aria-label="Aumentar fonte"
                    className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-slate-50 font-medium hover:bg-slate-100 focus-visible:ring-2 focus-visible:ring-[#5B2A73]"
                  >
                    <Plus size={18} /> A+
                  </button>
                </div>
              </section>

              <section aria-labelledby="ap-tools" className="mt-6">
                <h3 id="ap-tools" className="mb-2 text-sm font-semibold text-slate-700">
                  Recursos
                </h3>
                <div className="grid grid-cols-2 gap-2">
                  {items.map(({ key, label, icon: Icon }) => {
                    const active = state.toggles[key];
                    return (
                      <button
                        key={key}
                        type="button"
                        onClick={() => toggle(key)}
                        aria-pressed={active}
                        className={`flex min-h-[78px] flex-col items-center justify-center gap-1.5 rounded-xl border p-2 text-center text-xs font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5B2A73] ${
                          active
                            ? "border-[#5B2A73] bg-[#5B2A73] text-white shadow-md"
                            : "border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100"
                        }`}
                      >
                        <Icon size={20} />
                        <span className="leading-tight">{label}</span>
                      </button>
                    );
                  })}
                </div>
              </section>

              <button
                type="button"
                onClick={reset}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl border border-yellow-300 bg-yellow-100 px-4 py-3 text-sm font-semibold text-[#5B2A73] hover:bg-yellow-200 focus-visible:ring-2 focus-visible:ring-[#5B2A73]"
              >
                <RotateCcw size={16} /> Restaurar configurações
              </button>
            </div>

            <footer className="border-t border-slate-200 bg-slate-50 p-3 text-center text-[11px] text-slate-500 sm:rounded-bl-2xl">
              Access Platform — Acessibilidade Digital
            </footer>
          </aside>
        </>
      )}
    </>
  );
}
