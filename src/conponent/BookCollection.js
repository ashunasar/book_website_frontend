import React from "react";
import Book from "./Book";
import ItemData from "./ItemData";
function BookCollection() {
  return (
    <>
      {ItemData.map((val) => {
        return (
          <Book
            book={val.book}
            images={val.images}
            Author={val.Author}
            Available={val.Available}
            Price={val.Price}
            key={val.id}
          />
        );
      })}
    </>
  );
}

export default BookCollection;
