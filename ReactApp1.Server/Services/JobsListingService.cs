using Newtonsoft.Json;
using ReactApp1.Server.Models;

namespace ReactApp1.Server.Services
{
    public class JobsListingService : IJobsListingService
    {
        public List<Job>? GetJobs(List<string>? jobTags = null)
        {
            using (StreamReader file = File.OpenText("./data.json"))
            {
                var serializer = new JsonSerializer();
                var jobs = serializer.Deserialize<List<Job>>(new JsonTextReader(file));

                if (jobTags != null && jobs != null)
                {
                    jobs = jobs.Where(job => jobTags.Contains(job.Role) || jobTags.Contains(job.Level)).ToList();
                }

                return jobs;
            }
        }
    }
}
