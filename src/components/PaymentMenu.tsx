"use client";

import { useState } from "react";

export default function PaymentMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const handleCopy = (text: string, fieldName: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(fieldName);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <div className="mt-6 w-full">
      <button 
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-center gap-2 w-full font-label-caps border-4 border-on-surface bg-primary text-white p-4 hover:bg-on-surface transition-colors active:scale-95 group"
      >
        <span className="material-symbols-outlined text-[20px] group-hover:text-bone-white transition-colors">account_balance</span>
        <span className="text-[14px]">VER DATOS DE PAGO</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-on-surface/60 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative bg-white border-4 border-on-surface w-full max-w-sm flex flex-col shadow-[8px_8px_0px_0px_rgba(28,27,27,1)] max-h-[90vh] overflow-y-auto">
            <div className="flex justify-between items-center p-4 border-b-4 border-on-surface bg-surface-container">
              <h3 className="font-headline-md text-lg uppercase text-on-surface leading-none">Información de Pago</h3>
              <button onClick={() => setIsOpen(false)} className="text-on-surface hover:text-primary transition-colors flex items-center justify-center">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <div className="flex flex-col p-6 gap-6">
              <div className="bg-yellow-100 border-2 border-yellow-400 p-3 flex items-center gap-2 text-yellow-800">
                <span className="material-symbols-outlined">construction</span>
                <span className="font-technical-sm">Sección en construcción. Datos genéricos.</span>
              </div>

              {/* Data Block */}
              <div className="flex flex-col gap-4">
                {/* Beneficiary */}
                <button 
                  onClick={() => handleCopy("NOMBRE COMPLETO GENÉRICO", "beneficiary")}
                  className="flex flex-col items-center justify-center border-2 border-on-surface p-4 hover:bg-surface-container transition-colors active:scale-95 w-full text-center"
                >
                  <span className="font-label-caps opacity-60 mb-1">BENEFICIARIO</span>
                  <span className="font-display-2xl text-[20px] mb-2 break-all">
                    {copiedField === "beneficiary" ? "¡COPIADO!" : "NOMBRE COMPLETO GENÉRICO"}
                  </span>
                  <span className="font-technical-sm opacity-60">
                    <span className="md:hidden">Tap</span>
                    <span className="hidden md:inline">Clic</span> para copiar
                  </span>
                </button>

                {/* Bank */}
                <button 
                  onClick={() => handleCopy("BANCO 000", "bank")}
                  className="flex flex-col items-center justify-center border-2 border-on-surface p-4 hover:bg-surface-container transition-colors active:scale-95 w-full text-center"
                >
                  <span className="font-label-caps opacity-60 mb-1">BANCO</span>
                  <span className="font-display-2xl text-[24px] mb-2 break-all">
                    {copiedField === "bank" ? "¡COPIADO!" : "BANCO 000"}
                  </span>
                  <span className="font-technical-sm opacity-60">
                    <span className="md:hidden">Tap</span>
                    <span className="hidden md:inline">Clic</span> para copiar
                  </span>
                </button>

                {/* CLABE */}
                <button 
                  onClick={() => handleCopy("000000000000000000", "clabe")}
                  className="flex flex-col items-center justify-center border-2 border-on-surface p-4 hover:bg-surface-container transition-colors active:scale-95 w-full text-center bg-on-surface text-white hover:text-on-surface"
                >
                  <span className="font-label-caps opacity-80 mb-1">CLABE INTERBANCARIA</span>
                  <span className="font-display-2xl text-[24px] mb-2 break-all">
                    {copiedField === "clabe" ? "¡COPIADO!" : "000 000 0000000000 0"}
                  </span>
                  <span className="font-technical-sm opacity-80">
                    <span className="md:hidden">Tap</span>
                    <span className="hidden md:inline">Clic</span> para copiar
                  </span>
                </button>
              </div>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}
