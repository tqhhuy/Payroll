using System;
using System.Collections.Generic;

#nullable disable

namespace PayrollSystem.Models.DB
{
    public partial class ManagePayroll
    {
        public int Id { get; set; }
        public int HrId { get; set; }
        public int CompanyId { get; set; }
    }
}
