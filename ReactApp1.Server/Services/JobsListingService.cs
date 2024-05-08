using Newtonsoft.Json;
using ReactApp1.Server.Models;

namespace ReactApp1.Server.Services
{
    public class JobsListingService : IJobsListingService
    {
        public List<Job>? GetJobs()
        {
            using (StreamReader file = File.OpenText("./data.json"))
            {
                var serializer = new JsonSerializer();
                var jobs = serializer.Deserialize<List<Job>>(new JsonTextReader(file));
                return jobs;
            }
        }
    }
}
