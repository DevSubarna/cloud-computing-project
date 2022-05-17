import Contact from "./components/contact";
import Portfolio from "./components/portfolio";
import Welcome from "./components/welcome";
import React, { useEffect } from "react";
import Amplify, {API} from "aws-amplify";
import awsExports from "./aws-exports";
Amplify.configure(awsExports);


function App() {
  const [title, setTitle] = React.useState('')
  const [name, setName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [message, setMessage] = React.useState('')
  const [phone, setPhone] = React.useState('')
  const [messages, setMessages] = React.useState([])

  // useEffect(()=>{
  //     API.get('messageapi','/messages/name')
  //       .then(msgRes => {
  //        setMessages([...messages, ...msgRes])
  //     });
  // },[]);

  const handleSubmit = e => {
     e.preventDefault()
     API.post('messageapi',"/messages", {
       body: {
         title: title,
         name: name,
         email: email,
         message: message,
         phone: phone
       }
     }).then(() => {
        setMessages([{title: title, name: name, email: email, message: message, phone: phone}, ...messages])
     })
  };

            // var AWS = require('aws-sdk');
            // AWS.config.update({region: 'US-EAST-1'});
            // var sqs = new AWS.SQS({apiVersion: '2012-11-05'});
            // const SQS_QUEUE_URL = "https://sqs.us-east-1.amazonaws.com/864710665833/messageQueue"

            // var params = {
            //    // Remove DelaySeconds parameter and value for FIFO queues
            //   DelaySeconds: 10,
            //   MessageAttributes: {
            //     "Name": {
            //       DataType: "String",
            //       StringValue: name
            //     },
            //     "Email": {
            //       DataType: "String",
            //       StringValue: email
            //     },
            //     "Message": {
            //       DataType: "String",
            //       StringValue: message
            //     }
            //   },
            //   MessageBody: "Message recieved from {name}",
            //   // MessageDeduplicationId: "TheWhistler",  // Required for FIFO queues
            //   // MessageGroupId: "Group1",  // Required for FIFO queues
            //   QueueUrl: SQS_QUEUE_URL
            // };

            // sqs.sendMessage(params, function(err, data) {
            //   if (err) {
            //     console.log("Error", err);
            //   } else {
            //     console.log("Success", data.MessageId);
            //   }
            // });


  return (
    <>
    <Welcome />
    <Portfolio />
    {/* <Contact /> */}
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
                //action="index.html"
                //method="POST"
                onSubmit={handleSubmit}
                id="tmContactForm"
                className="tm-bg-white-transparent"
                >
                <div className="form-group">
                    <input
                    type="text"
                    id="title"
                    name="title"
                    value= {title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                    placeholder="title"
                    required
                    />
                </div>
                <div className="form-group">
                    <input
                    type="text"
                    id="name"
                    name="name"
                    value= {name}
                    onChange={(e) => setName(e.target.value)}
                    className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                    placeholder="Name"
                    required
                    />
                </div>
                <div className="form-group">
                    <input
                    type="email"
                    id="email"
                    value= {email}
                    onChange={(e) => setEmail(e.target.value)}
                    name="email"
                    className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                    placeholder="Email"
                    required
                    />
                </div>
                <div className="form-group">
                    <input
                    type="phone"
                    id="phone"
                    value= {phone}
                    onChange={(e) => setPhone(e.target.value)}
                    name="phone"
                    className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                    placeholder="Phone"
                    required
                    />
                </div>
                <div className="form-group">
                    <textarea
                    rows="4"
                    id="message"
                    name="message"
                    value= {message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="form-control rounded-0 border-top-0 border-right-0 border-left-0"
                    placeholder="Message"
                    required
                    ></textarea>
                </div>
                <div className="text-center">
                    <button
                    type="submit"
                    className="btn tm-btn-submit rounded-0 text-white"
                    >
                    Submit
                    </button>
                </div>
                </form>
                <ul>
                  {messages.map(message => <li>Name: {message.name} Email: {message.email}</li>)}
                </ul>
                
            </div>
            </div>
        </div>
        </div>
    
    </>
  );
}

export default App;
