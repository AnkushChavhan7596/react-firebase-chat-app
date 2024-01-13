import React from 'react'
import "./Chat.css"

const Chat = () => {
  return (
    <div className="chat">
        {/* header */}
        <div className="header">
            <div className="left">
                <h2 className="name">Rushikesh Dudhe</h2>
            </div>

            <div className="right">
                <img src="https://cdn-icons-png.flaticon.com/128/4945/4945907.png" alt="video-call" />
                <img src="https://cdn-icons-png.flaticon.com/128/8042/8042425.png" alt="add" />
                <img src="https://cdn-icons-png.flaticon.com/128/12797/12797777.png" alt="more" />
            </div>
        </div>


        {/* Chat body */}
        <div className="chat-body">

            <div className="chats">
                <div className="recieved">
                    <div className="msg">
                        <p className="text">Hi Ankush</p>
                        <p className="time">12:20 PM</p>
                    </div>
                </div>
                <div className="sent">
                    <div className="msg">
                        <p className="text">Hello Rushikesh</p>
                        <p className="time">9:20 AM</p>
                    </div>
                </div>
                <div className="recieved">
                    <div className="msg">
                        <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum, modi.lorem20 Ankush</p>
                        <p className="time">12:20 PM</p>
                    </div>
                </div>
                <div className="sent">
                    <div className="msg">
                        <p className="text">Hello Rushikesh</p>
                        <p className="time">9:20 AM</p>
                    </div>
                </div>
                <div className="recieved">
                    <div className="msg">
                        <p className="text">Hi Ankush</p>
                        <p className="time">12:20 PM</p>
                    </div>
                </div>
                <div className="sent">
                    <div className="msg">
                        <p className="text">Hello Rushikesh</p>
                        <p className="time">9:20 AM</p>
                    </div>
                </div>
                <div className="recieved">
                    <div className="msg">
                        <p className="text">Hi Ankush</p>
                        <p className="time">12:20 PM</p>
                    </div>
                </div>
                <div className="sent">
                    <div className="msg">
                        <p className="text">Hello Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse quis rerum accusamus tempora explicabo voluptate iste quibusdam consequuntur consequatur. Magni.</p>
                        <p className="time">9:20 AM</p>
                    </div>
                </div>
                <div className="recieved">
                    <div className="msg">
                        <p className="text">Hi Ankush</p>
                        <p className="time">12:20 PM</p>
                    </div>
                </div>
                <div className="sent">
                    <div className="msg">
                        <p className="text">Hello Rushikesh</p>
                        <p className="time">9:20 AM</p>
                    </div>
                </div>
                <div className="recieved">
                    <div className="msg">
                        <p className="text">Hi Ankush</p>
                        <p className="time">12:20 PM</p>
                    </div>
                </div>
                <div className="sent">
                    <div className="msg">
                        <p className="text">Hello Rushikesh</p>
                        <p className="time">9:20 AM</p>
                    </div>
                </div>  <div className="recieved">
                    <div className="msg">
                        <p className="text">Hi Ankush</p>
                        <p className="time">12:20 PM</p>
                    </div>
                </div>
                <div className="sent">
                    <div className="msg">
                        <p className="text">Hello Rushikesh</p>
                        <p className="time">9:20 AM</p>
                    </div>
                </div>  <div className="recieved">
                    <div className="msg">
                        <p className="text">Hi Ankush</p>
                        <p className="time">12:20 PM</p>
                    </div>
                </div>
                <div className="sent">
                    <div className="msg">
                        <p className="text">Hello Rushikesh</p>
                        <p className="time">9:20 AM</p>
                    </div>
                </div>  <div className="recieved">
                    <div className="msg">
                        <p className="text">Hi Ankush</p>
                        <p className="time">12:20 PM</p>
                    </div>
                </div>
                <div className="sent">
                    <div className="msg">
                        <p className="text">Hello Rushikesh</p>
                        <p className="time">9:20 AM</p>
                    </div>
                </div>  <div className="recieved">
                    <div className="msg">
                        <p className="text">Hi Ankush</p>
                        <p className="time">12:20 PM</p>
                    </div>
                </div>
                <div className="sent">
                    <div className="msg">
                        <p className="text">Hello Rushikesh</p>
                        <p className="time">9:20 AM</p>
                    </div>
                </div>  <div className="recieved">
                    <div className="msg">
                        <p className="text">Hi Ankush</p>
                        <p className="time">12:20 PM</p>
                    </div>
                </div>
                <div className="sent">
                    <div className="msg">
                        <p className="text">Hello Rushikesh</p>
                        <p className="time">9:20 AM</p>
                    </div>
                </div>
                <div className="recieved">
                    <div className="msg">
                        <p className="text">Hi Ankush</p>
                        <p className="time">12:20 PM</p>
                    </div>
                </div>
                <div className="sent">
                    <div className="msg">
                        <p className="text">Hello Rushikesh</p>
                        <p className="time">9:20 AM</p>
                    </div>
                </div>
            </div>
            

            {/* Chat footer */}
            <div className="footer">
                <input type="text" className="type-box" placeholder='Type Something ...' />

                <div className="send-wrapper">
                    <img src="https://cdn-icons-png.flaticon.com/128/8138/8138518.png" alt="attachment" />
                    <img src="https://cdn-icons-png.flaticon.com/128/10929/10929794.png" alt="add-image" />
                    <button className='send-btn'>Send</button>
                </div>
            </div>
        </div>


    </div>
  )
}

export default Chat