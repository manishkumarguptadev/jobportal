import { cn } from "@/lib/utils";
import { JobItem } from "@/types";
import { FaBookmark } from "react-icons/fa";

type JobListItemProps = {
  jobItem: JobItem;
  isActive: boolean;
};

export default function JobListItem({ jobItem, isActive }: JobListItemProps) {
  const { id, badgeLetters, title, company, daysAgo } = jobItem;
  return (
    <li
      className={cn("transition hover:bg-[#EFF1F2] focus:bg-[#EFF1F2]", {
        "bg-[#EFF1F2]": isActive,
      })}
    >
      <a href={`#${id}`} className="flex items-center gap-4 border-b p-2">
        <div className="flex h-9 w-9 items-center justify-center rounded-sm bg-slate-200 text-xs font-medium">
          {badgeLetters}
        </div>
        <div className="grid gap-1">
          <p className="text-xs font-medium leading-none">{title}</p>
          <p className="text-xs italic">{company}</p>
        </div>
        <div className="ml-auto grid gap-1">
          <p className="text-xs font-medium leading-none">
            <FaBookmark className="text-primary" />
          </p>
          <p className="text-xs">{daysAgo}d</p>
        </div>
      </a>
    </li>
  );
}
