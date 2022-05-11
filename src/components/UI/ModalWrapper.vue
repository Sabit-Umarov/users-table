<template>
  <v-overlay z-index="10" :value="isShowModal">
    <div class="modal">
      <header class="modal__header">
        <h2>{{ title }}</h2>
        <v-btn
          class="modal__close-button"
          @click="$emit('handleCloseModal')"
          icon
          light
        >
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </header>
      <slot></slot>
    </div>
  </v-overlay>
</template>

<script>
export default {
  name: "ModalWrapper",
  props: {
    title: String,
    isShowModal: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.modal {
  padding: 20px;
  border-radius: 4px;
  background: #ffffff;
  -webkit-box-shadow: inset 0 -1px 0 rgb(0 0 0 / 12%);
  box-shadow: inset 0 -1px 0 rgb(0 0 0 / 12%);
  width: 420px;
  color: black;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;

  @media screen and (max-width: 600px) {
    border-radius: 0;
    height: 100vh;
    width: 100vw;
  }

  &__header {
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;

    @media screen and (max-width: 600px) {
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
    }
  }

  &__close-button {
    position: absolute;
    top: 0;
    right: -12px;
  }
}
</style>
