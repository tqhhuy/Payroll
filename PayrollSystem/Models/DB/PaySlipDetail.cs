using System;
using System.Collections.Generic;

#nullable disable

namespace PayrollSystem.Models.DB
{
    public partial class PaySlipDetail
    {
        public int Id { get; set; }
        public int PaySlipId { get; set; }
        public int EmployeeId { get; set; }
        public int WorkingHours { get; set; }
        public int? OvertimeWorkingHours { get; set; }
        public int? DoubletimeWorkingHours { get; set; }
        public int? HoursOff { get; set; }
        public double GrossPay { get; set; }
        public double Benefit { get; set; }
        public double Deduction { get; set; }
        public double Bonus { get; set; }
        public double Tax { get; set; }
        public double NetPay { get; set; }
    }
}
