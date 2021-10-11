using System;
using System.Collections.Generic;

#nullable disable

namespace PayrollSystem.Models.DB
{
    public partial class PaySchedule
    {
        public int Id { get; set; }
        public int CompanyId { get; set; }
        public int PayScheduleType { get; set; }
        public string PayDay { get; set; }
        public string OtherPayDay { get; set; }
    }
}
