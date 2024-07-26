// ! THunk aksiyonu
import api from "../../utils/api"
import ActionTypes from "../actionTypes"

export const getProducts=(restId)=>(dispatch)=>{
    // reducer a yüklenmenin basladıgını bildiriyoruz
    dispatch({
        type:ActionTypes.PRODUCT_LOADING,
    })
    api.get(`/products?restaurantId=${restId}`)
    // istek basarılı olursa reducer a verileri gönderiyoruz
    .then((res)=>dispatch({
        type:ActionTypes.PRODUCT_SUCCESS,
        payload:res.data,
    }))
    // istek basarısız olursa reducer a hata mesajı gönderiyoruz.
    .catch((err)=>dispatch({
        type:ActionTypes.PRODUCT_ERROR,
        payload:err.message,
    }))
}