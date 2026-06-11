import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[85vh] overflow-hidden border-b-4 border-on-surface" id="hero">
        <div className="absolute inset-0 z-0">
          <img 
            alt="Hanns Myhulots" 
            className="w-full h-full object-cover grayscale-filter" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDHWUQ4CWJfPppyl8djfX7gFBRIIjcUdu9_U-KPavPDdZM0kStYeXz7nnFTVqvx2UuoI_HfuGop1Li7eNinaj5RqevHn1mglPOyWm_V2kpnO0ZZD49R6V1g6dDJvJ1x8YJhr62zwRHdzQPzuB4gWyHnpR5ngArOVFmtLGH--NjoeYuw9PoG4_lAiEVaD3Pyf6ZkL7PLk4Pj8WbjYky-3VHIab_kMPa9EYWyZimew7JZnz5O5MM8PKIQU2uh3lPltCRs24DNJCVjFcw" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60"></div>
        </div>
        <div className="relative z-10 h-full flex flex-col justify-end p-margin-mobile pb-12">
          <div className="space-y-0">
            <span className="bg-primary text-on-primary font-label-caps px-2 py-1 mb-4 inline-block">CONFERENCIA MAGISTRAL</span>
            <h2 className="font-headline-md text-on-surface leading-none block">HANNS</h2>
            <h2 className="font-headline-md text-primary leading-none block">MYHULOTS</h2>
            <p className="font-technical-sm mt-4 max-w-[280px] border-l-2 border-primary pl-4">
              Explorando los límites de la arquitectura y la espiritualidad en el entorno contemporáneo.
            </p>
          </div>
        </div>
        {/* Vertical Annotation */}
        <div className="absolute top-10 right-4 z-20 hidden sm:block">
          <span className="vertical-text font-label-caps text-[10px] text-secondary opacity-50 tracking-widest uppercase">ARCHITECTURAL SPLIT // VOL 01</span>
        </div>
      </section>

      {/* Scripture Block */}
      <section className="p-margin-mobile bg-surface-container-low border-b-2 border-on-surface" id="scripture">
        <div className="max-w-xl mx-auto">
          <div className="flex items-center gap-2 mb-4">
            <span className="w-8 h-[2px] bg-primary"></span>
            <h3 className="font-label-caps text-primary">LUCAS 21:34</h3>
          </div>
          <blockquote className="font-scripture italic text-xl leading-relaxed text-on-surface-variant">
            &quot;Mirad también por vosotros mismos, que vuestros corazones no se carguen de glotonería y embriaguez y de los afanes de esta vida, y venga de repente sobre vosotros aquel día.&quot;
          </blockquote>
        </div>
      </section>

      {/* Metadata Grid */}
      <section className="grid grid-cols-2 border-b-4 border-on-surface">
        {/* Col 1 */}
        <div className="p-margin-mobile border-r-2 border-on-surface bg-white">
          <p className="font-label-caps text-[10px] text-secondary mb-2">FECHA</p>
          <p className="font-headline-md leading-none">26</p>
          <p className="font-label-caps text-primary">JUNIO 2026</p>
        </div>
        {/* Col 2 */}
        <div className="p-margin-mobile bg-white">
          <p className="font-label-caps text-[10px] text-secondary mb-2">UBICACIÓN</p>
          <p className="font-headline-md leading-none">UNIVERSIDAD</p>
          <p className="font-label-caps text-primary">SANTIAGO DE QUERÉTARO</p>
        </div>
        {/* Full Width Details */}
        <div className="col-span-2 p-margin-mobile border-t-2 border-on-surface bg-surface-container">
          <div className="flex flex-col gap-4">
            <div className="flex justify-between items-center">
              <div>
                <p className="font-label-caps text-[10px] text-secondary">HORARIO</p>
                <p className="font-body-lg font-bold">17:30 <span className="text-sm font-normal opacity-80">GMT-6</span></p>
              </div>
              <div className="text-right">
                <p className="font-label-caps text-[10px] text-secondary text-right">COSTO COOPERACIÓN</p>
                <p className="font-body-lg font-bold text-primary">$100 MXN</p>
              </div>
            </div>
            <div className="pt-4 border-t border-on-surface/10">
              <p className="font-label-caps text-[10px] text-secondary">DIRECCIÓN COMPLETA</p>
              <p className="font-technical-sm">Av. Universidad, San Javier, 76020 Santiago de Querétaro, Qro.</p>
              
              <div className="mt-4">
                <p className="font-label-caps text-[10px] text-secondary mb-2">AGENDAR EN TU CALENDARIO</p>
                <div className="flex flex-wrap gap-2">
                  <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=QUINTESSENCIA+-+Hanns+Myhulots&dates=20260626T233000Z/20260627T013000Z&details=Conferencia+Magistral+por+Hanns+Myhulots&location=Av.+Universidad,+San+Javier,+76020+Santiago+de+Querétaro,+Qro." target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[10px] font-label-caps border-2 border-on-surface px-3 py-2 hover:bg-on-surface hover:text-white transition-colors bg-white">
                    <span className="material-symbols-outlined text-[14px]">calendar_today</span>
                    GOOGLE
                  </a>
                  <a href="data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0ADTSTART:20260626T233000Z%0ADTEND:20260627T013000Z%0ASUMMARY:QUINTESSENCIA%20-%20Hanns%20Myhulots%0ADESCRIPTION:Conferencia%20Magistral%20por%20Hanns%20Myhulots%0ALOCATION:Av.%20Universidad%2C%20San%20Javier%2C%2076020%20Santiago%20de%20Querétaro%2C%20Qro.%0AEND:VEVENT%0AEND:VCALENDAR" download="quintessencia.ics" className="flex items-center gap-1 text-[10px] font-label-caps border-2 border-on-surface px-3 py-2 hover:bg-on-surface hover:text-white transition-colors bg-white">
                    <span className="material-symbols-outlined text-[14px]">event</span>
                    APPLE / OUTLOOK
                  </a>
                  <a href="https://outlook.office.com/calendar/0/deeplink/compose?subject=QUINTESSENCIA+-+Hanns+Myhulots&startdt=2026-06-26T23:30:00Z&enddt=2026-06-27T01:30:00Z&body=Conferencia+Magistral+por+Hanns+Myhulots&location=Av.+Universidad,+San+Javier,+76020+Santiago+de+Querétaro,+Qro." target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 text-[10px] font-label-caps border-2 border-on-surface px-3 py-2 hover:bg-on-surface hover:text-white transition-colors bg-white">
                    <span className="material-symbols-outlined text-[14px]">cloud</span>
                    OFFICE 365
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logistics Preview / Call to Action */}
      <section className="p-margin-mobile bg-on-surface text-background text-center py-16">
        <h4 className="font-headline-md mb-4 leading-tight">PREPÁRATE PARA LA EXPERIENCIA</h4>
        <p className="font-body-md opacity-80 mb-8 max-w-xs mx-auto">Asegura tu lugar y consulta los detalles logísticos para tu llegada al Auditorio.</p>
        <div className="flex justify-center gap-4">
          <a href="https://maps.google.com/?q=Instituto+La+Paz+Queretaro" target="_blank" rel="noopener noreferrer" className="w-12 h-12 brutalist-border flex items-center justify-center bg-primary hover:bg-white group transition-colors">
            <span className="material-symbols-outlined text-white group-hover:text-primary transition-colors">location_on</span>
          </a>
          <a href="https://wa.me/524611501690?text=Hola,%20me%20interesa%20adquirir%20un%20acceso%20general%20para%20QUINTESSENCIA" target="_blank" rel="noopener noreferrer" className="w-12 h-12 brutalist-border flex items-center justify-center bg-white hover:bg-primary group transition-colors">
            <span className="material-symbols-outlined text-on-surface group-hover:text-white transition-colors">payments</span>
          </a>
        </div>
      </section>
    </>
  );
}
