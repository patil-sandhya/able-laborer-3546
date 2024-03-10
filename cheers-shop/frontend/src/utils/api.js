import axios from "axios"

export const getWine = (param) => {
    let params = {
        _page :param.pageNum,
        _limit: param.numOfData,
        _sort: param.sortOn,
        _order: param.sortBy
      }
  return  axios.get(`https://cheersapi.onrender.com/product/product`, {params})
};

export const getSingleRestaurant = () => {};

export const postRestaurant = () => {};

export const deleteRestaurant = () => {};

export const putRestaurant = () => {};
