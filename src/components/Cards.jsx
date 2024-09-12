import React from "react";
import { useSelector } from "react-redux";

// Ishlar haqida ma'lumotlar
const initialJobs = [
  {
    title: "Frontend Developer",
    company: "Google",
    location: "Mountain View, CA",
    salary: "$120,000",
    image:
      "https://i.pinimg.com/originals/8d/fa/c6/8dfac69cd7228fd51075b7c2919054d1.jpg",
  },
  {
    title: "Data Scientist",
    company: "Amazon",
    location: "Seattle, WA",
    salary: "$135,000",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
  },
  {
    title: "Backend Developer",
    company: "Microsoft",
    location: "Redmond, WA",
    salary: "$125,000",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
  },
  {
    title: "Product Manager",
    company: "Apple",
    location: "Cupertino, CA",
    salary: "$150,000",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
  },
  {
    title: "AI Researcher",
    company: "OpenAI",
    location: "San Francisco, CA",
    salary: "$200,000",
    image: "https://overclockers.ru/st/legacy/blog/373654/404001_O.jpg",
  },
  {
    title: "DevOps Engineer",
    company: "Netflix",
    location: "Los Gatos, CA",
    salary: "$145,000",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg",
  },
];

function JobCardList() {
  const [jobs] = React.useState(initialJobs);
  const isDarkMode = useSelector((state) => state.theme.darkMode);

  // Save job data to localStorage
  const handleSave = (job) => {
    let savedJobs = JSON.parse(localStorage.getItem("savedJobs")) || [];
    // Check if job is already saved to avoid duplicates
    if (!savedJobs.find((savedJob) => savedJob.title === job.title)) {
      savedJobs.push(job);
      localStorage.setItem("savedJobs", JSON.stringify(savedJobs));
      alert(`${job.title} saved!`);
    } else {
      alert(`${job.title} is already saved!`);
    }
  };

  return (
    <div
      className={`p-8 flex flex-wrap justify-center gap-12 ${
        isDarkMode ? "bg-gray-900" : "bg-gray-100"
      }`}
    >
      {jobs.map((job) => (
        <div
          key={job.title}
          className={`w-[351px] rounded-lg p-4 shadow-lg ${
            isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
          }`}
        >
          <img
            src={job.image}
            alt={job.company}
            className="w-full h-48 object-contain rounded-t-lg mb-4"
          />
          <h2 className="text-xl font-bold mb-2">{job.title}</h2>
          <p className="mb-2">Company: {job.company}</p>
          <p className="mb-2">Location: {job.location}</p>
          <p className="mb-2">Salary: {job.salary}</p>
          <button
            onClick={() => handleSave(job)}
            className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
          >
            Save
          </button>
        </div>
      ))}
    </div>
  );
}

export default JobCardList;
