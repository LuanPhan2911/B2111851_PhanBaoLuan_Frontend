<template>
  <div v-if="contact" class="page">
    <h4>Thêm liên hệ</h4>
    <ContactForm :contact="contact" @submit:contact="createContact" />
    <p>{{ message }}</p>
  </div>
</template>
<script>
import ContactForm from "@/components/ContactForm.vue";
import ContactService from "@/services/contact.service";
export default {
  components: {
    ContactForm,
  },

  data() {
    return {
      contact: null,
      message: "",
    };
  },
  methods: {
    async createContact(data) {
      try {
        let res = await ContactService.create(data);

        this.message = "Liên hệ được thêm thành công.";
        this.$router.push({ name: "contactbook" });
      } catch (error) {
        console.log(error);
      }
    },
  },
  created() {
    this.contact = {
      email: "",
      phone: "",
      address: "",
      name: "",
      favorite: false,
    };
  },
};
</script>
