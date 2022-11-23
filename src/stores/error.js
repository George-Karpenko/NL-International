import { defineStore } from "pinia";

export const useErrorStore = defineStore("error", {
  state: () => {
    return {
      errorTitle: "",
      errorMessage: "",
    };
  },
  actions: {
    updateError(error) {
      if (error.code === "ERR_NETWORK") {
        this.errorTitle = error.name;
        this.errorMessage = error.message;
        return;
      }
      this.errorTitle = `Ошибка ${error.response.status}`;
      this.errorMessage = error.response.data.detail;
    },
  },
});
