import React from "react";
import DirectoryItem from "../directory-item/directory-item.component";
import './directory.styles.scss';

const Directory = ({categories}) => {
    return (
        <div className="directory-container">
            {categories.map((category) => {
                const { id, title, imageUrl } = category;
                return <DirectoryItem key={id} title={title} imageUrl={imageUrl} />
            })}
        </div>
    )
}

export default Directory;