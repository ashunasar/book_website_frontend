import React, { useEffect, useState } from "react";
import Label from "./Label";
import Input from "./Input";
import { useHistory } from "react-router-dom";
import Api from "../utils/api_config";
export default function Upload() {
  let history = useHistory();

  useEffect(() => {
    async function checkAuth() {
      try {
        await Api.get("/isauthenticated");
      } catch (error) {
        alert("Pleaes login first");
        history.push("/login");
      }
    }
    checkAuth();
  });

  const inputplaceholder = "Book Title";
  const inputplaceholder2 = "Author Name";
  const inputplaceholder3 = "Market price";
  const inputplaceholder4 = "Quantity";
  const inputTyppe = "text";
  const textId = "inputText";

  const [bookName, setBookName] = useState("");
  function onBookNameChange(event) {
    setBookName(event.target.value);
  }

  const [writerName, setWriterName] = useState("");
  function onWriterNameChange(event) {
    setWriterName(event.target.value);
  }

  const [marketPrice, setMarketPrice] = useState("");
  function onMarketPriceChange(event) {
    setMarketPrice(event.target.value);
  }

  const [quantity, setQuantity] = useState("");
  function onQuantityChange(event) {
    setQuantity(event.target.value);
  }

  const [bookCover, setBookCover] = useState("");
  function onBookCoverChange(event) {
    setBookCover(event.target.files[0]);
  }

  async function onUpload() {
    let formData = new FormData();

    formData.append("title", bookName);
    formData.append("author", writerName);
    formData.append("quantity", quantity);
    formData.append("marketPrice", marketPrice);
    formData.append("cover", bookCover);
    formData.append("refToken", localStorage.getItem("refreshToken"));
    try {
      const response = await Api.post("/book/upload", formData);

      if (response.status === 200) {
        setBookName("");
        setWriterName("");
        setMarketPrice("");
        setQuantity("");
        setBookCover("");

        alert("Book Uploaded");
        history.push("/");
      }
    } catch (error) {
      alert("Error: " + error.response.data.error.message);
    }
  }

  return (
    <>
      <section className='login bg-pri d-grid align-items-center pb-5 h-100 pt-5'>
        <div className='container-fluid p-0'>
          <div className='row flex-column form bg-white mx-auto w-sm-100 max-widht-95'>
            <div className='col-12 col-sm-10 mx-auto'>
              <Label htmlFor='inputText' content='Book Name' />
              <Input
                type={inputTyppe}
                id={textId}
                placeholder={inputplaceholder}
                onChange={onBookNameChange}
                value={bookName}
              />
            </div>
            <div className='col-12 col-sm-10 mx-auto'>
              <Label htmlFor='inputText' content='Writer name' />
              <Input
                type={inputTyppe}
                id={textId}
                placeholder={inputplaceholder2}
                onChange={onWriterNameChange}
                value={writerName}
              />
            </div>
            <div className='col-12 col-sm-10 mx-auto'>
              <Label htmlFor='inputText' content='Market price' />
              <Input
                type={inputTyppe}
                id={textId}
                placeholder={inputplaceholder3}
                onChange={onMarketPriceChange}
                value={marketPrice}
              />
            </div>
            <div className='col-12 col-sm-10 mx-auto'>
              <Label htmlFor='inputText' content='Quantity' />
              <Input
                type={inputTyppe}
                id={textId}
                placeholder={inputplaceholder4}
                onChange={onQuantityChange}
                value={quantity}
              />
            </div>
            <div className='col-12 col-sm-10 mx-auto'>
              <Label htmlFor='fileInput' content='Book cover' />
              <Input type='file' id='fileInput' onChange={onBookCoverChange} />
            </div>
            <div className='col-12 col-sm-10 mx-auto my-3'>
              <button
                className='w-100 login-heading bg-dark-brown p-3 text-white rounded font-26 border-0 text-center d-inline-block text-decoration-none'
                onClick={onUpload}
              >
                Upload
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
