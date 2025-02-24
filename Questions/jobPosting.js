// Build a job board that displays the latest job postings fetched from the Hacker News API,
// with each posting displaying the job title, poster, and date posted.

// Job board example

// Requirements
// The page should show 6 jobs on initial load with a button to load more postings.
// Clicking on the "Load more" button will load the next page of 6 postings. The button does not appear if there aren't any more postings to load.
// If there's a url field returned for the job details, make the job title a link that opens the job details page in a new window when clicked.
// The timestamp can be formatted in any way you like.
// API
// Hacker News has a public API to fetch jobs by Y Combinator companies. There's no single API that fetches a list of jobs together with the data, so you will have to make separate requests to fetch the necessary data and combine them to be displayed.

// Job Stories
// Fetches a list of job posting IDs.

// URL: https://hacker-news.firebaseio.com/v0/jobstories.json
// HTTP Method: GET
// Content Type: json
// Sample response:

// [35908337, 35904973, 35900922, 35893439, 35890114, 35880345, ...]
// Job Details
// Fetches job posting details given its ID.

// URL: https://hacker-news.firebaseio.com/v0/item/{id}.json
// HTTP Method: GET
// Content Type: json
// Sample response for https://hacker-news.firebaseio.com/v0/item/35908337.json:

// {
//   "by": "jamilbk",
//   "id": 35908337,
//   "score": 1,
//   "time": 1683838872,
//   "title": "Firezone (YC W22) is hiring Elixir and Rust engineers",
//   "type": "job",
//   "url": "https://www.ycombinator.com/companies/firezone/jobs"
// }
// Notes
// The focus of this question is on functionality and not on styling, but feel free to beautify the page.
// To improve the user experience and avoid overfetching, you may want to limit the number of job details fetched to the number of jobs visible on the page.

import { useEffect, useState } from "react";

export default function App() {
  const JOB_PER_PAGE = 6;
  const JOB_STORES_URL =
    "https://hacker-news.firebaseio.com/v0/jobstories.json";
  const [jobIds, setJobIds] = useState([]);
  const [page, setPage] = useState(1);
  const [jobs, setJobs] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [canLoadMore, setCanLoadMore] = useState(true);

  async function fetchJobIds() {
    try {
      const response = await fetch(JOB_STORES_URL);
      const data = await response.json();
      setJobIds(data);
    } catch (error) {
      return;
    }
  }

  async function loadMore() {
    setIsLoading(true);
    const start = (page - 1) * JOB_PER_PAGE;
    const end = start + JOB_PER_PAGE;
    const jobs_ids = jobIds.slice(start, end);
    const promises = jobs_ids.map(async (id) => {
      try {
        const response = await fetch(
          `https://hacker-news.firebaseio.com/v0/item/${id}.json`
        );
        return await response.json();
      } catch (error) {
        console.log("error");
      }
    });
    const this_jobs = await Promise.all(promises);
    setJobs([...jobs, ...this_jobs]);
    if (end > jobIds.length) {
      setCanLoadMore(false);
    }
    setIsLoading(false);
  }

  function formatDate(timestamp) {
    return new Date(timestamp * 1000).toLocaleString();
  }

  useEffect(() => {
    fetchJobIds();
  }, []);

  useEffect(() => {
    if (canLoadMore && jobIds.length > 0) {
      loadMore();
    }
  }, [jobIds, page]);

  return (
    <div>
      {jobs?.map((job, index) => {
        return (
          <div className="job">
            <span>{index}</span>
            {job.url ? (
              <a href={job.url} target="_blank">
                {job.title} {formatDate(job.time)}
              </a>
            ) : (
              <p>{job.title}</p>
            )}
          </div>
        );
      })}
      {canLoadMore === true && (
        <button
          onClick={() => setPage((prevPage) => prevPage + 1)}
          disabled={isLoading}
        >
          {isLoading ? "Loading..." : " Load More"}
        </button>
      )}
    </div>
  );
}
