import axios from "axios";

export async function allCities() {
  try {
    const response = await axios
      .get("https://nlstar.com/api/catalog3/v1/city/", {
        params: {
          term: "sas",
          country: "ru",
        },
      });
    return response.data.data;
  } catch (e) {
    throw new Error(e);
  }
}
