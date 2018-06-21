namespace RentApp.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class rent : DbMigration
    {
        public override void Up()
        {
            AlterColumn("dbo.AppUsers", "FullName", c => c.String(nullable: false));
            AlterColumn("dbo.AppUsers", "DateOfBirth", c => c.DateTime(nullable: false));
            AlterColumn("dbo.Services", "Name", c => c.String(nullable: false));
            AlterColumn("dbo.Services", "Logo", c => c.String(nullable: false));
            AlterColumn("dbo.Services", "Email", c => c.String(nullable: false));
            AlterColumn("dbo.BranchOffices", "Address", c => c.String(nullable: false));
            AlterColumn("dbo.BranchOffices", "Image", c => c.String(nullable: false));
            AlterColumn("dbo.Vehicles", "Model", c => c.String(nullable: false));
            AlterColumn("dbo.Vehicles", "Producer", c => c.String(nullable: false));
            AlterColumn("dbo.Vehicles", "Image", c => c.String(nullable: false));
            AlterColumn("dbo.VehicleTypes", "VehicleName", c => c.String(nullable: false));
            AlterColumn("dbo.Reservations", "GetVehicleDate", c => c.DateTime(nullable: false));
            AlterColumn("dbo.Reservations", "ReturnVehicleDate", c => c.DateTime(nullable: false));
        }
        
        public override void Down()
        {
            AlterColumn("dbo.Reservations", "ReturnVehicleDate", c => c.DateTime());
            AlterColumn("dbo.Reservations", "GetVehicleDate", c => c.DateTime());
            AlterColumn("dbo.VehicleTypes", "VehicleName", c => c.String());
            AlterColumn("dbo.Vehicles", "Image", c => c.String());
            AlterColumn("dbo.Vehicles", "Producer", c => c.String());
            AlterColumn("dbo.Vehicles", "Model", c => c.String());
            AlterColumn("dbo.BranchOffices", "Image", c => c.String());
            AlterColumn("dbo.BranchOffices", "Address", c => c.String());
            AlterColumn("dbo.Services", "Email", c => c.String());
            AlterColumn("dbo.Services", "Logo", c => c.String());
            AlterColumn("dbo.Services", "Name", c => c.String());
            AlterColumn("dbo.AppUsers", "DateOfBirth", c => c.DateTime());
            AlterColumn("dbo.AppUsers", "FullName", c => c.String());
        }
    }
}
