import JobItem from "@/types/JobItem";
import { FaBookmark } from "react-icons/fa";
function JobListItem({ jobItem }: { jobItem: JobItem }) {
  const { badgeLetters, title, company, daysAgo } = jobItem;
  return (
    <li className="flex items-center gap-4 border-b py-2">
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
    </li>
  );
}

export default JobListItem;
