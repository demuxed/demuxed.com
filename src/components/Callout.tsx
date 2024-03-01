import { InformationCircleIcon } from '@heroicons/react/20/solid';

export default function Callout({ children }: { children: React.ReactNode }) {
  return (
    <div className="p-4 border bg-black flex text-white">
      <InformationCircleIcon className="h-6 w-6 mx-2" />
      {children}
    </div>
  );
}
