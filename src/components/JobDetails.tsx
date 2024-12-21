import { FaBookmark, FaClock, FaMoneyBill } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Button } from "./ui/button";

function JobDetails() {
  const jobItem = {
    id: "clxgjujzt0000zvlrapxl86nh",
    description:
      "As a full-stack developer, you will be responsible for designing, developing and deploying full-stack solutions in support of LakeOperations' core business.",
    qualifications: [
      "JavaScript",
      "CSS",
      "React",
      "HTML",
      "Node.js",
      "Responsive web design",
      "MongoDB/NoSQL",
    ],
    reviews: [
      "Best place I've ever worked. I learned a lot.",
      "I liked that we could work remotely.",
      "Very nice benefits for online learning.",
      "Great coworkers, opportunities.",
    ],
    title: "Full-Stack Developer",
    badgeLetters: "LO",
    company: "LakeOperations",
    duration: "Full-Time",
    salary: "$80,000+",
    location: "Global",
    relevanceScore: 99,
    daysAgo: 1,
    companyURL: "https://fictionallakeoperationswebsite.com",
  };
  return (
    <section className="relative overflow-auto p-8">
      <div>
        <Button size={"sm"} asChild className="absolute right-3 top-3">
          <a href={jobItem?.companyURL} target="_blank">
            Apply
          </a>
        </Button>

        <div className="space-y-4">
          <section className="flex gap-6 pt-10">
            <div>
              <div className="flex h-12 w-10 items-center justify-center rounded-sm bg-[#d0d335] font-medium">
                {jobItem?.badgeLetters}
              </div>
              <div className="mt-2 flex justify-between">
                <time className="text-xs">{jobItem?.daysAgo}d</time>

                <FaBookmark
                  className="mt-[2px] text-xs text-primary"
                  id={jobItem?.id}
                />
              </div>
            </div>

            <div className="job-info__right">
              <h2 className="text-base font-semibold text-slate-800">
                {jobItem?.title}
              </h2>
              <p className="text-sm italic">{jobItem?.company}</p>
            </div>
          </section>
          <p className="text-sm">{jobItem?.description}</p>
          <div className="flex gap-8">
            <p className="flex items-center gap-2">
              <FaClock className="text-slate-600" />
              <span className="text-sm">{jobItem?.duration}</span>
            </p>
            <p className="flex items-center gap-2">
              <FaMoneyBill className="text-slate-600" />
              <span className="text-sm">{jobItem?.salary}</span>
            </p>
            <p className="flex items-center gap-2">
              <FaLocationDot className="text-slate-600" />
              <span className="text-sm">{jobItem?.location}</span>
            </p>
          </div>

          <section className="flex">
            <div className="mr-10">
              <h4 className="text-sm font-semibold text-slate-800">
                Qualifications
              </h4>
            </div>
            <ul className="flex flex-wrap items-start gap-2">
              {jobItem?.qualifications.map((qualification) => (
                <li
                  key={qualification}
                  className="rounded-sm bg-slate-200 px-2 py-1 text-sm"
                >
                  {qualification}
                </li>
              ))}
            </ul>
          </section>

          <section className="flex">
            <div className="mr-10">
              <h4 className="text-sm font-semibold text-slate-800">
                Company reviews
              </h4>
            </div>
            <ul className="grid grid-cols-2 gap-2">
              {jobItem?.reviews.map((review) => (
                <li key={review} className="text-sm italic">
                  {review}
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </section>
  );
}
export default JobDetails;
