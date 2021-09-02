const addJob = (title, description, jobs) => {
  return [...jobs, { title, description }]
}

export default function Experience() {
  let jobs = addJob("Teaching Assistant — Data Structures", ["Designed, prepared, and delivered lectures to over 30 accelerated first-year students.", "Modified lecture delivery modalities to adhere to changing university guidelines during the COVID-19 pandemic."], [])
  jobs = addJob("Course Assistant — Algorithms", ["Held individual and group office hours to facilitate comprehension of topics such as algorithmic time and space complexity, Sorting algorithms, etc."], jobs)
  // console.table(jobs);
  return (
    <>
      <h2>Experience</h2>
      <div className="jobs">
        {jobs.map((job, index) => (
          <div className="job" key={index}>
            <h3>{job.title}</h3>
            <ul>
              {job.description.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </>
  )

}
