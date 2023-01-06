import React from 'react';
import Tour from './Tour';
const Tours = ({tourdata,removetour}) => {
  return (
    <section>
      <div className="title">
        <h2>our tours</h2>
        <div className="underline"></div>
      </div>
      <div>
        {tourdata.map((tour) => {
          return <Tour key={tour.id} {...tour} removeTour={removetour} />;
        })}
      </div>
    </section>
    )
};

export default Tours;
