using System.Diagnostics;

namespace TheWorld.Services
{
    public class DebugMailService : IMailService
    {
        public void SendMail(string to, string from, string subject, string body)
        {
            Debug.WriteLine("from {0} to {1} with subjet {2} and message {3}.", from, to, subject, body);
        }
    }
}