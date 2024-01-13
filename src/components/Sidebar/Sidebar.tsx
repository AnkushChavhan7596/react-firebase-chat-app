import React from 'react'
import "./Sidebar.css"

const Sidebar = () => {
  return (
    <div className='sidebar'>

        <div className="header">
            <h2 className='header__title'>Chat Bus</h2>
            <div className="header__profile">
                <img src="https://images.pexels.com/photos/1040882/pexels-photo-1040882.jpeg?auto=compress&cs=tinysrgb&w=600" alt="profile-image" />
                <h2>Ankush Chavhan</h2>
                <button>Logout</button>
            </div>
        </div>

        <div className="search">
            <input type="text" placeholder='Search user' />
            <img src="https://cdn-icons-png.flaticon.com/128/2811/2811806.png" alt="search-icon" className="search-icon" />
        </div>

        <div className="contacts">
            {
                [1,2,3,4,5,6,7,8,9,10,11,12,14,15,15,16,16,1,2,3,4,4,2,2,23,23,2,32,3,2,3,2,32].map((contact) => {
                    return (
                        <div className="contact">
                            <div className="profile">
                                <img src="https://images.pexels.com/photos/3772510/pexels-photo-3772510.jpeg?auto=compress&cs=tinysrgb&w=600" alt="user" />
                            </div>
                            <div className="info">
                                <h2 className='username'>Rushikesh Dudhe</h2>
                                <p className='last-msg'>Bye. Good night 😊</p>
                            </div>
                        </div>
                    )
                })
            }

        </div>

    </div>
  )
}

export default Sidebar