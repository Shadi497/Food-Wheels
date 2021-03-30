import instance from "./instance";
export const getCategory = () => {
  return async (dispatch) => {
    try {
      const res = await instance.get("/category");
      console.log(res);
      dispatch({
        type: "GET_CATEGORY",
        payload: res,
      });
    } catch (error) {
      console.error(error);
    }
  };
};
