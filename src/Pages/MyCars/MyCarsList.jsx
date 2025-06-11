import React, { use } from 'react';

const MyCarsList = ({myCarsPromise}) => {
    const carData = use(myCarsPromise);
    console.log(carData)

    return (
        <div>
            {carData.length}
        </div>
    );
};

export default MyCarsList;