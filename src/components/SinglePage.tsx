import React from 'react'

interface SinglePageProps {
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

const SinglePage:React.FC<SinglePageProps> = ({alt_description,id,likes,urls,user}) => {
  return (
    <div key={id} className='flex gap-7 justify-center items-center'>
        <div>
        <img
              className="w-40 h-40 object-cover rounded"
              src={urls.thumb}
              alt={alt_description || 'Image'}
        />
        </div>
        <ul>
            <li>NAME: {user?.name}</li>
            <li>USERNAME: {user?.username}</li>
            <li>DECRIPTION: {alt_description}</li>
            <li>LIKES: {likes}</li>
        </ul>
    </div>
    
  )
}

export default SinglePage