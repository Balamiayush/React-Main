import React, { useState } from "react";

const Imgpreview = () => {
  const [imgdiv, setImgdiv] = useState(false);
  const [image, setImage] = useState(null);
  const [final,setFinal] = useState([])
  const handleImgClick = () => {
    setImgdiv(!imgdiv);
  };

  const handleImageChange = (e) => {
    const localfile = e.target.files[0];

    // Check if file is a valid image
    if (localfile && (localfile.type === "image/png" || localfile.type === "image/jpeg")) {
      // Set image placeholder and file information
      setImage({ placeholder: URL.createObjectURL(localfile), file: localfile });
    } else {
      alert("Please select a valid image file (png or jpg)");
    }
  };
  const saveHandler=()=>{
setFinal(image)
  }
  return (
    <div className="w-full h-screen flex-col bg-slate-500 items-center flex justify-around">
      <div onClick={handleImgClick} className="h-[10vw] w-[10vw]">
        <img
          src={final.placeholder}
          alt="Preview"
          className="cursor-pointer object-contain rounded-full"
        />
      </div>
      {imgdiv && (
        <div
          className={`w-[25vw] h-[25vw] bg-blue-400 transition-all duration-500 opacity-100 scale-100 rounded-md transform ${
            imgdiv ? "scale-100" : "scale-0 opacity-0"
          }`}
        >
          <div>
            <input type="file" onChange={handleImageChange} />
            <button className="bg-red-300" onClick={saveHandler}>save</button>
            {image && (
              <div className="mt-4">
                <p>Image Preview:</p>
                <img
                  src={image.placeholder}
                  alt="Uploaded Preview"
                  className="object-contain rounded-md w-[100%] h-[100%]"
                />
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Imgpreview;
