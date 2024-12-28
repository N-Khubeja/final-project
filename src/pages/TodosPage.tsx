import React, { useDeferredValue, useState, useTransition } from 'react'
import useFetchTodos from '../hooks/useFetchTodos'
import SeachPhotos from '../components/SeachPhotos'
import FetchTodos from '../components/FetchTodos';


const TodosPage:React.FC = () => {
const [page,setpage] = useState(1)
const [per_page,setperPage] = useState(20)
const [query,setquery] = useState('')
const [isPending, startTransition] = useTransition()


  const {data,error,isLoading} = useFetchTodos({page,per_page})
  const deferredQuery = useDeferredValue(query)

  const handleQueryChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    startTransition(() => {
      setquery(value) 
    })
  }


  if(isLoading) return <h1>...LOADING</h1>
  if(error) return <h1>{error.message}</h1>
  return (
    <div>
    <div className='flex gap-5 justify-center items-center'>
    <input className='m-12 p-3 border border-black' value={query} type="text" placeholder='SEARCH PHOTO' onChange={handleQueryChange}/>
      
      <select className='h-7 border border-black' value={per_page} onChange={(e) => setperPage(Number(e.target.value))}>
          <option value={20}>20</option>
          <option value={25}>25</option>
          <option value={30}>30</option>
      </select>

      <select className='h-7 border border-black' value={page} onChange={(e) => setpage(Number(e.target.value))}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
      </select>
      
    </div>

      <div className="flex flex-wrap gap-2">
      {
      deferredQuery  ? <SeachPhotos page={page} query={deferredQuery} per_page={per_page}/>
      :
      <FetchTodos data={data}/>
      }
      </div>
    </div>
  )
}

export default TodosPage