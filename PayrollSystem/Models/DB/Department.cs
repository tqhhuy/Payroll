using System;
using System.Collections.Generic;

#nullable disable

namespace PayrollSystem.Models.DB
{
    public partial class Department
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
    }
}
