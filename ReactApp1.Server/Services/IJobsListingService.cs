using ReactApp1.Server.Models;

namespace ReactApp1.Server.Services
{
    public interface IJobsListingService
    {
        public List<Job>? GetJobs();
    }
}
