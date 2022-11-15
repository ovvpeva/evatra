import React from 'react'
import Split from '../Split'
import Link from 'next/link'

const CallToAction = ({img}) => {
    return (
      <section
        className="call-action section-padding sub-bg bg-img"
        style={{ backgroundImage: `url(${img ? img : "/img/patrn.svg"})` }}
      >
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-lg-9">
              <div className="content sm-mb30">
                <Split>
                  
                  <h2 className="wow words chars splitting" data-splitting>
                    news... <br /> <b className="back-color">coming soon</b>
                    .
                  </h2>
                </Split>
              </div>
            </div>

            
          </div>
        </div>
      </section>
    );
}

export default CallToAction