using System;
using System.Collections.Generic;

#nullable disable

namespace PayrollSystem.Models.DB
{
    public partial class PaySlip
    {
        public int Id { get; set; }
        public DateTime PayDate { get; set; }
        public DateTime PayPeriodBeginDate { get; set; }
        public DateTime PayPeriodEndDate { get; set; }
        public int PayStatusId { get; set; }
        public double TotalPayrollCost { get; set; }
        public double TotalNetPayroll { get; set; }
        public double Totaltax { get; set; }
    }
}
