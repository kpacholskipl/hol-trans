<template>
  <div>
    <HomePage />
    <OfferPage />
    <AboutCompanyPage />
    <ContactPage />
  </div>
</template>

<script>
export default {
  components: {
    AboutCompanyPage: () => import('@/components/AboutCompanyPage'),
    OfferPage: () => import('@/components/OfferPage'),
    ContactPage: () => import('@/components/ContactPage'),
    HomePage: () => import('@/components/HomePage')
  }
}
</script>
