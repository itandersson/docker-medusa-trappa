import { Migration } from "@medusajs/framework/mikro-orm/migrations";

export class Migration20261122110904 extends Migration {

  override async up(): Promise<void> {
    this.addSql(`alter table if exists "booking" drop constraint if exists "booking_date_time_unique";`);
    this.addSql(`create table if not exists "booking" ("id" text not null, "date" text not null, "time" text not null, "customer_id" text not null, "created_at" timestamptz not null default now(), "updated_at" timestamptz not null default now(), "deleted_at" timestamptz null, constraint "booking_pkey" primary key ("id"));`);
    this.addSql(`CREATE INDEX IF NOT EXISTS "IDX_booking_deleted_at" ON "booking" ("deleted_at") WHERE deleted_at IS NULL;`);
    this.addSql(`CREATE UNIQUE INDEX IF NOT EXISTS "IDX_booking_date_time_unique" ON "booking" ("date", "time") WHERE deleted_at IS NULL;`);
  }

  override async down(): Promise<void> {
    this.addSql(`drop table if exists "booking" cascade;`);
  }

}
