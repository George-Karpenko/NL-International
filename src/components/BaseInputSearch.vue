<script>
import BaseButton from "./BaseButton.vue";

export default {
  props: {
    id: {
      type: String,
      default: "",
    },
    modelValue: {
      type: String,
      required: true,
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
      required: true,
    },
    inputClass: {
      type: String,
      default: "",
    },
  },
  emits: ["update:modelValue"],
  data() {
    return {
      value: "",
      option: {},
      mousedownState: false,
      isOpenOptions: false,
      isShowCloseInput: false,
      list: [],
      isButtonDisabled: true,
    };
  },
  watch: {
    value(newValue) {
      this.updateInput();
    },
  },
  methods: {
    updateValue() {
      if (this.isButtonDisabled) return;
      this.$emit("update:modelValue", this.option);
    },
    filterOptions() {
      this.list = [];
      this.isButtonDisabled = true;
      if (this.value.length < 3) {
        return;
      }
      this.openOptions();
      this.list = this.$props.options.filter((option) => {
        return option[this.$props.keyOption].includes(this.value);
      });
    },
    selectItem(option) {
      this.option = option;
      this.value = option[this.$props.keyOption];
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
      this.isShowCloseInput = false;
      if (!this.mousedownState) {
        this.closeOptions();
      }
    },
    mousedownItem() {
      this.mousedownState = true;
    },
    listClose() {
      this.isOpenOptions = false;
      this.value = "";
      this.isButtonDisabled = true;
    },
    updateInput() {
      this.isShowCloseInput = false;
      if (this.value.length) {
        this.isShowCloseInput = true;
      }
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
    <div class="input__group">
      <div class="input__block">
        <div class="input__list">
          <input
            class="input__search"
            v-model="value"
            @input="filterOptions"
            @blur="blurInput"
            @focus.prevent="updateInput"
            :id="id"
            :type="'text'"
            :class="inputClass"
            :="$attrs"
          />
          <i
            v-if="isShowCloseInput"
            @click.stop="listClose"
            @mousedown.prevent="mousedownItem"
            class="input__close icon-close-input"
          ></i>
          <template v-if="isOpenOptions && list.length">
            <hr class="input__hr" />
            <ul class="input__options">
              <li
                v-for="option in list"
                @click.stop="selectItem(option)"
                @mousedown.prevent="mousedownItem"
                :value="option.id"
                class="input__option"
              >
                {{ option[keyOption] }}
              </li>
            </ul>
          </template>
        </div>
      </div>
      <BaseButton
        @click="updateValue()"
        :disabled="isButtonDisabled"
        :class="isButtonDisabled && 'input__button_disabled'"
        class="input__button"
      >
        Подтвердить
      </BaseButton>
    </div>
  </div>
</template>

<style scoped>
.input {
  container-type: inline-size;
  container-name: input;
}
.input__block {
  height: 48px;
  min-width: 100%;
  flex: 1;
}
.input__group {
  margin-top: 11px;
  display: flex;
  flex-wrap: wrap;
  row-gap: 20px;
  column-gap: 18px;
  justify-content: center;
}
.input__close {
  position: absolute;
  font-size: 12px;
  top: 21px;
  right: 20px;
  color: var(--grey);
}
.input__button {
  width: 174px;
  height: 48px;
  letter-spacing: 1.75px;
  text-transform: uppercase;
  font-size: 16px;
  line-height: 21px;
  padding-right: 5px;
  padding-bottom: 2px;
}

.input__button {
  background: linear-gradient(270deg, #ffa800 0%, #ff6f00 60.2%);
}
.input__button_disabled {
  background: transparent;
  color: var(--dark-grey);
  mix-blend-mode: normal;
  opacity: 0.5;
}
.input__label {
  font-weight: 600;
  font-size: 20px;
  line-height: 24px;
  color: var(--dark-grey);
}
.input__list {
  width: 100%;
  max-height: 50vh;
  position: relative;
  background: #ffffff;
  border: 1px solid rgba(151, 151, 151, 0.5);
  border-radius: 5px;
  overflow: hidden;
  overflow-y: auto;
  z-index: 1;
}
.input__list:focus-within {
  border: 1px solid var(--dark-grey);
}
.input__search {
  width: 100%;
  height: 46px;
  padding: 12px 16px 13px 16px;
  border: none;
  outline-offset: 0;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: var(--dark-grey);
}
.input__search::placeholder {
  color: var(--grey);
}
.input__search:focus {
  padding: 12px 12px 13px 12px;
  outline: none;
  outline-offset: 0;
}
.input__hr {
  margin: 1px 20px 0 12px;
  border-block-color: rgba(151, 151, 151, 0.3);
}

.input__options {
  margin: 12px 0;
  list-style: none;
  padding: 0;
}

.input__option {
  font-weight: 400;
  font-size: 18px;
  line-height: 24px;
  border: none;
  margin: 7px 20px 7px 12px;
  cursor: pointer;
  color: var(--grey);
}
.input__option:hover {
  color: var(--dark-grey);
}
@container input (min-width: 700px) {
  .input__block {
    min-width: auto;
  }
  .input__list:focus-within {
    margin-right: -4px;
    margin-left: 4px;
  }
}
</style>
