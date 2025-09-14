import { useState } from 'react'
import './App.css'
import axios from 'axios'

export const App = () => {
  const [prompt, setPrompt] = useState("")
  const [serverResponse, setServerResponse] = useState("")

  const handleFormInput = (e) => {
    setPrompt(e.target.value)
  }

  const handleFormSubmit = async(e) => {
    e.preventDefault()
    try {
      const res = await axios.post("http://localhost:8080/api/send",{
        prompt:prompt
      })
      setServerResponse(res.data.response);
    } catch (error) {
      console.log(error);
      setServerResponse("Failed to receive response")
    }
  }

  return (
    <>
      <form onSubmit={handleFormSubmit}>
        <input type="text" onChange={handleFormInput} />
        <button type="submit">Submit</button>
      </form>
      <p>{serverResponse}</p>
    </>
  )
}

