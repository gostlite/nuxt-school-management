set check_function_bodies = off;

CREATE OR REPLACE FUNCTION public.user_on_signup()
 RETURNS trigger
 LANGUAGE plpgsql
 SECURITY DEFINER
AS $function$
DECLARE
  theid int;  -- Use int data type for a standard 32-bit integer
BEGIN
  INSERT INTO public.profiles(auth_user_id)
  VALUES (NEW.id)
  RETURNING profiles.user_id INTO theid;

  INSERT INTO public.user_roles(user_id)
  VALUES (theid);

  RETURN NEW;
END;$function$
;


