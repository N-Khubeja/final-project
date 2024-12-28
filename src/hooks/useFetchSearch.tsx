import { useQuery } from "@tanstack/react-query"
import { APIProps } from "../interfaces/APIProps"
import fetchSearch from "../api/fetchSearch"
import { IData } from "../interfaces/IData" ///
interface useFetchSearchProps {
  results: IData[]
}

const useFetchSearch = ({page, per_page,query}:APIProps) => {
    const result = useQuery<useFetchSearchProps>({
        queryKey: ['search', query,page,per_page],
        queryFn: () => fetchSearch({query,page,per_page})
    })

  return result
}

export default useFetchSearch