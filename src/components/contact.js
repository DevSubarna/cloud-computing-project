import React, { useEffect, useState } from 'react'

function Contact() {

    
const [input, setInput] = useState(
    {
        name:"",
        email:"",
        message:""
    }
)

    function onChange(e) {
        const copy = {... input}
        copy[e.target.name] = e.target.value
        setInput(copy);
    }

    // function submit(e) {
    //     e.preventDefault()
    //     console.log('here '+input.message)
    // }

  return (
        <div id="tmContact" className="parallax-window" data-parallax="scroll" data-image-src="img/mini-profile-bg-02.jpg">
        <div className="container-fluid">
            <div className="row">
            <div className="col-12">
                <div className="tm-contact-items-container">
                    <div className="tm-contact-item">
                        <i className="fas fa-5x fa-briefcase tm-contact-item-icon"></i>
                        <p className="mb-0">
                        <b>Technology:</b> 
                        {/* <br>  */}
                        JAVA, C++, Spring Boot, AWS, Git, Perforce, Jira, Android
                        </p>
                    </div>
                    <div className="tm-contact-item">
                        <i className="fas fa-5x fa-building tm-contact-item-icon"></i>
                        <p className="mb-0">
                        <b>Products:</b>
                        {/* <br> */}
                        Android applications, ERP solutions, Meta Data Extraction System, Image Processing
                        </p>
                    </div>

                    <div className="tm-contact-item">
                        <i className="fas fa-5x fa-balance-scale tm-contact-item-icon"></i>
                        <p className="mb-0">
                            <b>For more info:</b>
                            {/* <br>  */}
                            <a href="https://www.linkedin.com/in/subarna-ghosh03/">LinkedIn Profile</a>
                        </p>
                    </div>
                </div>
            </div>
            </div>

            <div className="row">
            <div className="col-12">
                <form
                action="index.html"
                method="POST"
                id="tmContactForm"
                className="tm-bg-white-transparent"
                >
                <div className="form-group">
                    <input
                    type="text"
                    id="name"
                    name="name"
                    onChange={onChange}
                    className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                    placeholder="Name"
                    required
                    />
                </div>
                <div className="form-group">
                    <input
                    type="email"
                    id="email"
                    onChange={onChange}
                    name="email"
                    className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                    placeholder="Email"
                    required
                    />
                </div>
                <div className="form-group">
                    <textarea
                    rows="4"
                    id="message"
                    name="message"
                    onChange={onChange}
                    className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                    placeholder="Message"
                    required
                    ></textarea>
                </div>
                <div className="text-center">
                    <button
                    type="submit"
                    //onClick={() => submit()}
                    //onClick={() => MessageApi(input)}
                    className="btn tm-btn-submit rounded-0 text-white"
                    >
                    Submit
                    </button>
                </div>
                </form>
            </div>
            </div>
        </div>
        </div>
    )
}
export default Contact