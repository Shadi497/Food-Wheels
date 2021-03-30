import instance from "./instance";

export const trucksList = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/foodtruck");
      dispatch({
        type: "TRUCKS_LIST",
        payload: res.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
