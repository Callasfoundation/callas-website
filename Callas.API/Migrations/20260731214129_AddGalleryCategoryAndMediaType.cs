using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Callas.API.Migrations
{
    /// <inheritdoc />
    public partial class AddGalleryCategoryAndMediaType : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Category",
                table: "GalleryImages",
                type: "TEXT",
                maxLength: 100,
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "MediaType",
                table: "GalleryImages",
                type: "TEXT",
                maxLength: 10,
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Category",
                table: "GalleryImages");

            migrationBuilder.DropColumn(
                name: "MediaType",
                table: "GalleryImages");
        }
    }
}
