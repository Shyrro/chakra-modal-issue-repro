<script setup>
import { ref } from "vue";
import {
  CModal,
  CModalContent,
  CModalOverlay,
  CModalCloseButton,
  CModalFooter,
  CModalBody,
  CButton,
} from "@chakra-ui/vue-next";

const open = ref(false);
</script>

<template>
  <c-button class="open-button" @click="open = true">Open modal</c-button>
  <c-modal v-model="open">
    <c-modal-overlay />
    <c-modal-content>
      <c-modal-header>Modal header</c-modal-header>
      <c-modal-close-button />
      <c-modal-body>
        Sit nulla est ex deserunt exercitation anim occaecat. Nostrud ullamco
        deserunt aute id consequat veniam incididunt duis in sint irure nisi.
      </c-modal-body>

      <c-modal-footer>
        <c-button @click="open = false" mr="3"> Close </c-button>
        <c-button>Secondary action</c-button>
      </c-modal-footer>
    </c-modal-content>
  </c-modal>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}

.open-button:focus {
  border: 4px solid red;
}
</style>
