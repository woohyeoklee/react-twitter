import { TfiImage } from "react-icons/tfi";

export default function PostForm() {
  const handleFileUpload = () => {}

  return (
    <form className="post-form">
        <textarea 
          className="post-form__textarea" 
          required 
          name="content" 
          id="content"
          placeholder="What's happening?"
          />
          <div className="post-form__submit-area">
            <label htmlFor="file-input" className="post-form__file">
              <TfiImage className="post-form__file-icon" />
            </label>
              <input 
                type="file" 
                id="file-input" 
                accept="image/*"
                onClick={handleFileUpload}
                className="hidden"
              />
              <input 
                type="submit" 
                value="Tweet" 
                className="post-form__submit-btn" 
              />
          </div>
      </form>
  )
}
