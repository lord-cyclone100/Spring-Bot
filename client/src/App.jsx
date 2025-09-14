import { useState, useEffect, useRef } from 'react'
import './App.scss'
import axios from 'axios'
import { BACKEND_URL } from './config'
import { Navbar } from './components/Navbar'
import ReactMarkdown from 'react-markdown'

export const App = () => {
  const [prompt, setPrompt] = useState("")
  const [serverResponse, setServerResponse] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [chatHistory, setChatHistory] = useState([])
  const chatMessagesRef = useRef(null)

  // Auto-scroll to bottom when new messages are added
  useEffect(() => {
    if (chatMessagesRef.current) {
      chatMessagesRef.current.scrollTop = chatMessagesRef.current.scrollHeight
    }
  }, [chatHistory, isLoading])

  const handleFormInput = (e) => {
    setPrompt(e.target.value)
  }

  const handleFormSubmit = async(e) => {
    e.preventDefault()
    if (!prompt.trim()) return
    
    setIsLoading(true)
    const userMessage = prompt
    setPrompt("")
    
    // Add user message to chat history
    setChatHistory(prev => [...prev, { type: 'user', message: userMessage }])
    
    try {
      const res = await axios.post(`${BACKEND_URL}/api/send`, {
        prompt: userMessage
      })
      
      // Add bot response to chat history
      setChatHistory(prev => [...prev, { type: 'bot', message: res.data.response }])
      setServerResponse(res.data.response)
    } catch (error) {
      console.log(error)
      const errorMessage = "Failed to receive response"
      setChatHistory(prev => [...prev, { type: 'bot', message: errorMessage, isError: true }])
      setServerResponse(errorMessage)
    } finally {
      setIsLoading(false)
    }
  }

  const clearChat = () => {
    setChatHistory([])
    setServerResponse("")
  }

  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <div className="chat-container">
          <div className="chat-header">
            <h1>SpringBot Chat</h1>
            <p>Ask me anything and I'll help you out!</p>
            {chatHistory.length > 0 && (
              <button onClick={clearChat} className="clear-btn">
                Clear Chat
              </button>
            )}
          </div>
          
          <div className="chat-messages" ref={chatMessagesRef}>
            {chatHistory.length === 0 ? (
              <div className="welcome-message">
                <div className="welcome-icon">
                  <img src="/springbot-logo.svg" alt="SpringBot" className="welcome-logo" />
                </div>
                <h3>Welcome to SpringBot!</h3>
                <p>Start a conversation by typing your question below.</p>
              </div>
            ) : (
              chatHistory.map((message, index) => (
                <div key={index} className={`message ${message.type} ${message.isError ? 'error' : ''}`}>
                  <div className="message-avatar">
                    {message.type === 'user' ? (
                      '👤'
                    ) : (
                      <img src="/springbot-logo.svg" alt="SpringBot" className="avatar-logo" />
                    )}
                  </div>
                  <div className="message-content">
                    {message.type === 'bot' ? (
                      <ReactMarkdown>{message.message}</ReactMarkdown>
                    ) : (
                      <p>{message.message}</p>
                    )}
                  </div>
                </div>
              ))
            )}
            
            {isLoading && (
              <div className="message bot loading">
                <div className="message-avatar">
                  <img src="/springbot-logo.svg" alt="SpringBot" className="avatar-logo" />
                </div>
                <div className="message-content">
                  <div className="typing-indicator">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            )}
          </div>
          
          <form onSubmit={handleFormSubmit} className="chat-form">
            <div className="input-container">
              <input 
                type="text" 
                value={prompt}
                onChange={handleFormInput}
                placeholder="Type your message here..."
                className="chat-input"
                disabled={isLoading}
              />
              <button 
                type="submit" 
                className="send-btn"
                disabled={isLoading || !prompt.trim()}
              >
                {isLoading ? (
                  <div className="loading-spinner"></div>
                ) : (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M2 21L23 12L2 3V10L17 12L2 14V21Z" fill="currentColor"/>
                  </svg>
                )}
              </button>
            </div>
          </form>
        </div>
      </main>
    </div>
  )
}

