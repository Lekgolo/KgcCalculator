<template>
  <div class="module-select" :class="{ open: isOpen }">
    <div class="module-header">
      <div class="title">Modules</div>
      <div class="toggle-button" @click="toggleDrawer">
        {{ isOpen ? "&lt;" : "&gt;" }}
      </div>
    </div>
    <div class="module-content">
      <div class="module" v-for="(m, id) in modules" :key="m">
        {{ m.name }}
        <input
          type="checkbox"
          class="checkbox"
          :checked="m.active"
          @change="toggleModule(id)"
        />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "ModuleSelect",
  data: () => {
    return {
      isOpen: true,
    };
  },
  computed: {
    ...mapGetters({
      modules: "modules",
    }),
  },
  methods: {
    toggleDrawer() {
      this.isOpen = !this.isOpen;
    },
    toggleModule(id) {
      this.$store.dispatch("toggleModule", id);
    },
  },
};
</script>

<style lang="scss" scoped>
.module-select {
  position: relative;
  background: gray;
  width: 30px;
  transition: ease-in-out 0.5s;
}
.title {
  padding: 5px;
  opacity: 0;
  transition: ease-in-out 0.5s;
}
.open {
  width: 200px;

  .title {
    padding: 5px;
    opacity: 1;
  }

  .module-content {
    transition: ease-in-out 0.5s;
    opacity: 1;
  }
}
.toggle-button {
  position: absolute;
  right: 0px;
  top: 0px;
  padding: 5px;
  color: white;
  font-weight: bold;
  font-size: 30px;
  cursor: pointer;
}
.module-content {
  margin-top: 20px;
  transition: ease-in-out 0.5s;
  opacity: 0;
  overflow: hidden;
}
.module {
  padding: 5px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid black;
}
.module:last-child {
  border-bottom: 1px solid black;
}
</style>