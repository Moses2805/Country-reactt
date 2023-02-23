import React from 'react'
import { MdDarkMode } from 'react-icons/md'


const Header = (props) => {
    return (
        <div>
            <header>
                <div className="container">
                    <div className="row d-flex justify-content-between">
                        <div className="col-6 col-md-4 col-lg-3 mt-3">
                            <div className='wherein'>
                                <h5 className={props.darkMode && "dark-mode-words"}>Where in the world</h5>
                            </div>
                        </div>
                        <div className="col-4 col-md-3 col-lg-2 mt-3">
                            <div className='darkmode d-flex justify-content-evenly align-items-center' onClick={() => props.setDarkMode(!props.darkMode)}>
                                <MdDarkMode className={props.darkMode && "dark-mode-words"} />

                                <span className={props.darkMode && "dark-mode-words"}>Dark Mode</span>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}

export default Header