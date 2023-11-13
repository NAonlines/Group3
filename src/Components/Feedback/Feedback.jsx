import React, { useState } from 'react';
import '../Feedback/Feedback.css'
const Feedback = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const toggleChatBox = () => {
        setIsOpen(!isOpen);
    };

    const handleInputChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = event => {
        event.preventDefault();
        setMessages([...messages, message]);
        console.log('Feedback submitted:', message);
        setMessage('');
    };

    return (
        <div className={`feedback-chat-box ${isOpen ? 'open' : ''}`}>
            <div className="chat-toggle" onClick={toggleChatBox}>
                {isOpen ? 'Close' : 'Feedback'}
            </div>
            {isOpen && (
                <div className="chat-content">
                    <div className="chat-header text-primary">
                        <h4 className="container mb-0">Feedback</h4>
                    </div>
                    <div className="chat-body">
                        <div className="messages">
                            {messages.map((msg, index) => (
                                <div key={index} className="message bg-light p-2 m-2">
                                    {msg}
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="chat-footer">
                        <form onSubmit={handleSubmit} className="d-flex">
                            <input
                                type="text"
                                placeholder="Type your feedback..."
                                value={message}
                                onChange={handleInputChange}
                                className="form-control"
                            />
                            <button type="submit" className="btn btn-primary ml-2">
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Feedback;