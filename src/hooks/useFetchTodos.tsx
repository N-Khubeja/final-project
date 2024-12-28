import { useQuery } from "@tanstack/react-query"
import fetchTodos from "../api/fetchTodos"
import { APIProps } from "../interfaces/APIProps"
import { IData } from "../interfaces/IData"

const useFetchTodos = ({page, per_page}:APIProps) => {
    const result = useQuery<IData[]>({
        queryKey: ['photos', page, per_page],
        queryFn: () => fetchTodos({ page, per_page })
    })

  return result
}

export default useFetchTodos