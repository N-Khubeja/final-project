import $axios from "../http/axios";

export default async function fetchImage(id:string){
    const res = await $axios.get(`photos/${id}`)
    return res.data
}