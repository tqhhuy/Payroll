using System;
using System.Collections.Generic;

#nullable disable

namespace PayrollSystem.Models.DB
{
    public partial class Company
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public int IndustryId { get; set; }
        public int LegalStructureId { get; set; }
        public int TaxCode { get; set; }
    }
}
