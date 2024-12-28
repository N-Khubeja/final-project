import React from 'react'
import { useNavigate } from 'react-router-dom';

interface SearchPhotoItemsProps{
    id: string;
    alt_description: string | null;
    urls: {
      thumb: string;
      regular: string;
      full: string;
    };
    user?: {
      name: string;
      username: string;
    };
    likes: number;
}

const SearchPhotoItems:React.FC<SearchPhotoItemsProps> = ({alt_description,id,likes,urls,user}) => {
    const navigate = useNavigate()
  return (
    <div key={id} className="cursor-pointer" onClick={() => navigate(`/todos/${id}`)} >
            <img
              className="w-40 h-40 object-cover rounded"
              src={urls.thumb}
              alt={alt_description || 'Image'}
            />
            <p className="text-center text-sm">{user?.name}</p>
          </div>
  )
}

export default SearchPhotoItems