import { useState } from "react";


const cont = {
    backgroundColor: "#eee",
    cursor: "pointer",
    overflow: "hidden",
    position: "relative"
};

const SelectedImage = ({
                           photo,
                           margin,
                           direction,
                           top,
                           left
                       }) => {
    const [showDetails, setShowDetails] = useState(false);


    if (direction === "column") {
        cont.position = "absolute";
        cont.left = left;
        cont.top = top;
    }

    function MouseOver() {
        setShowDetails(true);
    }

    function MouseOut() {
        setShowDetails(false);
    }

    return (
        <div
            style={{margin, height: photo.height, width: photo.width, ...cont}}
            onMouseEnter={MouseOver}
            onMouseLeave={MouseOut}
            className={'hover-image relative ' + (!showDetails ? "not-selected" : 'selected')}
        >
            <img
                className={'block'}
                alt={photo.title}
                {...photo}
            />
            {showDetails &&
                <div className={'hover-image-overlay m-4 md:m-8 text-white'}>
                    <div className={'inner-overlay max-w-fit'}>
                        <h3 className={'text-sm md:text-xl font-bold pb-4'}>{photo.title}</h3>
                        <hr/>
                        <p className={'text-xs md:text-base pt-2 md:pt-4'}>{photo.description}</p>
                    </div>
                </div>}

        </div>
    );
};

export default SelectedImage;