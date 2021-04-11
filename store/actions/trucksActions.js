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

export const truckDetail = (truckId) => {
  return async (dispatch) => {
    try {
      const res = await instance.get(`/foodtruck/detail/${truckId}`);
      const hours = await instance.get(`/foodtruck/workinghours/${truckId}`);
      const menu = await instance.get(`/foodtruck/${truckId}/menu`);
      dispatch({
        type: "TRUCK_DETAIL",
        payload: res.data,
      });
      dispatch({
        type: "TRUCK_HOURS",
        payload: hours.data,
      });
      dispatch({
        type: "TRUCK_MENU",
        payload: menu.data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
