<template>
  <div class="form-container">
    <label class="form-container__label">{{ label }}</label>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "InputContainer",
  props: {
    label: String,
  },
};
</script>

<style lang="scss" scoped>
.form-container {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin-top: 20px;
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;

  @media screen and (max-width: 600px) {
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -ms-flex-direction: column;
    flex-direction: column;
  }

  &__label {
    width: 100px;
    padding-right: 20px;
  }
}
</style>
