import React from 'react'
import { IData } from '../interfaces/IData'
import SearchPhotoItems from './searchPhotoItems'

interface SearchPhotosListProps {
    photos:IData[]
}

const SearchPhotosList:React.FC<SearchPhotosListProps> = ({photos}) => {


  return (
    <div className='flex flex-wrap gap-4 justify-center'>
        {photos?.map(({alt_description,id,likes,urls,user}) => (
            <SearchPhotoItems user={user} key={id} alt_description={alt_description} id={id} likes={likes} urls={urls}/>
        ))}
    </div>
  )
}

export default SearchPhotosList