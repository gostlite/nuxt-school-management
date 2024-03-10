<template>
  <div class="bg-white custom-font">
    <p
      class="text-center text-purple-950 text-4xl md:text-6xl font-bold leading-10 py-20"
    >
      Ready to start with Tiflicare?
    </p>
    <p
      class="text-center text-purple-800 text-2xl md:text-3xl font-semibold leading-9 custom-font"
    >
      Choose the package that suits you.
    </p>

    <div
      @click="checkClick"
      class="flex gap-2 w-[280px] text-center items-center justify-center mx-auto bg-[#EAE7E7] mt-[46px] rounded h-10 cursor-pointer"
    >
      <p id="monthly" class="text-[#41126599] px-2 rounded mx-2 billing">
        Monthly billing
      </p>
      <p id="yearly" class="text-[#41126599] px-2 rounded mx-2">
        Yearly billing
      </p>
    </div>

    <div class="md:flex md:gap-4 items-center justify-center mx-10">
      <Pricing
        @payNow="makepayment"
        s
        :name="pricing.monthly.basic.name"
        :price="
          isMonthly ? monthly_basic_price : cal_yearly(monthly_basic_price)
        "
        :features="pricing.monthly.basic.features"
        :plan="isMonthly ? monthly_plan : yearly_plan"
        :price_id="basic_price_id"
      />
      <Pricing
        @payNow="makepayment"
        :name="pricing.monthly.business.name"
        :price="
          isMonthly
            ? monthly_business_price
            : cal_yearly(monthly_business_price)
        "
        :features="pricing.monthly.business.features"
        :plan="isMonthly ? monthly_plan : yearly_plan"
        :price_id="business_price_id"
      />
      <Pricing
        @payNow="makepayment"
        :name="pricing.monthly.enterprise.name"
        :price="
          isMonthly
            ? monthly_enterprise_price
            : cal_yearly(monthly_enterprise_price)
        "
        :features="pricing.monthly.enterprise.features"
        :plan="isMonthly ? monthly_plan : yearly_plan"
        :price_id="enterprise_price_id"
      />
    </div>
  </div>
</template>

<script setup>
const basic_price_id = "price_1OCVWWD6oBtJgmWFukNAxb7S"; // will make you an array
const business_price_id = "price_1OEp1VD6oBtJgmWFtX7K4UvF";
const enterprise_price_id = "price_1OEp51D6oBtJgmWFY22mxb2E";
import { loadStripe } from "@stripe/stripe-js";
import { price } from "~/stores/pricingStore";
const stripe = await loadStripe(
  "pk_test_51O9xPgD6oBtJgmWFKTd0NSnRLsbB8HzXMnb8Todx1sPVXIMkRZ5rdAuRAFK1wKW2aZLxhQZkWNmyZ6hwww86FehJ00QPqoJKPR"
);

const school_client = useSchoolStore();
const supabase = useSupabaseClient();
const school_id = await school_client.getSchoolId();
const { data: school_data_list, error: school_error } = await supabase
  .from("schools")
  .select("*")
  .eq("id", school_id);

const [school_data] = school_data_list;

const user_id = useSupabaseUser();
const { data, error } = await supabase
  .from("profiles")
  .select("*")
  .eq("id", `${user_id.value.id}`);
console.log("this is the user id details ", user_id.value);
if (error) console.error(error.message);
console.log("My data is ", data);
console.log("My school data is ", school_data_list);
console.log("My school data is ", school_data);

// loadStripe.setLoadParameters({ advancedFraudSignals: false });

const makepayment = async (amount) => {
  const { data: response } = await useFetch(
    "https://test-stripe-gamma.vercel.app/create-checkout-session",
    {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: school_data,
      params: {
        price: amount,
      },
      transform: (_response) => (_response.data ? _response.data : _response),
    }
  );
  if (response) {
    console.log(response.value.session);
    stripe.redirectToCheckout({
      sessionId: response.value.sessionId,
    });
  }
};

const pricing = price();

const amount_to_pay = ref();

const isMonthly = ref(true);
const monthly_plan = "month";
const yearly_plan = "year";

// calculate the yearly rate
const cal_yearly = (value) => {
  const discount = (value * 12 * 15) / 100;
  let returnAmount = value * 12 - discount;
  amount_to_pay.value = returnAmount;
  return returnAmount;
};

const monthly_basic_price = pricing.monthly.basic.price;
const monthly_business_price = pricing.monthly.business.price;
const monthly_enterprise_price = pricing.monthly.enterprise.price;

const addStyle = (clicked, rm_id) => {
  clicked.classList.add("billing");
  document.getElementById(rm_id).classList.remove("billing");
};
const checkClick = (e) => {
  const clicked_id = e.target.id; // get the clicked id
  const clicked = document.getElementById(clicked_id);
  if (clicked_id === "monthly") {
    addStyle(clicked, "yearly"); //change the style when monthly is clicked
    isMonthly.value = true;
  }
  if (clicked_id === "yearly") {
    addStyle(clicked, "monthly"); // change the style when yearly is clicked
    isMonthly.value = false;
  }
};
</script>

<style>
.billing {
  color: #411265;
  background-color: #03e987;
  box-shadow: 5px 5px 10px gray;
}
.custom-font {
  font-family: Lato, sans-serif;
}
</style>
