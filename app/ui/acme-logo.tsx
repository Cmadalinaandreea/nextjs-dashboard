import { GlobeAltIcon } from '@heroicons/react/24/outline';
import { lusitana } from '@/app/ui/fonts';
import Image from 'next/image';

export default function AcmeLogo() {
  return (
    <div className={`flex self-center`}>
      <Image
        src="/logo-light-transparent.png"
        height={200}
        width={200}
        alt="logo"
      />
    </div>
  );
}
