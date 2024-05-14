namespace ReactApp1.Server.Models
{
    public class Job
    {
        public int Id { get; set; }
        public string Company { get; set; } = string.Empty;
        public string Logo { get; set; } = string.Empty;
        public bool New { get; set; }
        public bool Featured { get; set; }
        public string Position { get; set; } = string.Empty;
        public string Role { get; set; } = string.Empty;
        public string Level { get; set; } = string.Empty;
        public string PostedAt { get; set; } = string.Empty;
        public string Contract { get; set; } = string.Empty;
        public string Location { get; set; } = string.Empty;
        public string[] Languages { get; set; } = Array.Empty<string>();
        public string[] Tools { get; set; } = Array.Empty<string>();
    }
}
