import React from 'react';
import preloader from '../../../assets/images/preloader.gif';

const Preloader: React.FC = (props) => {
    return (
        <div>
            <img src={preloader} alt={'isFetching'}/>
        </div>
    );
}
export default Preloader;