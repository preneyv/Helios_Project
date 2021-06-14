<template>
<div class="tabs">
   <ul class="nav nav-tabs">
    <li v-for="tab in tabs" :key="tab" :class="'nav-item-' + tab" class="nav-item">
      <a class="nav-link" :class="{active: tab === selected }" @click="setTab(tab)"></a> 
      <!-- {{ tab }} -->
    </li>      
  </ul>
  <slot></slot>
</div>
</template>
<script>
export default {
  props: {
    /* Holds all of the tabs data */
    tabs: {
      type: Array,
      required: true,
    },
    selected: {
      type: String,
      required: true,
    }
  },
  methods: {
    setTab(tab) {
      this.$emit('selected', tab);
    },
  },
};
</script>