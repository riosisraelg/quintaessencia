import Image from "next/image";
import PaymentMenu from "@/components/PaymentMenu";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: "Info & Tickets | QUINTESSENCIA",
  description: "Detalles del evento, puntos de entrega y proceso de compra.",
};

export default function InfoTickets() {
  return (
    <>
      {/* Header Image & Slogan */}
      <div className="border-b-4 border-on-surface mb-10 overflow-hidden bg-on-surface" id="hero">
        <img 
          alt="Biography Header" 
          className="w-full h-[60vh] md:h-[70vh] object-cover object-center" 
          src="/hero-info.jpeg" 
        />
        <div className="p-6 bg-on-surface text-white">
          <h2 className="font-display-2xl text-[40px] uppercase leading-none tracking-tighter italic">
            Mi testimonio. Mi propósito. Mi impacto.
          </h2>
        </div>
      </div>

      {/* Biography Section */}
      <section className="p-margin-mobile border-b-4 border-on-surface bg-white" id="biography">
        <h3 className="font-headline-md mb-6 inline-block uppercase text-primary">El Rostro de la Resiliencia</h3>
        <div className="drop-cap font-body-lg leading-relaxed text-justify">
          Es un reconocido conferencista internacional, escritor y activista social. Su historia es un testimonio de resiliencia y superación personal. Durante su juventud en Europa, se vio envuelto en un entorno destructivo marcado por las adicciones severas a las drogas y la vida en las calles. Debido a una sobredosis y a las condiciones extremas que vivió en esa etapa, sufrió una grave complicación médica que derivó en la amputación de ambas piernas.
        </div>
      </section>

      {/* Event Details */}
      <section className="p-margin-mobile bg-surface-container border-b-4 border-on-surface">
        <div className="bg-white border-2 border-on-surface p-4 md:p-6 shadow-[4px_4px_0px_0px_rgba(28,27,27,1)]">
          <span className="font-label-caps text-primary text-[10px] uppercase font-bold tracking-widest block mb-1">EL PROPÓSITO</span>
          <h4 className="font-display-2xl text-[28px] md:text-[36px] uppercase leading-none mb-4">UNA EXPERIENCIA PARA SANAR</h4>
          <p className="font-body-md border-t-2 border-on-surface pt-4">
            QUINTESSENCIA es un encuentro diseñado para confrontar nuestra realidad y despertar el potencial latente. El objetivo principal es inspirar a las personas a encontrar esperanza y amor en sus vidas, demostrándose que es posible superar las adversidades y las adicciones.
          </p>
        </div>
      </section>

      {/* Logistic Points */}
      <section className="p-margin-mobile border-b-4 border-on-surface bg-white" id="logistics">
        <h3 className="font-display-2xl text-[32px] md:text-[40px] uppercase leading-none inline-block border-b-4 border-on-surface mb-8 pb-1 text-on-surface">EL COMIENZO DEL CAMINO</h3>
        
        {/* Payment Process */}
        <div className="mb-10 p-4 border-2 border-on-surface bg-surface-container shadow-[4px_4px_0px_0px_rgba(28,27,27,1)]">
          <h4 className="font-headline-md mb-4 uppercase text-primary">Tu Pasaporte al Evento</h4>
          <div className="font-body-md mb-6 flex flex-col gap-3">
            <p><strong>1. CONTÁCTANOS:</strong> Usa los botones de WhatsApp de abajo para iniciar tu registro y verificar disponibilidad.</p>
            <p><strong>2. PAGA:</strong> La cooperación es de $100 MXN. Haz clic en el botón de abajo para transferir a nuestra cuenta oficial.</p>
            <p className="ml-4 opacity-80"><strong>2.1. GUARDA EL COMPROBANTE:</strong> Conserva el comprobante e identifícate con tu nombre en el chat.</p>
            <p><strong>3. RECOGE TU PULSERA:</strong> Acude a tu punto de entrega con tu confirmación.</p>
          </div>
          <PaymentMenu />
        </div>

        <div className="flex flex-col border-t-2 border-on-surface">
          {/* Delivery Points */}
          {[
            { 
              zone: "CENTRO", 
              name: "Parroquia de la Sagrada Familia", 
              note: "Entrega en el jardín de enfrente (parque de la parroquia)",
              hours: "Días 12, 15, 16, 19 y 23 de 7:15 pm a 9:00 pm",
              chat: "https://wa.me/524461231497?text=Hola%20Alan,%20mi%20nombre%20es%20[TU%20NOMBRE].%20Me%20interesa%20solicitar%20pulseras%20para%20recoger%20en%20la%20Parroquia%20de%20la%20Sagrada%20Familia%20para%20la%20conferencia%20de%20Hanns%20organizada%20por%20Quintessencia.%20%C2%BFMe%20podr%C3%ADan%20compartir%20los%20m%C3%A9todos%20de%20pago%20y%20pasos%20a%20seguir?", 
              map: "https://www.google.com/maps?q=Parroquia+de+la+Sagrada+Familia" 
            },
            { 
              zone: "CORREGIDORA", 
              name: "Stacia Towers Corregidora", 
              note: "Junto a deportiva UAQ (Entrega en caseta)",
              hours: "L-V de 1:00 pm a 5:00 pm",
              chat: "https://wa.me/524613787255?text=Hola%20Rodrigo,%20mi%20nombre%20es%20[TU%20NOMBRE].%20Me%20interesa%20solicitar%20pulseras%20para%20recoger%20en%20Stacia%20Towers%20para%20la%20conferencia%20de%20Hanns%20organizada%20por%20Quintessencia.%20%C2%BFMe%20podr%C3%ADan%20compartir%20los%20m%C3%A9todos%20de%20pago%20y%20pasos%20a%20seguir?", 
              map: "https://www.google.com/maps/place/Stacia+Towers+Corregidora/@20.553779,-100.423823,16.53z/data=!4m6!3m5!1s0x85d3451a5b1c5c7f:0x7c8c51d15e8e44de!8m2!3d20.5538326!4d-100.4226077!16s%2Fg%2F11pvlq89_k?entry=ttu&g_ep=EgoyMDI2MDYwMy4xIKXMDSoASAFQAw%3D%3D" 
            },
            { 
              zone: "ZONA NORTE", 
              name: "Carlota (Dptos Manahal)", 
              note: "Condominio Mahjabi dpt. X5",
              hours: "L-V de 2:00 pm a 4:00 pm",
              chat: "https://wa.me/524611501690?text=Hola%20Sebastian,%20mi%20nombre%20es%20[TU%20NOMBRE].%20Me%20interesa%20solicitar%20pulseras%20para%20recoger%20en%20Condominio%20Mahjabi,%20Carlota%20para%20la%20conferencia%20de%20Hanns%20organizada%20por%20Quintessencia.%20%C2%BFMe%20podr%C3%ADan%20compartir%20los%20m%C3%A9todos%20de%20pago%20y%20pasos%20a%20seguir?", 
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
                  <WhatsAppButton href={point.chat} className="p-2 border-2 border-on-surface group-hover:border-bone-white transition-colors bg-white group-hover:bg-on-surface text-on-surface group-hover:text-bone-white self-center">
                    <span className="material-symbols-outlined align-middle">chat</span>
                  </WhatsAppButton>
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
      <section className="px-margin-mobile bg-white pt-8 pb-32">
        <h3 className="font-headline-md mb-2 uppercase text-on-surface">Únete a nuestra Historia</h3>
        <p className="font-label-caps opacity-60 mb-2">SÉ EL MILAGRO DE ALGUIEN MÁS</p>
        <p className="font-display-2xl text-[24px] mb-4 text-primary leading-none uppercase">Nuestra meta es de $40,000 MXN</p>
        <p className="font-body-md mb-4">
          Buscamos patrocinadores que nos ayuden a cubrir los gastos operativos del evento y hacerlo accesible. 
          El apoyo puede realizarse en <strong>efectivo o en especie</strong>, y será destinado a cubrir:
        </p>
        <ul className="font-body-md mb-8 ml-6 list-disc opacity-80 flex flex-col gap-1">
          <li>Alimentos/catering</li>
          <li>Hospedaje (1 noche)</li>
          <li>Transporte (Aeropuerto-Recinto)</li>
          <li>Materiales impresos</li>
        </ul>
        <div className="flex flex-col gap-4">
          <div className="flex gap-4">
            <a href="tel:+524611501690" className="flex-1 flex items-center justify-center gap-4 bg-background p-4 border-2 border-on-surface hover:bg-on-surface hover:text-bone-white transition-colors group">
              <span className="material-symbols-outlined text-primary group-hover:text-bone-white transition-colors">call</span>
              <span className="font-technical-sm">Llamar</span>
            </a>
            <WhatsAppButton href="https://wa.me/524611501690?text=Hola%20Sebastian,%20mi%20nombre%20es%20[TU%20NOMBRE].%20Me%20interesa%20sumarme%20como%20patrocinador%20para%20la%20conferencia%20de%20Hanns%20organizada%20por%20Quintessencia.%20%C2%BFMe%20podr%C3%ADan%20dar%20m%C3%A1s%20informaci%C3%B3n?" className="flex-1 flex items-center justify-center gap-4 bg-background p-4 border-2 border-on-surface hover:bg-on-surface hover:text-bone-white transition-colors group">
              <span className="material-symbols-outlined text-primary group-hover:text-bone-white transition-colors">chat</span>
              <span className="font-technical-sm">461 150 1690</span>
            </WhatsAppButton>
          </div>
          <div className="flex gap-4">
            <a href="tel:+524613787255" className="flex-1 flex items-center justify-center gap-4 bg-background p-4 border-2 border-on-surface hover:bg-on-surface hover:text-bone-white transition-colors group">
              <span className="material-symbols-outlined text-primary group-hover:text-bone-white transition-colors">call</span>
              <span className="font-technical-sm">Llamar</span>
            </a>
            <WhatsAppButton href="https://wa.me/524613787255?text=Hola%20Rodrigo,%20mi%20nombre%20es%20[TU%20NOMBRE].%20Me%20interesa%20sumarme%20como%20patrocinador%20para%20la%20conferencia%20de%20Hanns%20organizada%20por%20Quintessencia.%20%C2%BFMe%20podr%C3%ADan%20dar%20m%C3%A1s%20informaci%C3%B3n?" className="flex-1 flex items-center justify-center gap-4 bg-background p-4 border-2 border-on-surface hover:bg-on-surface hover:text-bone-white transition-colors group">
              <span className="material-symbols-outlined text-primary group-hover:text-bone-white transition-colors">chat</span>
              <span className="font-technical-sm">461 378 7255</span>
            </WhatsAppButton>
          </div>
        </div>
      </section>
    </>
  );
}
