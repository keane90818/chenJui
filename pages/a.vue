<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent fullscreen>
      <v-card id="introduce" class="flex justify-center">
        <v-text class="flex justify-center">
          <img class="max-w-sm" src="../assets/logo.png" alt="陳酒家釀" />
        </v-text>
        <v-text class="flex justify-center">
          <img class="max-w-sm" src="../assets/introtuce.png" alt="陳酒家釀" />
        </v-text>
        <v-card-actions class="flex justify-center">
          <v-btn
            color="brown-darken-1 "
            size="x-large"
            variant="outlined"
            elevation="4"
            @click="dialog = false"
          >
            一飲而盡
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>
<script>
import { ref, onMounted, nextTick } from "vue";

export default {
  setup() {
    const dialog = ref(false);
    onMounted(() => {
      dialog.value = true;
    });
    return {
      dialog
    };
  }
};
</script>
<style>
#introduce {
  background: url("../assets/background/introduce-part.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
}
.v-btn {
  font-weight: 800;
}
.v-btn--variant-outlined {
  border: 2px solid currentColor;
}
.a {
  width: 1200px;
  height: 450px;
}
</style>
