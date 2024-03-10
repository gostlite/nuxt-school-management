drop trigger if exists "handle_updated_at" on "public"."profiles";

CREATE TRIGGER handle_updated_at BEFORE UPDATE ON public.profiles FOR EACH ROW EXECUTE FUNCTION moddatetime('updated_at');
ALTER TABLE "public"."profiles" DISABLE TRIGGER "handle_updated_at";


