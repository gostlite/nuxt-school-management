drop function if exists "public"."create_user_roles"();

drop function if exists "public"."user_on_signup"();

alter table "public"."user_roles" add column "id" uuid;

alter table "public"."user_roles" disable row level security;


