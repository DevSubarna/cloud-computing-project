import React from 'react'

function Welcome() {
  return (
    <section id="tmWelcome" className="parallax-window" data-parallax="scroll" data-image-src="img/mini-profile-bg-01.jpg">
    <div className="container-fluid tm-brand-container-outer">
      <div className="row">
        <div className="col-12">
          <div className="ml-auto mr-0 tm-bg-black-transparent text-white tm-brand-container-inner">
            <div className="tm-brand-container text-center">
              <h1 className="tm-brand-name">Welcome</h1>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div className="tm-bg-white-transparent tm-welcome-container">
      <div className="container-fluid">
        <div className="row h-100">
          <div className="col-md-7 tm-welcome-left-col">
            <div className="tm-welcome-left">
              <h2 className="tm-welcome-title">About Me</h2>
              <p className="pb-0">
                Hi! I am Subarna Ghosh and now am studying Compro in Maharishi International University. I worked as a developer in different software companies. 
                I love to explore world, traveling and hiking 
              </p>
            </div>
          </div>
          <div className="col-md-5">
            <div className="tm-welcome-right">
              <i className="fas fa-4x fa-address-card p-3 tm-welcome-icon"></i>
              <picture> <img src="img/my_pic.jpg" alt="my picture" width="300" height="300"/></picture>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Welcome
