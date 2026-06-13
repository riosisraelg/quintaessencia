import Image from "next/image";
import Link from "next/link";
import CalendarMenu from "../components/CalendarMenu";
import WhatsAppButton from "@/components/WhatsAppButton";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[85vh] overflow-hidden border-b-4 border-on-surface" id="hero">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Hanns Myhulots" 
            className="w-full h-full object-cover" 
            src="/hero-info.jpeg" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col justify-end p-margin-mobile pb-6">
          <div className="space-y-0">
            <div className="flex flex-nowrap items-center gap-2 mb-2 w-full overflow-visible">
              <span className="bg-primary text-on-primary font-label-caps text-[8px] md:text-[12px] px-2 py-1 whitespace-nowrap">UNA HISTORIA QUE CAMBIARÁ LA TUYA</span>
              <span className="text-on-surface font-light opacity-60 text-sm">|</span>
              <h2 className="font-headline-md text-on-surface leading-none drop-shadow-md text-[16px] md:text-[32px] whitespace-nowrap">HANNS MYHULOTS</h2>
            </div>
            
            <div className="flex flex-col gap-2 mt-2 bg-on-surface p-3 border-2 border-primary text-bone-white w-[85%] md:w-[40%]">
              <div className="grid grid-cols-2 gap-2">
                <div className="flex flex-col border-r border-bone-white/20 pr-2">
                  <span className="font-label-caps text-[8px] text-primary">FECHA</span>
                  <span className="font-technical-sm font-bold text-[12px]">26 JUNIO 2026</span>
                </div>
                <div className="flex flex-col pl-1">
                  <span className="font-label-caps text-[8px] text-primary">HORARIO</span>
                  <span className="font-technical-sm font-bold text-[12px]">17:30 GMT-6</span>
                </div>
              </div>
              
              <div className="flex flex-col pt-1.5 border-t border-bone-white/20">
                <span className="font-label-caps text-[8px] text-primary">LUGAR</span>
                <span className="font-technical-sm font-bold text-[12px] leading-tight">AUDITORIO JUAN PABLO II, INSTITUTO LA PAZ</span>
                <span className="font-technical-sm opacity-80 text-[10px] mt-0.5 leading-tight">Av. Universidad, San Javier, 76020 Santiago de Querétaro, Qro.</span>
              </div>

              <div className="flex flex-col pt-1.5 border-t border-bone-white/20">
                <span className="font-label-caps text-[8px] text-primary">ACCESO</span>
                <span className="font-technical-sm font-bold text-primary text-[12px]">$100 MXN</span>
              </div>
            </div>
          </div>
        </div>
        {/* Vertical Annotation */}
        <div className="absolute top-10 right-4 z-20 hidden sm:block">
          <span className="vertical-text font-label-caps text-[10px] text-secondary opacity-50 tracking-widest uppercase">QUINTESSENCIA // VOL 01</span>
        </div>
      </section>

      {/* Action Buttons */}
      <section className="p-margin-mobile pb-32 md:pb-12 bg-white border-b-4 border-on-surface flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <CalendarMenu />
        </div>
        <Link 
          href="/info-tickets" 
          className="flex-1 w-full bg-primary text-bone-white p-4 font-label-caps border-2 border-on-surface shadow-[4px_4px_0px_0px_rgba(28,27,27,1)] hover:bg-on-surface hover:text-bone-white hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_rgba(28,27,27,1)] transition-all flex items-center justify-center gap-2"
        >
          <span className="material-symbols-outlined">local_activity</span>
          COMPRAR PULSERA
        </Link>
      </section>






    </>
  );
}
