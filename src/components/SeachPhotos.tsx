import React from 'react'
import useFetchSearch from '../hooks/useFetchSearch'
import { APIProps } from '../interfaces/APIProps'
import SearchPhotosList from './SearchPhotosList'

const SeachPhotos:React.FC<APIProps> = ({query,page,per_page}) => {
  const {data,error,isLoading} = useFetchSearch({query,page,per_page})


  const photos = data?.results || [];

  if(isLoading) return <h1>...LOADING</h1>
  if(error) return <h1>{error.message}</h1>

  return (
    <div className='flex flex-wrap gap-2'>
      <SearchPhotosList photos={photos} />
    </div>
  )
}

export default SeachPhotos