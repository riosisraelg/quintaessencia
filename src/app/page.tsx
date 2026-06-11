import Image from "next/image";
import Link from "next/link";
import CalendarMenu from "../components/CalendarMenu";

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
        <div className="p-margin-mobile bg-white overflow-hidden">
          <p className="font-label-caps text-[10px] text-secondary mb-2">UBICACIÓN</p>
          <p className="font-headline-md text-[24px] lg:text-headline-md leading-none break-words">AUDITORIO</p>
          <p className="font-label-caps text-primary mt-1">JUAN PABLO II</p>
          <div className="font-body-md mt-1">INSTITUTO LA PAZ</div>
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
              
              <CalendarMenu />
            </div>
          </div>
        </div>
      </section>

      {/* Purchase Process */}
      <section className="px-margin-mobile pt-16 pb-32 bg-on-surface text-background">
        <h4 className="font-headline-md mb-8 leading-tight text-center text-primary">PROCESO DE COMPRA</h4>
        
        <div className="flex flex-col gap-6 mb-12">
          {/* Step 1 */}
          <div className="flex gap-4 items-start">
            <span className="font-display-2xl text-primary text-[40px] leading-none">1</span>
            <div className="flex flex-col pt-1">
              <span className="font-label-caps mb-1">CONTÁCTANOS</span>
              <span className="font-technical-sm opacity-80">Usa nuestros botones de WhatsApp para iniciar tu registro y verificar disponibilidad.</span>
            </div>
          </div>
          
          {/* Step 2 */}
          <div className="flex gap-4 items-start">
            <span className="font-display-2xl text-primary text-[40px] leading-none">2</span>
            <div className="flex flex-col pt-1">
              <span className="font-label-caps mb-1">PAGA</span>
              <span className="font-technical-sm opacity-80">Transfiere tu donativo ($100 MXN) a nuestra cuenta oficial.</span>
            </div>
          </div>

          {/* Step 2.1 */}
          <div className="flex gap-4 items-start ml-8">
            <span className="font-display-2xl text-primary text-[24px] leading-none">2.1</span>
            <div className="flex flex-col pt-1">
              <span className="font-label-caps mb-1 text-bone-white">GUARDA EL COMPROBANTE</span>
              <span className="font-technical-sm opacity-80">Conserva el comprobante que te enviamos e identifícate bien con tu nombre en el chat.</span>
            </div>
          </div>
          
          {/* Step 3 */}
          <div className="flex gap-4 items-start">
            <span className="font-display-2xl text-primary text-[40px] leading-none">3</span>
            <div className="flex flex-col pt-1">
              <span className="font-label-caps mb-1">RECOGE TU PULSERA</span>
              <span className="font-technical-sm opacity-80">Acude a cualquiera de nuestros puntos de entrega físicos con tu confirmación en WhatsApp para recibir tu acceso.</span>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-4">
          <a href="https://www.google.com/maps/place/Auditorio+Juan+Pablo+II+Instituto+La+Paz/@20.5993921,-100.3802169,744m/data=!3m1!1e3!4m6!3m5!1s0x85d35b37365d1131:0x74e68dbcef1d429d!8m2!3d20.60003!4d-100.3775252!16s%2Fg%2F11f60tq528?entry=ttu&g_ep=EgoyMDI2MDYwMy4xIKXMDSoASAFQAw%3D%3D" target="_blank" rel="noopener noreferrer" className="w-12 h-12 brutalist-border flex items-center justify-center bg-white hover:bg-primary group transition-colors">
            <span className="material-symbols-outlined text-on-surface group-hover:text-white transition-colors">location_on</span>
          </a>
          <a href="https://wa.me/524611501690?text=Hola%20Sebastian,%20mi%20nombre%20es%20[TU%20NOMBRE].%20Me%20interesa%20solicitar%20pulseras%20para%20la%20conferencia%20de%20Hanns%20organizada%20por%20Quintessencia.%20%C2%BFMe%20podr%C3%ADan%20compartir%20los%20m%C3%A9todos%20de%20pago%20y%20pasos%20a%20seguir?" target="_blank" rel="noopener noreferrer" className="w-12 h-12 brutalist-border flex items-center justify-center bg-white hover:bg-primary group transition-colors">
            <span className="material-symbols-outlined text-on-surface group-hover:text-white transition-colors">chat</span>
          </a>
        </div>
      </section>
    </>
  );
}
