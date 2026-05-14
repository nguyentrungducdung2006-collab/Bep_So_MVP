import { ChevronDown, ChevronRight } from 'lucide-react';

export default function SectionHeader({ title, action, dropdown }) {
  const Icon = dropdown ? ChevronDown : ChevronRight;

  return (
    <div className="mb-3 mt-7 flex items-center justify-between">
      <h2 className="text-[21px] font-extrabold tracking-normal text-ink">{title}</h2>
      {action ? (
        <button
          type="button"
          className="inline-flex items-center gap-1 text-[14px] font-medium text-ink/56 transition-colors hover:text-ink"
        >
          {action}
          <Icon className="h-4 w-4" />
        </button>
      ) : null}
    </div>
  );
}
