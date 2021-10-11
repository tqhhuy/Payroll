using System;
using System.Collections.Generic;

#nullable disable

namespace PayrollSystem.Models.DB
{
    public partial class HRAccount
    {
        public int Id { get; set; }
        public string EmailAddress { get; set; }
        public string Fullname { get; set; }
        public bool? Gender { get; set; }
        public int? PhoneNumber { get; set; }
    }
}
