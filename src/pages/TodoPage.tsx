import React from 'react'
import useFetchImage from '../hooks/useFetchImage'
import { useParams } from 'react-router-dom'
import { IData } from '../interfaces/IData'
import SinglePage from '../components/SinglePage'

const TodoPage:React.FC = () => {
  const {id} = useParams<{ id: string | any }>()

  const {data,error,isLoading} = useFetchImage(id)
  const {id:photoid,alt_description,urls,likes,user} = data || ({} as IData)

  if(isLoading) return <h1>...LOADING</h1>
  if(error) return <h1>{error.message}</h1>

  return (
    <div>
      <SinglePage alt_description={alt_description} id={photoid} likes={likes} urls={urls} key={photoid} user={user}/>
    </div>
    
  )
}

export default TodoPage