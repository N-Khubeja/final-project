import $axios from "../http/axios"
import { APIProps } from "../interfaces/APIProps"

export default async function fetchTodos({ page, per_page }: APIProps){
    const res = await $axios.get('/photos',{
        params: {
            page,          
            per_page: per_page 
          }
    })

    return res.data
}