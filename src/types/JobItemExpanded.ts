import JobItem from "./JobItem";

 type JobItemExpanded = JobItem & {
    description: string;
    qualifications: string[];
    reviews: string[];
    duration: string;
    location: string;
    salary: string;
    companyURL: string;
  };

  export default JobItemExpanded