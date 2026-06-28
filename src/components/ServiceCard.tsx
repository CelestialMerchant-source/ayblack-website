import { ServiceIcon } from "./icons";

export type Service = {
  id: string;
  title: string;
  description: string;
  icon: string;
};

export default function ServiceCard({ service }: { service: Service }) {
  return (
    <div className="reveal group bg-charcoal-light border border-gold/15 rounded-2xl p-7 hover:border-gold/50 hover:-translate-y-1.5 transition-all duration-300">
      <div className="w-14 h-14 rounded-xl bg-gold/10 flex items-center justify-center text-gold mb-5 group-hover:bg-gold group-hover:text-charcoal transition-colors">
        <ServiceIcon name={service.icon} />
      </div>
      <h3 className="font-display text-xl font-semibold mb-2 text-cream">
        {service.title}
      </h3>
      <p className="text-cream/60 text-sm leading-relaxed">
        {service.description}
      </p>
    </div>
  );
}
