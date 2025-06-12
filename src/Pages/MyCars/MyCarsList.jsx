import React, { use } from 'react';

const MyCarsList = ({myCarsPromise}) => {
    const cars = use(myCarsPromise);
    console.log(cars)

    return (
        <div>
            {cars.length}
        </div>
    );
};

export default MyCarsList;