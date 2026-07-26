using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Callas.API.Migrations
{
    /// <inheritdoc />
    public partial class AddProgrammeSlugAndTagging : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Short",
                table: "Programmes",
                type: "TEXT",
                maxLength: 300,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Slug",
                table: "Programmes",
                type: "TEXT",
                maxLength: 200,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ProgrammeSlug",
                table: "Events",
                type: "TEXT",
                maxLength: 200,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "ProgrammeSlug",
                table: "Donations",
                type: "TEXT",
                maxLength: 200,
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Short",
                table: "Programmes");

            migrationBuilder.DropColumn(
                name: "Slug",
                table: "Programmes");

            migrationBuilder.DropColumn(
                name: "ProgrammeSlug",
                table: "Events");

            migrationBuilder.DropColumn(
                name: "ProgrammeSlug",
                table: "Donations");
        }
    }
}
