CREATE TABLE IF NOT EXISTS "public"."attendances"(
id bigint primary key generated always as identity,
name text,
class_id bigint,
created_at timestamptz default now()
);

drop function if exists "public"."create_user_roles"();

drop function if exists "public"."user_on_signup"();