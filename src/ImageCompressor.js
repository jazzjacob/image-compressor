import Compressor from 'compressorjs'
import { useState, useEffect } from 'react'

const ImageCompressor = () => {
  const [imageURI, setImageURI] = useState('')

  useEffect(() => {
    console.log(imageURI)
  }, [imageURI])

  function imageSelected(e) {
    const file = e.target.files[0]

    if (!file) return

    new Compressor(file, {
      quality: 0.6,
      maxHeight: 3000,
      maxWidth: 3000,

      success(result) {
        setImageURI(URL.createObjectURL(result))
      },
      error(err) {
        console.log(err.message);
      },
    })
  }

  return (
    <div style={style}>
      <h2>Image Compressor</h2>
      <p>Using <a href='https://github.com/fengyuanchen/compressorjs/blob/main/README.md'>Compressor.js</a></p>
      <p>
        <input onChange={imageSelected} type="file" id="file" accept="image/*" />
      </p>
      <img style={imgStyle} src={imageURI} />
    </div>
  )
}

export default ImageCompressor











const style = {
  backgroundColor: 'lightgray',
  padding: '1rem',
  fontFamily: 'monospace',
}

const imgStyle = {
  width: '300px'
}