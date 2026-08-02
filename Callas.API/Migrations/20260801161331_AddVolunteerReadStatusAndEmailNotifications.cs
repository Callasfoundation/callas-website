using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Callas.API.Migrations
{
    /// <inheritdoc />
    public partial class AddVolunteerReadStatusAndEmailNotifications : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<DateTime>(
                name: "DateSubmitted",
                table: "Volunteers",
                type: "TEXT",
                nullable: false,
                defaultValue: new DateTime(1, 1, 1, 0, 0, 0, 0, DateTimeKind.Unspecified));

            migrationBuilder.AddColumn<bool>(
                name: "IsRead",
                table: "Volunteers",
                type: "INTEGER",
                nullable: false,
                defaultValue: false);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "DateSubmitted",
                table: "Volunteers");

            migrationBuilder.DropColumn(
                name: "IsRead",
                table: "Volunteers");
        }
    }
}
