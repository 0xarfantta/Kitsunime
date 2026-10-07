"use client";

import { Check, Info, Trash2, Bookmark, Link as LinkIcon, Palette } from "lucide-react";

interface ToastProps {
  toast: {
    message: string;
    icon: string;
    visible: boolean;
  };
}

export default function ToastNotification({ toast }: ToastProps) {
  const getIcon = () => {
    switch (toast.icon) {
      case "fa-trash":
        return <Trash2 className="w-4 h-4 text-white" />;
      case "fa-bookmark":
        return <Bookmark className="w-4 h-4 text-white" />;
      case "fa-link":
        return <LinkIcon className="w-4 h-4 text-white" />;
      case "fa-palette":
        return <Palette className="w-4 h-4 text-white" />;
      default:
        return <Check className="w-4 h-4 text-white" />;
    }
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 transform ${
        toast.visible
          ? "translate-y-0 opacity-100"
          : "translate-y-20 opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex items-center gap-3 px-4 py-3 rounded-2xl bg-stone-900/90 dark:bg-brand-dark-card/95 text-white shadow-2xl border border-brand-orange/40 backdrop-blur-xl">
        <div className="w-8 h-8 rounded-xl bg-gradient-to-br from-brand-orange to-brand-yellow flex items-center justify-center shadow-glow-orange flex-shrink-0">
          {getIcon()}
        </div>
        <p className="text-xs font-bold text-stone-100">{toast.message}</p>
      </div>
    </div>
  );
}
