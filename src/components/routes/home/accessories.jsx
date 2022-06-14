import React from 'react'
import Directory from "../../directory/directory";

const Accessories = () => {
    const categories = [
    {
      id: 1,
      title: "Pijamas",
      imageUrl: "images/uno.jpg",
    },
    {
      id: 2,
      title: "Batas",
      imageUrl: "images/batas1.jpg",
    },
    {
      id: 3,
      title: "Pantuflas",
      imageUrl: "images/pantuflas.jpg",
    },
    {
      id: 4,
      title: "Cojines",
      imageUrl: "images/cojines.jpg",
    },
    {
      id: 5,
      title: "mens",
      imageUrl: "images/uno.jpg",
    },
  ];
    return (
        <div>
            <Directory categories={categories} />
        </div>
    )
}

export default Accessories
