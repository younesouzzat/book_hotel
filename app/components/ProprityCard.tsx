import { LucideIcon } from 'lucide-react';

type PropertyCardProps = {
  data: {
    src: string;
    icon: LucideIcon;
    title: string;
    number: string;
  };
};

const PropertyCard = ({ data }: PropertyCardProps) => {
  const Icon = data.icon;
  return (
    <div>
      <Icon />
    </div>
  );
};

export default PropertyCard;