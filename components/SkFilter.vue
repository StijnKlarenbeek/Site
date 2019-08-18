<template>
  <ul>
    <li>
      <button type="button">
        <slot></slot>
      </button>
      <ul class="dropdown">
        <slot name="filters"></slot>
      </ul>
    </li>
  </ul>
</template>
<script>
export default {
  name: "SkFilter",
  props: {
    mobileSide: {
      type: Boolean,
      default: true
    }
  }
};
</script>
<style scoped>
ul {
  list-style-type: none;
}
ul li {
  display: inline-block;
}
ul li button {
  height: 60px;
  padding-left: 1.75rem;
  padding-right: 1.75rem;
  font-size: 1.3rem;
  border: none;
  box-shadow: none;
  background: rgb(90, 82, 255);
  color: white;
  cursor: pointer;
  transition: 250ms;
  outline: none;
}
ul li button:hover {
  background: rgb(77, 70, 219);
}
</style>