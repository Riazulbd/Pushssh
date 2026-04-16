import boomtownLogo from '../assets/logos/boomtown.webp';
import buildiumLogo from '../assets/logos/buildium.png';
import cincproLogo from '../assets/logos/cincpro.svg';
import followupBossLogo from '../assets/logos/followup-boss.png';
import goHighLevelLogo from '../assets/logos/go-high-level.png';
import hubspotLogo from '../assets/logos/hubspot.png';
import kvcoreLogo from '../assets/logos/kvcore.png';
import lionDeskLogo from '../assets/logos/lion-desk.png';
import loftyLogo from '../assets/logos/lofty.svg';
import notionLogo from '../assets/logos/notion.png';
import realGeeksLogo from '../assets/logos/realgeeks.png';
import vapiLogo from '../assets/logos/vapi.avif';
import wiseAgentLogo from '../assets/logos/wise-agent.svg';
import zillowLogo from '../assets/logos/zillow.png';

const logos = [
  { name: 'BoomTown', src: boomtownLogo },
  { name: 'Buildium', src: buildiumLogo },
  { name: 'CINC Pro', src: cincproLogo },
  { name: 'Follow Up Boss', src: followupBossLogo },
  { name: 'GoHighLevel', src: goHighLevelLogo },
  { name: 'HubSpot', src: hubspotLogo },
  { name: 'kvCORE', src: kvcoreLogo },
  { name: 'LionDesk', src: lionDeskLogo },
  { name: 'Lofty', src: loftyLogo },
  { name: 'Notion', src: notionLogo },
  { name: 'Real Geeks', src: realGeeksLogo },
  { name: 'Vapi', src: vapiLogo },
  { name: 'Wise Agent', src: wiseAgentLogo },
  { name: 'Zillow', src: zillowLogo },
];

export default function Marquee() {
  return (
    <section className="bg-surface overflow-hidden border-y border-outline-variant/10 py-10 sm:py-16">
      <div className="flex items-center gap-4 whitespace-nowrap animate-marquee sm:gap-6">
        {[...logos, ...logos].map((logo, i) => (
          <div
            key={`${logo.name}-${i}`}
            className="flex h-16 min-w-[150px] items-center justify-center rounded-xl border border-outline-variant/10 bg-white px-4 shadow-sm transition-all duration-500 hover:-translate-y-1 hover:shadow-md sm:h-20 sm:min-w-[190px] sm:rounded-2xl sm:px-6"
          >
            <img
              className="max-h-8 w-auto max-w-full object-contain opacity-60 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0 sm:max-h-10"
              src={logo.src}
              alt={`${logo.name} logo`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
