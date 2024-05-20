using Microsoft.AspNetCore.Mvc;
using ReactApp1.Server.Models;
using ReactApp1.Server.Services;

namespace ReactApp1.Server.Controllers
{
    [ApiController]
    [Route("jobs")]
    public class JobsListingController : ControllerBase
    {
        private readonly IJobsListingService _jobListingService;

        public JobsListingController(IJobsListingService jobListingService)
        {
            _jobListingService = jobListingService;
        }

        [HttpGet(Name = "GetJobs")]
        public List<Job>? GetJobs()
        {
            return _jobListingService.GetJobs(null);
        }

        [HttpPost(Name = "GetJobsWithFilter")]
        public List<Job>? GetJobsWithFilter([FromBody] List<string> jobTags)
        {
            return _jobListingService.GetJobs(jobTags);
        }
    }
}
