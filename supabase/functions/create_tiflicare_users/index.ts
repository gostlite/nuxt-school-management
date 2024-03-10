
import { serve } from 'https://deno.land/std@0.177.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import axiod from "https://deno.land/x/axiod/mod.ts";
import { corsHeaders } from '../_shared/cors.ts'


serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders })
  }
  try {
    let payload = await req.json();
    const { email, roleId, schoolId, classId } = payload;
    // Create a Supabase client with the Auth context of the logged in user.
    console.log(payload);
    const supabaseAdminClient = createClient(
      // Supabase API URL - env var exported by default.
      Deno.env.get('SUPABASE_URL') ?? '',
      // Supabase API ANON KEY - env var exported by default.
      Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
      // Create client with Auth context of the user that called the function.
      // This way your row-level-security (RLS) policies are applied.
      {auth: {
        autoRefreshToken: false,
        persistSession: false
      }}
    )

    let userData = await supabaseAdminClient.auth.signUp({
      email:email,
      password: 'password',
      // app_metadata: { role: 'Parent' }
    });
    
    if (userData.error) throw userData.error;
    console.log('userData', userData);

    let {user} = userData.data;
    const updatedRole = await supabaseAdminClient
      .from('user_roles')
      .insert({ user_id: user.id, school_id: schoolId, class_id: classId, role_id: roleId })
      .select();
    if (updatedRole.error) throw updatedRole.error;
    console.log('updatedRole', updatedRole);
    // send request to endpoint to update the rest - api.tiflicare.com/webhook-test/new-user/update
    // @TODO: add the endpoint to the env file, add api-key to the header
    axiod.post('http://api.tiflicare.com/webhook/new-user/update', {payload:payload, user:user})
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      console.error(error);
    });

    let {data} = updatedRole
    return new Response(JSON.stringify({ user, data }), {
      headers: { 'Content-Type': 'application/json' , ...corsHeaders},
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), {
      headers: { 'Content-Type': 'application/json' , ...corsHeaders},
      status: 400,
    });
  }
});
