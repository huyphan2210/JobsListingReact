using Microsoft.AspNetCore.Mvc;
using ReactApp1.Server.Models;
using ReactApp1.Server.Services;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

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
        public List<Job>? Get([FromQuery] List<string> jobTags)
        {
            return _jobListingService.GetJobs(jobTags);
        }

        [HttpGet("GetJobsWithFilter")]
        public string Get(int id)
        {
            return "value";
        }
    }
}
