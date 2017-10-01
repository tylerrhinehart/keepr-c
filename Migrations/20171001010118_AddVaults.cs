using Microsoft.EntityFrameworkCore.Migrations;
using System;
using System.Collections.Generic;

namespace keepr.Migrations
{
    public partial class AddVaults : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Keeps_Vault_VaultId",
                table: "Keeps");

            migrationBuilder.DropForeignKey(
                name: "FK_Vault_AspNetUsers_UserId",
                table: "Vault");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Vault",
                table: "Vault");

            migrationBuilder.RenameTable(
                name: "Vault",
                newName: "Vaults");

            migrationBuilder.RenameIndex(
                name: "IX_Vault_UserId",
                table: "Vaults",
                newName: "IX_Vaults_UserId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Vaults",
                table: "Vaults",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Keeps_Vaults_VaultId",
                table: "Keeps",
                column: "VaultId",
                principalTable: "Vaults",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Vaults_AspNetUsers_UserId",
                table: "Vaults",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Keeps_Vaults_VaultId",
                table: "Keeps");

            migrationBuilder.DropForeignKey(
                name: "FK_Vaults_AspNetUsers_UserId",
                table: "Vaults");

            migrationBuilder.DropPrimaryKey(
                name: "PK_Vaults",
                table: "Vaults");

            migrationBuilder.RenameTable(
                name: "Vaults",
                newName: "Vault");

            migrationBuilder.RenameIndex(
                name: "IX_Vaults_UserId",
                table: "Vault",
                newName: "IX_Vault_UserId");

            migrationBuilder.AddPrimaryKey(
                name: "PK_Vault",
                table: "Vault",
                column: "Id");

            migrationBuilder.AddForeignKey(
                name: "FK_Keeps_Vault_VaultId",
                table: "Keeps",
                column: "VaultId",
                principalTable: "Vault",
                principalColumn: "Id",
                onDelete: ReferentialAction.Restrict);

            migrationBuilder.AddForeignKey(
                name: "FK_Vault_AspNetUsers_UserId",
                table: "Vault",
                column: "UserId",
                principalTable: "AspNetUsers",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
