using System;
using System.Collections.Generic;

#nullable disable

namespace PayrollSystem.Models.DB
{
    public partial class Employee
    {
        public int Id { get; set; }
        public int CompanyId { get; set; }
        public int DepartmentId { get; set; }
        public string Fullname { get; set; }
        public bool? Gender { get; set; }
        public DateTime FirstDayAtWork { get; set; }
        public string WorkEmailAddress { get; set; }
        public string PersonalEmailAddress { get; set; }
        public double Salary { get; set; }
        public bool SalaryType { get; set; }
        public int CitizenIdentification { get; set; }
        public string Address { get; set; }
        public int? PhoneNumber { get; set; }
        public int? TaxCode { get; set; }
        public int? BankNumber { get; set; }
        public bool PaymentType { get; set; }
    }
}
