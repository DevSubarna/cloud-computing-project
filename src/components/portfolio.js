import React from 'react'

function Portfolio() {
  return (
    <section id="tmPortfolio">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="tm-portfolio-item">
              <div className="tm-portfolio-name text-white tm-bg-green">
                Senior Software Engineer
              </div>
              <div className="tm-portfolio-description">
                <h3 className="tm-text-green">
                  Newgen Technology
                </h3>
                <p className="mb-0">
                  Worked in ERP solutions for garments sector. Team management and worked with project management team
                </p>
              </div>
            </div>

            <div className="tm-portfolio-item">
              <div className="tm-portfolio-name text-white tm-bg-orange">
                Senior System Analyst
              </div>
              <div className="tm-portfolio-description">
                <h3 className="tm-text-orange">
                  IPvision Canada Inc
                </h3>
                <p className="mb-0">
                  Worked in image processing team and SDK integration team for develping social application
                </p>
              </div>
            </div>

            <div className="tm-portfolio-item">
              <div className="tm-portfolio-name text-white tm-bg-blue">
                Lead Engineer
              </div>
              <div className="tm-portfolio-description">
                <h3 className="tm-text-blue">
                  Samsung R&D Institute Bangladesh
                </h3>
                <p className="mb-0">
                  Worked with MEA commercial developement team for both feature phone in C++ and smart phone in android platform
                </p>
              </div>
            </div>

            <div className="tm-portfolio-item">
              <div className="tm-portfolio-name text-white tm-bg-dark-gray">
                System Developer
              </div>
              <div className="tm-portfolio-description">
                <h3 className="tm-text-dark-gray">
                  Cention AB
                </h3>
                <p className="mb-0">
                  Worked in developing communication application and deployment
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
