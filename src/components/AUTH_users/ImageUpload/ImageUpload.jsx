import React, { useState, useEffect } from 'react';

const ImageUpload = () => {
    const [uploadImages, setUploadImages] = useState()

    const formData = new FormData()
    formData.append('image', uploadImages)
    return (
        <div>
            <form>
                <input type='file'></input>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default ImageUpload;