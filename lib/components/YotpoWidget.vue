<template>
  <div>
    <client-only>
      <div
        id="yotpo-customer-identification"
        data-authenticated="true"
        v-bind="customerData"
        style="display:none;"
      ></div>
    </client-only>
  </div>
</template>

<script>
export default {
  data() {
    return {
      customerData: {},
    };
  },
  mounted() {
    const yotpoCookie = this.getCookieValue("nacelle_yotpo_user");
    const yotpoData =
      yotpoCookie.length > 0 ? JSON.parse(atob(yotpoCookie)) : undefined;
    if (yotpoData) {
      this.customerData["data-id"] = yotpoData.customerId;
      this.customerData["data-email"] = yotpoData.customerEmail;
      this.customerData["data-tags"] = yotpoData.customerTags;
    }
  },
  methods: {
    getCookieValue(a) {
      const b = document.cookie.match("(^|[^;]+)\\s*" + a + "\\s*=\\s*([^;]+)");
      return b ? decodeURIComponent(b.pop()) : "";
    },
  },
};
</script>
