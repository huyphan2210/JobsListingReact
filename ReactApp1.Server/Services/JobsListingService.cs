using Newtonsoft.Json;
using ReactApp1.Server.Models;

namespace ReactApp1.Server.Services
{
    public class JobsListingService : IJobsListingService
    {
        public List<Job>? GetJobs(List<string>? jobTags)
        {
            using (StreamReader file = File.OpenText("./data.json"))
            {
                var serializer = new JsonSerializer();
                var jobs = serializer.Deserialize<List<Job>>(new JsonTextReader(file));

                if (jobTags != null && jobTags.Count > 0 && jobs != null)
                {
                    jobs = FilterJobs(jobs, jobTags);
                }

                return jobs;
            }
        }

        private List<Job> FilterJobs(List<Job> jobs, List<string> jobTags)
        {
            return jobs.Where(job => jobTags.Contains(job.Role) || jobTags.Contains(job.Level) ||
                                     jobTags.Intersect(job.Languages).Any() ||
                                     jobTags.Intersect(job.Tools).Any()).ToList();
        }
    }
}
