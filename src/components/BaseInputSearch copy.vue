<script>
import BaseButton from "./BaseButton.vue";

export default {
  props: {
    id: {
      type: String,
      default: "",
    },
    modelValue: {
      type: Object,
      default: {},
    },
    labelValue: {
      type: String,
      default: "",
    },
    keyOption: {
      type: String,
      default: "name",
    },
    options: {
      type: Array,
      default: [],
    },
    inputClass: {
      type: String,
      default: "",
    },
  },
  emits: ["update:modelValue"],
  data() {
    return {
      value: {},
      mousedownState: false,
      isOpenOptions: false,
      list: [],
      isBlurInput: false,
      isButtonDisabled: true,
    };
  },
  methods: {
    updateValue() {
      if (this.isButtonDisabled) return;
      this.$emit("update:modelValue", this.value);
    },
    filterOptions() {
      this.list = [];
      this.isButtonDisabled = true;
      if (this.value[this.$props.keyOption].length < 3) {
        return;
      }
      this.openOptions();
      this.list = this.$props.options.filter((option) => {
        return option[this.$props.keyOption].includes(
          this.value[this.$props.keyOption]
        );
      });
    },
    selectItem(option) {
      this.value = option;
      this.filterOptions();
      this.closeOptions();
      this.mousedownState = false;
      this.isButtonDisabled = false;
    },
    openOptions() {
      this.isOpenOptions = true;
    },
    closeOptions() {
      this.isOpenOptions = false;
    },
    blurInput() {
      if (!this.mousedownState) {
        this.closeOptions();
      }
    },
    mousedownItem() {
      this.mousedownState = true;
    },
  },
  components: { BaseButton },
};
</script>

<template>
  <div class="input">
    <label class="input__label" v-if="labelValue" :for="id">
      {{ labelValue }}
    </label>
    <div class="input__row">
      <input
        class="input__search"
        autocomplete="off"
        v-model="value[this.$props.keyOption]"
        @input="filterOptions"
        @blur="blurInput"
        @focus.prevent="openOptions"
        :id="id"
        :type="'text'"
        :class="inputClass"
        :="$attrs"
      />
      <!-- <template v-if="isOpenOptions && list.length"> -->
      <datalist class="input__datalist">
        <option
          class="input__option"
          v-for="option in list"
          @click.stop="selectItem(option)"
          @mousedown.prevent="mousedownItem"
          :value="option.id"
        >
          {{ option[keyOption] }}
        </option>
      </datalist>
      <!-- </template> -->
      <BaseButton
        @click="updateValue()"
        :disabled="isButtonDisabled"
        class="input__button"
        text="Подтвердить"
      />
    </div>
  </div>
</template>

<style scoped>
.input {
  margin-top: 12px;
  display: flex;
  gap: 14px;
}
.input-button {
  width: 174px;
  height: 48px;
  letter-spacing: 1.75px;
  text-transform: uppercase;
  font-size: 16px;
  line-height: 21px;
}
label {
  font-family: "Futura PT";
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  /* identical to box height, or 120% */

  color: #272727;
}
hr {
  margin: 0 20px 0 12px;
  background: rgba(151, 151, 151, 0.3);
}
.input-search {
  /* width: 100%; */
  background: #ffffff;
  border: 1px solid rgba(151, 151, 151, 0.5);
  border-radius: 5px;
  overflow: hidden;
  flex: 1;
}
.input-search:focus-within {
  border: 1px solid #272727;
}
input {
  width: 100%;

  height: 48px;
  padding: 12px 16px 13px 16px;
  border: none;
  outline-offset: 0;
  font-family: "Futura PT";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: #979797;
}
input:focus {
  padding: 12px 12px 13px 12px;
  outline: none;
  outline-offset: 0;
  color: #272727;
}

ul {
  margin: 5px 0;
}

li {
  height: 24px;
  font-family: "Futura PT";
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  border: none;
  padding: 7px 20px 7px 12px;
  cursor: pointer;
  /* identical to box height, or 133% */

  color: #979797;
}
li:hover {
  color: #272727;
}
</style>
