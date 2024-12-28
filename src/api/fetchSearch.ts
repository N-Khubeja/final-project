import $axios from "../http/axios";
import { APIProps } from "../interfaces/APIProps";

export default async function fetchSearch({query,page,per_page}:APIProps){
    const res = await $axios.get('/search/photos',{
        params: {
            query,
            page,
            per_page
          }
    })

    return res.data
}