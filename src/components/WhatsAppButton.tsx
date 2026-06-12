"use client";

import { useState } from "react";

interface WhatsAppButtonProps {
  href: string;
  className?: string;
  children: React.ReactNode;
}

export default function WhatsAppButton({ href, className, children }: WhatsAppButtonProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [name, setName] = useState("");

  const handleContinue = () => {
    if (!name.trim()) return;
    
    const encodedName = encodeURIComponent(name.trim());
    // Replace both the literal bracket string and the URL-encoded version
    const finalUrl = href
      .replace("[TU NOMBRE]", encodedName)
      .replace("%5BTU%20NOMBRE%5D", encodedName);
    
    window.open(finalUrl, "_blank", "noopener,noreferrer");
    setIsModalOpen(false);
    setName("");
  };

  return (
    <>
      <button 
        onClick={() => setIsModalOpen(true)} 
        className={className}
      >
        {children}
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
          <div className="bg-surface-container border-4 border-on-surface p-6 shadow-[8px_8px_0px_0px_rgba(28,27,27,1)] max-w-sm w-full relative">
            
            <button 
              onClick={() => setIsModalOpen(false)}
              className="absolute top-2 right-2 w-8 h-8 flex items-center justify-center bg-white border-2 border-on-surface hover:bg-primary hover:text-white transition-colors"
            >
              <span className="material-symbols-outlined text-sm">close</span>
            </button>

            <h3 className="font-headline-md text-primary uppercase leading-tight mb-2 pr-6">
              ¿Cómo te llamas?
            </h3>
            <p className="font-technical-sm opacity-80 mb-6">
              Escribe tu nombre para personalizar el mensaje de WhatsApp.
            </p>

            <input 
              type="text" 
              placeholder="Ej. Juan Pérez"
              value={name}
              onChange={(e) => setName(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") handleContinue();
              }}
              className="w-full bg-white border-2 border-on-surface p-3 font-body-md mb-4 focus:outline-none focus:border-primary transition-colors"
            />

            <button 
              onClick={handleContinue}
              disabled={!name.trim()}
              className="w-full py-3 bg-primary text-bone-white font-label-caps border-2 border-on-surface hover:bg-on-surface transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              IR A WHATSAPP
            </button>
          </div>
        </div>
      )}
    </>
  );
}
