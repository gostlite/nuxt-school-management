import { defineStore } from "pinia";

export const price = defineStore({
  id: "Price",
  state: () => ({
    monthly: {
      basic: {
        name: "Basic plan",
        price: 10,
        features: [
          "Share milestones, photos, and videos to keep families connected",
          "Send messages, newsletters, and SMS alerts to share important updates",
        ],
      },
      business: {
        name: "Business plan",
        price: 20,
        features: [
          "Accept online forms, signatures, and messages to make applying easier for families",
          "Streamline application tracking and waitlist management to reduce your paperwork",
        ],
      },
      enterprise: {
        name: "Enterprise plan",
        price: 40,
        features: [
          "Provide staff an easy tool to customize lesson plans and manage daily reports",
          "Enable staff to make observations per State, DRDP.",
        ],
      },
    },
  }),
});
