using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace keepr.Migrations
{
    public partial class CreatedVault : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "VaultId",
                table: "Keeps",
                type: "int",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Vault",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:ValueGenerationStrategy", SqlServerValueGenerationStrategy.IdentityColumn),
                    Description = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    ImgUrl = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    Title = table.Column<string>(type: "nvarchar(max)", nullable: true),
                    UserId = table.Column<string>(type: "nvarchar(450)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Vault", x => x.Id);
                    table.ForeignKey(
                        name: "FK_Vault_AspNetUsers_UserId",
                        column: x => x.UserId,
                        principalTable: "AspNetUsers",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Keeps_VaultId",
                table: "Keeps",
                column: "VaultId");

            migrationBuilder.CreateIndex(
                name: "IX_Vault_UserId",
                table: "Vault",
                column: "UserId");

            migrationBuilder.AddForeignKey(
                name: "FK_Keeps_Vault_VaultId",
                table: "Keeps",
                column: "VaultId",
                principalTable: "Vault",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Keeps_Vault_VaultId",
                table: "Keeps");

            migrationBuilder.DropTable(
                name: "Vault");

            migrationBuilder.DropIndex(
                name: "IX_Keeps_VaultId",
                table: "Keeps");

            migrationBuilder.DropColumn(
                name: "VaultId",
                table: "Keeps");
        }
    }
}
