import instance from "./instance";

export const getTrucksByCategory = (categoryId) => {
  return async (dispatch) => {
    try {
      const res = await instance.get(`/foodtruck/category/${categoryId}`);
      dispatch({
        type: "GET_TRUCK_BY_CATEGORY",
        payload: res.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
