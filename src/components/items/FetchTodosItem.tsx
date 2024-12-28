import React from 'react'
import { useNavigate } from 'react-router-dom';

interface FetchTodosItemProps {
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

const FetchTodosItem:React.FC<FetchTodosItemProps> = ({alt_description,id,likes,urls}) => {

    const navigate = useNavigate()
  return (
        <div key={id} onClick={() => navigate(`/todos/${id}`)}>
            <img className="w-[200px] h-[250px] object-cover cursor-pointer border border-black" src={urls.thumb} alt={alt_description || 'Image'} />
        </div>
  )
}

export default FetchTodosItem