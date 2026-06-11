import Image from "next/image";

export default function SobreNosotros() {
  return (
    <>
      {/* Header Image & Slogan */}
      <div className="border-b-4 border-on-surface mb-10 overflow-hidden bg-on-surface" id="hero">
        <img 
          alt="Biography Header" 
          className="w-full h-[60vh] md:h-[70vh] object-cover object-top" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuBX3RelXZWbpxSO0WdgwRLBBxvmhrPIl2WIL8mv72Nt6X2rf7x7dO4Ogsr2y_AOq1ThG2HM-Pr1tNSZJTxB75uaXZ0DEAWWjXRK3YvuVi-N6zgCaljJ0R8NiFXzWnanO60TM6a-S5LSa7vhpsW28vsu4mblhPaT2k6YVExBd604i6l0oqVGp4eZkD01Hm8AUyHCg1Q7SBSSd_v_GXrxKyqQYyxscCYDO5XpYDhWaHzYJgdxOTtmpUhr8fzcdYM_d1BQf1C02wD5gUQ" 
        />
        <div className="p-6 bg-on-surface text-white">
          <h2 className="font-display-2xl text-[40px] uppercase leading-none tracking-tighter italic">
            MI HISTORIA PUEDE CAMBIAR TU HISTORIA
          </h2>
        </div>
      </div>

      {/* Biography Section */}
      <section className="p-margin-mobile border-b-4 border-on-surface bg-white" id="biography">
        <h3 className="font-headline-md mb-6 inline-block uppercase text-primary">¿Quién es Hanns?</h3>
        <div className="drop-cap font-body-lg leading-relaxed text-justify">
          Es un reconocido conferencista internacional, escritor y activista social. Su historia es un testimonio de resiliencia y superación personal. Durante su juventud en Europa, se vio envuelto en un entorno destructivo marcado por las adicciones severas a las drogas y la vida en las calles. Debido a una sobredosis y a las condiciones extremas que vivió en esa etapa, sufrió una grave complicación médica que derivó en la amputación de ambas piernas.
        </div>
      </section>

      {/* Event Details Section */}
      <section className="p-margin-mobile bg-surface-container border-b-4 border-on-surface">
        <h3 className="font-label-caps text-primary mb-2">EL PROPÓSITO</h3>
        <h4 className="font-headline-md mb-4 leading-none uppercase">Detalles del Evento</h4>
        <p className="font-body-md border-t-2 border-on-surface pt-4">
          QUINTESSENCIA es un encuentro diseñado para confrontar nuestra realidad y despertar el potencial latente. El objetivo principal es inspirar a las personas a encontrar esperanza y amor en sus vidas, demostrándose que es posible superar las adversidades y las adicciones.
        </p>
      </section>

      {/* Logistic Points */}
      <section className="p-margin-mobile border-b-4 border-on-surface bg-white" id="logistics">
        <h3 className="font-headline-md mb-6 uppercase text-primary">Puntos de Entrega</h3>
        <div className="flex flex-col border-t-2 border-on-surface">
          {/* Delivery Points */}
          {[
            { 
              zone: "CENTRO", 
              name: "Parroquia de la Sagrada Familia", 
              note: "Entrega en el jardín de enfrente (parque de la parroquia)",
              hours: "Días 12, 15, 16, 19 y 23 de 7:15 pm a 9:00 pm",
              chat: "https://wa.me/524461231497", 
              map: "https://maps.google.com/?q=Parroquia+de+la+Sagrada+Familia" 
            },
            { 
              zone: "CORREGIDORA", 
              name: "Stacia Towers Corregidora", 
              note: "Junto a deportiva UAQ (Entrega en caseta)",
              hours: "L-V de 1:00 pm a 5:00 pm",
              chat: "https://walink.co/baowsb", 
              map: "https://maps.google.com/?cid=8974638117118952670" 
            },
            { 
              zone: "ZONA NORTE", 
              name: "Carlota (Dptos Manahal)", 
              note: "Condominio Mahjabi dpt. X5",
              hours: "L-V de 2:00 pm a 4:00 pm",
              chat: "https://walink.co/pbidqy", 
              map: "https://maps.app.goo.gl/1DwiCD4bjCB8yd3j9" 
            },
            { 
              zone: "HISTÓRICO", 
              name: "Templo de Santa Rosa de Viterbo", 
              note: "Preguntar en las oficinas",
              hours: "L-V 10am-2pm / 4pm-7pm, Dom 7am-8pm",
              map: "https://maps.app.goo.gl/CGGuw8jR8jKj7oxH6" 
            },
          ].map((point, index) => (
            <div key={index} className="flex justify-between items-start md:items-center py-4 px-4 -mx-4 border-b-2 border-on-surface hover:bg-on-surface hover:text-bone-white transition-colors group">
              <div className="flex flex-col pr-4">
                <span className="font-label-caps opacity-60 mb-1">{point.zone}</span>
                <span className="font-headline-md text-[18px] leading-tight mb-1">{point.name}</span>
                <span className="font-technical-sm text-[12px] opacity-80">{point.note}</span>
                <span className="font-technical-sm text-[12px] opacity-80 mt-0.5">{point.hours}</span>
              </div>
              <div className="flex gap-4 shrink-0 mt-2 md:mt-0">
                {point.chat && (
                  <a href={point.chat} target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-on-surface group-hover:border-bone-white transition-colors bg-white group-hover:bg-on-surface text-on-surface group-hover:text-bone-white self-center">
                    <span className="material-symbols-outlined align-middle">chat</span>
                  </a>
                )}
                {point.map && (
                  <a href={point.map} target="_blank" rel="noopener noreferrer" className="p-2 border-2 border-on-surface group-hover:border-bone-white transition-colors bg-white group-hover:bg-on-surface text-on-surface group-hover:text-bone-white self-center">
                    <span className="material-symbols-outlined align-middle">location_on</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sponsorship */}
      <section className="p-margin-mobile bg-white pt-8 pb-12">
        <h3 className="font-headline-md mb-4 uppercase text-on-surface">Súmate a la Causa</h3>
        <p className="font-body-md mb-6">Estamos buscando patrocinadores para este evento. Tu cooperación no es solo un patrocinio, es una semilla de esperanza en la vida de cientos de jóvenes y tu empresa podrá anunciarse entre la lista de patrocinadores dentro del evento.</p>
        <div className="flex flex-col gap-4">
          <a href="tel:+524611501690" className="flex items-center gap-4 bg-background p-4 border-2 border-on-surface hover:bg-on-surface hover:text-bone-white transition-colors group">
            <span className="material-symbols-outlined text-primary group-hover:text-bone-white transition-colors">call</span>
            <span className="font-technical-sm">461 150 1690</span>
          </a>
          <a href="tel:+524613787255" className="flex items-center gap-4 bg-background p-4 border-2 border-on-surface hover:bg-on-surface hover:text-bone-white transition-colors group">
            <span className="material-symbols-outlined text-primary group-hover:text-bone-white transition-colors">call</span>
            <span className="font-technical-sm">461 378 7255</span>
          </a>
        </div>
      </section>
    </>
  );
}
