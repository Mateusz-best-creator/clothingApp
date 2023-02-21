import React from "react";
import CategoryItem from "../category-item/category-item.component";
import './directory.styles.scss';

const Directory = ({categories}) => {
    return (
        <div className="directory-container">
            {categories.map((category) => {
                const { id, title, imageUrl } = category;
                return <CategoryItem key={id} title={title} imageUrl={imageUrl} />
            })}
        </div>
    )
}

export default Directory;