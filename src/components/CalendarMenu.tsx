"use client";

import { useState } from "react";

export default function CalendarMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="mt-6">
      <button 
        onClick={() => setIsOpen(true)}
        className="flex items-center justify-center gap-2 w-full font-label-caps border-4 border-on-surface bg-on-surface text-white p-4 hover:bg-white hover:text-on-surface transition-colors active:scale-95 group"
      >
        <span className="material-symbols-outlined text-[20px] group-hover:text-primary transition-colors">calendar_add_on</span>
        <span className="text-[14px]">AGENDAR EN TU CALENDARIO</span>
      </button>

      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-on-surface/60 backdrop-blur-md"
            onClick={() => setIsOpen(false)}
          />
          <div className="relative bg-white border-4 border-on-surface w-full max-w-xs flex flex-col shadow-[8px_8px_0px_0px_rgba(28,27,27,1)]">
            <div className="flex justify-between items-center p-4 border-b-4 border-on-surface bg-surface-container">
              <h3 className="font-headline-md text-lg uppercase text-on-surface leading-none">Elige tu app</h3>
              <button onClick={() => setIsOpen(false)} className="text-on-surface hover:text-primary transition-colors flex items-center justify-center">
                <span className="material-symbols-outlined">close</span>
              </button>
            </div>
            
            <div className="flex flex-col">
              <a 
                href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=QUINTESSENCIA+-+Hanns+Myhulots&dates=20260626T233000Z/20260627T013000Z&details=Conferencia+Magistral+por+Hanns+Myhulots%0A%0AFECHA%3A+26+de+Junio+2026%0AHORARIO%3A+17%3A30+GMT-6%0AUBICACI%C3%93N%3A+Auditorio+Juan+Pablo+II%2C+Instituto+La+Paz%0ACOSTO+COOPERACI%C3%93N%3A+%24100+MXN%0ADIRECCI%C3%93N%3A+Av.+Universidad%2C+San+Javier%2C+76020+Santiago+de+Quer%C3%A9taro%2C+Qro.%0ACONTACTO%3A+%2B52+461+150+1690+%28Sebastian%29&location=Av.+Universidad,+San+Javier,+76020+Santiago+de+Querétaro,+Qro." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 p-4 border-b-2 border-on-surface hover:bg-on-surface hover:text-white transition-colors group"
                onClick={() => setIsOpen(false)}
              >
                <span className="material-symbols-outlined text-[20px] group-hover:text-white">calendar_today</span>
                <span className="font-label-caps text-[12px]">GOOGLE CALENDAR</span>
              </a>
              
              <a 
                href="data:text/calendar;charset=utf8,BEGIN:VCALENDAR%0AVERSION:2.0%0ABEGIN:VEVENT%0ADTSTART:20260626T233000Z%0ADTEND:20260627T013000Z%0ASUMMARY:QUINTESSENCIA%20-%20Hanns%20Myhulots%0ADESCRIPTION:Conferencia%20Magistral%20por%20Hanns%20Myhulots%5Cn%5CnFECHA%3A%2026%20de%20Junio%202026%5CnHORARIO%3A%2017%3A30%20GMT-6%5CnUBICACI%C3%93N%3A%20Auditorio%20Juan%20Pablo%20II%2C%20Instituto%20La%20Paz%5CnCOSTO%20COOPERACI%C3%93N%3A%20%24100%20MXN%5CnDIRECCI%C3%93N%3A%20Av.%20Universidad%2C%20San%20Javier%2C%2076020%20Santiago%20de%20Quer%C3%A9taro%2C%20Qro.%5CnCONTACTO%3A%20%2B52%20461%20150%201690%20%28Sebastian%29%0ALOCATION:Av.%20Universidad%2C%20San%20Javier%2C%2076020%20Santiago%20de%20Querétaro%2C%20Qro.%0AEND:VEVENT%0AEND:VCALENDAR" 
                download="quintessencia.ics" 
                className="flex items-center gap-3 p-4 border-b-2 border-on-surface hover:bg-on-surface hover:text-white transition-colors group"
                onClick={() => setIsOpen(false)}
              >
                <span className="material-symbols-outlined text-[20px] group-hover:text-white">event</span>
                <span className="font-label-caps text-[12px]">APPLE / OUTLOOK</span>
              </a>
              
              <a 
                href="https://outlook.office.com/calendar/0/deeplink/compose?subject=QUINTESSENCIA+-+Hanns+Myhulots&startdt=2026-06-26T23:30:00Z&enddt=2026-06-27T01:30:00Z&body=Conferencia+Magistral+por+Hanns+Myhulots%0A%0AFECHA%3A+26+de+Junio+2026%0AHORARIO%3A+17%3A30+GMT-6%0AUBICACI%C3%93N%3A+Auditorio+Juan+Pablo+II%2C+Instituto+La+Paz%0ACOSTO+COOPERACI%C3%93N%3A+%24100+MXN%0ADIRECCI%C3%93N%3A+Av.+Universidad%2C+San+Javier%2C+76020+Santiago+de+Quer%C3%A9taro%2C+Qro.%0ACONTACTO%3A+%2B52+461+150+1690+%28Sebastian%29&location=Av.+Universidad,+San+Javier,+76020+Santiago+de+Querétaro,+Qro." 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 p-4 hover:bg-on-surface hover:text-white transition-colors group"
                onClick={() => setIsOpen(false)}
              >
                <span className="material-symbols-outlined text-[20px] group-hover:text-white">cloud</span>
                <span className="font-label-caps text-[12px]">MICROSOFT</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
