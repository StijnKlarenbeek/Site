<template>
  <div class="search-filer-form">
    <input type="text" class="input-search" v-model="input" :keyup="search()" placeholder="Search by name" />
    <button type="button" class="search">
      <i class="fa fa-search"></i>
    </button>
    <sk-filter>
      <template>
        Filter &nbsp;
        <i class="fa fa-caret-down"></i>
      </template>
    </sk-filter>
  </div>
</template>
<script>
import SkFilter from "@/components/SkFilter";
export default {
  components: {
    SkFilter
  },
  data() {
    return {
      input: ''
    }
  },
  methods: {
    search() {
      this.$emit("input",this.input)
    }
  }
};
</script>
<style scoped>
div {
  display: flex;
  width: auto;
}
.input-search {
  height: 60px;
  border: none;
  flex: 1;
  padding-left: 24px;
  padding-right: 24px;
  font-size: 1.1rem;
  background: #222;
  background: rgb(53, 56, 70);
  outline: none;
  color: white;
  transition: 250ms;
}
.input-search:focus {
  /* background: #333; */
  /* background: #2e2e2e; */
  background: rgb(60, 64, 80);
}
.search {
  height: 60px;
  width: 60px;
  text-align: center;
  font-size: 1.3rem;
  border: none;
  box-shadow: none;
  background: rgb(60, 64, 80);
  background: rgb(77, 70, 219);
  color: white;
  cursor: pointer;
  transition: 250ms;
  outline: none;
}
.search:hover {
  background: rgb(66, 60, 185);
}
</style>