import React from 'react'
import { IData } from '../interfaces/IData'
import FetchTodosItem from './items/FetchTodosItem'

interface FetchTodosProps {
    data:IData[] | undefined
}

const FetchTodos:React.FC<FetchTodosProps> = ({data}) => {

  return (
    <div className='flex flex-wrap gap-4 justify-center'>
            {data?.map(({id,alt_description,likes,urls}) => (
                <FetchTodosItem id={id} alt_description={alt_description} likes={likes} urls={urls} key={id}/>
         ))
        }
    </div>
  )
}

export default FetchTodos