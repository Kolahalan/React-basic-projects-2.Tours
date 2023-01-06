import React, { useState } from 'react';

const Tour = ({id,name,image,info,price,removeTour}) => {
  const [readMore,setReadMore] = useState(false)

  return (
    <article className="single-tour">
    <img src={image} alt=""/>
    <footer>
      <div className="tour-info">
        <h4>{name}</h4>
        <h4>{price}</h4>
      </div>
    <p>{readMore? info:`${info.substring(0,200)}...`}
    <button onClick={()=>setReadMore(!readMore)}>
      {readMore?'Read Less':'Read More'}
    </button>
    </p>
    <button className='delete-btn' onClick={()=>removeTour(id)}>Not Interested</button>
    </footer>
    </article>
  );
};

export default Tour;
