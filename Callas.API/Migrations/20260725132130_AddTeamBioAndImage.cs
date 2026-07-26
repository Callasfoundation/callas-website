using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Callas.API.Migrations
{
    /// <inheritdoc />
    public partial class AddTeamBioAndImage : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Bio",
                table: "TeamMembers",
                type: "TEXT",
                maxLength: 1000,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ImageUrl",
                table: "TeamMembers",
                type: "TEXT",
                maxLength: 500,
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Bio",
                table: "TeamMembers");

            migrationBuilder.DropColumn(
                name: "ImageUrl",
                table: "TeamMembers");
        }
    }
}
