using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace PayrollSystem.Models.DB
{
    public partial class PayrollSystemContext : DbContext
    {
        public PayrollSystemContext()
        {
        }

        public PayrollSystemContext(DbContextOptions<PayrollSystemContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Company> Companies { get; set; }
        public virtual DbSet<Department> Departments { get; set; }
        public virtual DbSet<Employee> Employees { get; set; }
        public virtual DbSet<HRAccount> Hraccounts { get; set; }
        public virtual DbSet<Industry> Industries { get; set; }
        public virtual DbSet<LegalStructure> LegalStructures { get; set; }
        public virtual DbSet<ManagePayroll> ManagePayrolls { get; set; }
        public virtual DbSet<PaySchedule> PaySchedules { get; set; }
        public virtual DbSet<PayScheduleType> PayScheduleTypes { get; set; }
        public virtual DbSet<PaySlip> PaySlips { get; set; }
        public virtual DbSet<PaySlipDetail> PaySlipDetails { get; set; }
        public virtual DbSet<PayStatus> PayStatuses { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. You can avoid scaffolding the connection string by using the Name= syntax to read it from configuration - see https://go.microsoft.com/fwlink/?linkid=2131148. For more guidance on storing connection strings, see http://go.microsoft.com/fwlink/?LinkId=723263.
                optionsBuilder.UseSqlServer("Data Source=SE140046;Initial Catalog=PayrollSystem;Integrated Security=True;Connect Timeout=30;Encrypt=False;TrustServerCertificate=False;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Company>(entity =>
            {
                entity.ToTable("Company");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("address");

                entity.Property(e => e.IndustryId).HasColumnName("industryID");

                entity.Property(e => e.LegalStructureId).HasColumnName("legalStructureID");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(35)
                    .IsUnicode(false)
                    .HasColumnName("name");

                entity.Property(e => e.TaxCode).HasColumnName("taxCode");
            });

            modelBuilder.Entity<Department>(entity =>
            {
                entity.ToTable("Department");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("address");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(55)
                    .IsUnicode(false)
                    .HasColumnName("name");
            });

            modelBuilder.Entity<Employee>(entity =>
            {
                entity.ToTable("Employee");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Address)
                    .IsRequired()
                    .HasMaxLength(255)
                    .IsUnicode(false)
                    .HasColumnName("address");

                entity.Property(e => e.BankNumber).HasColumnName("bankNumber");

                entity.Property(e => e.CitizenIdentification).HasColumnName("citizenIdentification");

                entity.Property(e => e.CompanyId).HasColumnName("companyID");

                entity.Property(e => e.DepartmentId).HasColumnName("departmentID");

                entity.Property(e => e.FirstDayAtWork)
                    .HasColumnType("date")
                    .HasColumnName("firstDayAtWork");

                entity.Property(e => e.Fullname)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("fullname");

                entity.Property(e => e.Gender).HasColumnName("gender");

                entity.Property(e => e.PaymentType).HasColumnName("paymentType");

                entity.Property(e => e.PersonalEmailAddress)
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("personalEmailAddress");

                entity.Property(e => e.PhoneNumber).HasColumnName("phoneNumber");

                entity.Property(e => e.Salary).HasColumnName("salary");

                entity.Property(e => e.SalaryType).HasColumnName("salaryType");

                entity.Property(e => e.TaxCode).HasColumnName("taxCode");

                entity.Property(e => e.WorkEmailAddress)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("workEmailAddress");
            });

            modelBuilder.Entity<HRAccount>(entity =>
            {
                entity.ToTable("HRAccount");

                entity.HasIndex(e => e.EmailAddress, "UQ__HRAccoun__347C302794876FFC")
                    .IsUnique();

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.EmailAddress)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("emailAddress");

                entity.Property(e => e.Fullname)
                    .IsRequired()
                    .HasMaxLength(50)
                    .IsUnicode(false)
                    .HasColumnName("fullname");

                entity.Property(e => e.Gender).HasColumnName("gender");

                entity.Property(e => e.PhoneNumber).HasColumnName("phoneNumber");
            });

            modelBuilder.Entity<Industry>(entity =>
            {
                entity.ToTable("Industry");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(55)
                    .IsUnicode(false)
                    .HasColumnName("name");
            });

            modelBuilder.Entity<LegalStructure>(entity =>
            {
                entity.ToTable("LegalStructure");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(55)
                    .IsUnicode(false)
                    .HasColumnName("name");
            });

            modelBuilder.Entity<ManagePayroll>(entity =>
            {
                entity.ToTable("ManagePayroll");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.CompanyId).HasColumnName("companyID");

                entity.Property(e => e.HrId).HasColumnName("hrID");
            });

            modelBuilder.Entity<PaySchedule>(entity =>
            {
                entity.ToTable("PaySchedule");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.CompanyId).HasColumnName("companyID");

                entity.Property(e => e.OtherPayDay)
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("otherPayDay");

                entity.Property(e => e.PayDay)
                    .IsRequired()
                    .HasMaxLength(20)
                    .IsUnicode(false)
                    .HasColumnName("payDay");

                entity.Property(e => e.PayScheduleType).HasColumnName("payScheduleType");
            });

            modelBuilder.Entity<PayScheduleType>(entity =>
            {
                entity.ToTable("PayScheduleType");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(55)
                    .IsUnicode(false)
                    .HasColumnName("name");
            });

            modelBuilder.Entity<PaySlip>(entity =>
            {
                entity.ToTable("PaySlip");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.PayDate)
                    .HasColumnType("date")
                    .HasColumnName("payDate")
                    .HasDefaultValueSql("(getdate())");

                entity.Property(e => e.PayPeriodBeginDate)
                    .HasColumnType("date")
                    .HasColumnName("payPeriodBeginDate");

                entity.Property(e => e.PayPeriodEndDate)
                    .HasColumnType("date")
                    .HasColumnName("payPeriodEndDate");

                entity.Property(e => e.PayStatusId).HasColumnName("payStatusID");

                entity.Property(e => e.TotalNetPayroll).HasColumnName("totalNetPayroll");

                entity.Property(e => e.TotalPayrollCost).HasColumnName("totalPayrollCost");

                entity.Property(e => e.Totaltax).HasColumnName("totaltax");
            });

            modelBuilder.Entity<PaySlipDetail>(entity =>
            {
                entity.ToTable("PaySlipDetail");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Benefit).HasColumnName("benefit");

                entity.Property(e => e.Bonus).HasColumnName("bonus");

                entity.Property(e => e.Deduction).HasColumnName("deduction");

                entity.Property(e => e.DoubletimeWorkingHours).HasColumnName("doubletimeWorkingHours");

                entity.Property(e => e.EmployeeId).HasColumnName("employeeID");

                entity.Property(e => e.GrossPay).HasColumnName("grossPay");

                entity.Property(e => e.HoursOff).HasColumnName("hoursOff");

                entity.Property(e => e.NetPay).HasColumnName("netPay");

                entity.Property(e => e.OvertimeWorkingHours).HasColumnName("overtimeWorkingHours");

                entity.Property(e => e.PaySlipId).HasColumnName("paySlipID");

                entity.Property(e => e.Tax).HasColumnName("tax");

                entity.Property(e => e.WorkingHours).HasColumnName("workingHours");
            });

            modelBuilder.Entity<PayStatus>(entity =>
            {
                entity.ToTable("PayStatus");

                entity.Property(e => e.Id).HasColumnName("ID");

                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(55)
                    .IsUnicode(false)
                    .HasColumnName("name");
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
