import Image from "next/image";

interface BrandMarkProps {
  className?: string;
}

export default function BrandMark({ className = "" }: BrandMarkProps) {
  return <Image src="/images/leano-digital-group-logo.svg" alt="Leano Digital Group" width={190} height={40} className={`h-9 w-auto ${className}`} priority />;
}
