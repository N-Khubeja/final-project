import { useQuery } from "@tanstack/react-query"
import fetchImage from "../api/fetchImage"
import { IData } from "../interfaces/IData"

const useFetchImage = (id:string) => {
    const result = useQuery<IData>({
        queryKey:['todo',id],
        queryFn:() => fetchImage(id)
    })
  return result
}

export default useFetchImage