<template>
  <div>
    <client-only>
      <div 
        id="swell-customer-identification"
        data-authenticated="true"
        v-bind="customerData"
        style="display:none;"
      ></div>
    </client-only>
  </div>
</template>

<script>
export default {
  data () {
    return {
      customerData: {}
    }
  },
  mounted () {
    const swellCookie = this.getCookieValue('nacelle_swell_user')
    const swellData = swellCookie.length > 0 ? JSON.parse(atob(swellCookie)) : undefined
    if (
      swellData
    ) {
      this.customerData['data-id'] = swellData.customerId
      this.customerData['data-email'] = swellData.customerEmail
      this.customerData['data-tags'] = swellData.customerTags
    }
  },
  methods: {
    getCookieValue (a) {
      const b = document.cookie.match('(^|[^;]+)\\s*' + a + '\\s*=\\s*([^;]+)')
      return b ? decodeURIComponent(b.pop()) : ''
    }
  }
}
</script>