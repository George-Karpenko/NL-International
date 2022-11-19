import axios from "axios";

export async function allCategories(cityID) {
  try {
    const response = await axios.get(
      "https://nlstar.com/ru/api/catalog3/v1/menutags/",
      {
        params: {
          city_id: cityID,
        },
      }
    );
    return response.data.tags;
  } catch (e) {
    throw new Error(e);
  }
}

export async function findCategory(cityID, slug) {
  try {
    const response = await axios.get(
      `https://nlstar.com/ru/api/catalog3/v1/menutags/${slug}`,
      {
        params: {
          city_id: cityID,
        },
      }
    );
    return response.data;
  } catch (e) {
    this.errors.push(e);
  }
}
