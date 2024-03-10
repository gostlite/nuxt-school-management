export const redirectUser = async (role_id) => {
  const { role_id: role } = await useSchoolStore().getRole();
  console.log("from the", role);
  //   const role = await client.getRole();
  watchEffect(
    () => {
      if (role !== role_id) {
        if (role === 2) {
          navigateTo("/teacher");
        } else if (role === 1) {
          navigateTo("/admin");
        } else if (role === 4) {
          //
          navigateTo("/parent");
        }
        //  else {
        //   navigateTo("/404");
        // }
      } // do nothing if the
    },
    { flush: "post" }
  );
};

// get the role id
// check if the role id is authorized to login a page?
// if yes remain there, else redirect to authorized page
