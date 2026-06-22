import React, { useState } from 'react'
import Navbar from '../Components/Navbar.jsx'
import Footer from '../Components/Footer.jsx'
import { supabase } from '../supabaseClient.js'
import '../Style/BecomeSeller.css'

function BecomeSeller() {
  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [description, setDescription] = useState('')
  const [image, setImage] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      setImage(file)
      setImagePreview(URL.createObjectURL(file))
    }
  }

  const handleSubmit = async () => {
    // Validation
    if (!name || !price || !description || !image) {
      setError('Please fill all fields and upload an image!')
      return
    }

    setLoading(true)
    setError('')

    try {
      // Step 1: Upload image to Supabase Storage
      const fileExt = image.name.split('.').pop()
      const fileName = `${Date.now()}.${fileExt}`

      const { error: uploadError } = await supabase.storage
        .from('product-images')
        .upload(fileName, image)

      if (uploadError) {
        setError('Image upload failed: ' + uploadError.message)
        setLoading(false)
        return
      }

      // Step 2: Get public URL of uploaded image
      const { data: urlData } = supabase.storage
        .from('product-images')
        .getPublicUrl(fileName)

      const imageUrl = urlData.publicUrl

      // Step 3: Save product data to Supabase table
      const { error: insertError } = await supabase
        .from('products')
        .insert([
          {
            name: name,
            price: price,
            description: description,
            image_url: imageUrl,
          }
        ])

      if (insertError) {
        setError('Failed to save product: ' + insertError.message)
        setLoading(false)
        return
      }

      // Success!
      setSuccess(true)
      setName('')
      setPrice('')
      setDescription('')
      setImage(null)
      setImagePreview(null)

    } catch (err) {
      setError('Something went wrong. Try again!')
    }

    setLoading(false)
  }

  return (
    <div className="page">
      <Navbar />
      <main className="seller-main">
        <div className="seller-header">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
            <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/>
          </svg>
          <h1 className="seller-header-title">Become a Seller</h1>
        </div>

        <div className="seller-form-container">

          {/* Success Message */}
          {success && (
            <div className="seller-success">
              ✅ Product submitted successfully!
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div className="seller-error">
              ❌ {error}
            </div>
          )}

          <div className="seller-field">
            <label className="seller-label">Company / Name Of Product :</label>
            <input
              type="text"
              className="seller-input"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="e.g. JBL Tune Pro"
            />
          </div>

          <div className="seller-field">
            <label className="seller-label">Price of Product :</label>
            <input
              type="text"
              className="seller-input"
              value={price}
              onChange={e => setPrice(e.target.value)}
              placeholder="e.g. ₹4,999"
            />
          </div>

          <div className="seller-field">
            <label className="seller-label">Description of the Product :</label>
            <textarea
              className="seller-textarea"
              rows={5}
              value={description}
              onChange={e => setDescription(e.target.value)}
              placeholder="Describe your product..."
            />
          </div>

          <div className="seller-field">
            <label className="seller-label">Image of the Product :</label>
            <div className="seller-upload-box" onClick={() => document.getElementById('imageInput').click()}>
              {imagePreview ? (
                <img src={imagePreview} alt="Preview" className="seller-img-preview" />
              ) : (
                <span>+ Upload Image</span>
              )}
              <input
                id="imageInput"
                type="file"
                accept="image/*"
                style={{ display: 'none' }}
                onChange={handleImageChange}
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="seller-field">
            <label className="seller-label"></label>
            <button
              className="seller-submit-btn"
              onClick={handleSubmit}
              disabled={loading}
            >
              {loading ? 'Submitting...' : 'Submit Product'}
            </button>
          </div>

        </div>
      </main>
      <Footer />
    </div>
  )
}

export default BecomeSeller
