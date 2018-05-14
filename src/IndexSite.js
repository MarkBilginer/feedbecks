import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import CustomerInput from './CustomerInput';
import Footer from './Footer'
import './css/main.css';
import './css/company-logo.css';

window.React = React;

class IndexSite extends React.Component {

  render() {
    let companyPath = window.location.pathname; // returns /companyname/...
    let companyName = companyPath
      .split('/')
      .pop();
    return (
      <Grid fluid style={{
        minWidth: '300px'
      }}>
        <Row className="show-grid">
          <Col xs={12} sm={12} md={12} lg={6} lgPush={6} className="container-right-half">
            <div className="container-main">
              <div className="main-form-header">
                <span className="thoughtbubble-image" aria-hidden="true">
                  <a
                    className="image-link-landing"
                    href="https://dusuncembu.com"
                    aria-label="Homepage">
                    <svg
                      className="thoughtbubble-logo"
                      width="124.17062mm"
                      height="103.45384mm"
                      viewBox="0 0 124.17062 103.45384"
                      version="1.1">
                      <defs id="defs2"/>
                      <sodipodiNamedview
                        id="base"
                        pagecolor="#ffffff"
                        bordercolor="#666666"
                        borderopacity="1.0"
                        showgrid="false"
                        fit-margin-top="0"
                        fit-margin-left="0"
                        fit-margin-right="0"
                        fit-margin-bottom="0"/>
                      <g id="layer1" transform="translate(-40.11537,-33.625228)">
                        <path
                          style={{
                          fill: "rgba(1, 22, 39, 1)",
                          strokeWidth: "0.97692311"
                        }}
                          d="m 85.027197,135.5751 c -3.158975,-3.15897 -0.764338,-8.23407 3.885171,-8.23407 1.428655,0 2.97741,0.95754 3.950268,2.44231 1.4824,2.26243 1.4824,2.62219 0,4.88461 -1.839963,2.80814 -5.509594,3.233 -7.835439,0.90715 z m -23.112131,-8.50937 c -6.33808,-4.86623 -3.510593,-14.37855 4.273946,-14.37855 3.970687,0 6.198736,1.47481 7.389808,4.89153 1.186975,3.40496 0.686129,5.41735 -2.125731,8.54117 -2.193335,2.43667 -6.978257,2.91118 -9.538023,0.94585 z M 90.330493,113.0558 c -3.993831,-1.55117 -9.51398,-4.67301 -11.480971,-6.49291 -1.810496,-1.6751 -3.540845,-2.05331 -9.769231,-2.1353 -9.163882,-0.12063 -14.794508,-2.38512 -20.757492,-8.348096 -5.945825,-5.94582 -8.207429,-11.59895 -8.207429,-20.51538 0,-9.10986 2.348518,-14.78422 8.656161,-20.91455 5.270246,-5.12209 13.095079,-8.39315 20.077592,-8.39315 4.391365,0 5.203686,-0.38142 9.090892,-4.26863 7.861,-7.861 20.548508,-10.52043 31.086955,-6.51613 5.02991,1.91122 5.05303,1.91102 11.00086,-0.0936 11.75308,-3.96118 25.55669,-0.98335 34.01529,7.33806 16.84511,16.57191 12.2702,44.12326 -9.00493,54.23011 -4.26285,2.02508 -7.02204,2.58971 -13.35343,2.73257 l -7.98036,0.18007 -4.18727,4.542656 c -6.04649,6.55967 -10.51433,8.56247 -19.905857,8.92322 -4.298472,0.16511 -8.474818,0.0441 -9.28078,-0.26894 z M 83.01498,78.482274 c 4.024752,-4.4473 0.808545,-11.71047 -5.18552,-11.71047 -3.327762,0 -7.037429,3.59745 -7.037429,6.82454 0,5.95077 8.268218,9.25586 12.222949,4.88593 z m 23.92321,0.0126 c 4.2283,-4.22831 1.10548,-11.72308 -4.88462,-11.72308 -3.760447,0 -6.838461,3.078 -6.838461,6.83846 0,1.62821 0.868376,3.79915 1.953849,4.88462 1.085475,1.08547 3.256412,1.95384 4.884612,1.95384 1.62821,0 3.79915,-0.86837 4.88462,-1.95384 z m 24.38502,-0.18421 c 5.90078,-6.33374 -3.02307,-15.21336 -9.78577,-9.73726 -2.74597,2.22355 -2.96615,7.12332 -0.44528,9.90886 2.43402,2.68955 7.64693,2.60212 10.23105,-0.1716 z"
                          id="path43"/>
                      </g>
                    </svg>
                  </a>
                </span>
                <div className="company-logo-wrapper">
                  <i className={"company-logo " + companyName}></i>
                </div>

                <div className="main-form-title">
                  <svg
                    version="1.1"
                    className="dusuncembu-logo mr"
                    x="0px"
                    y="0px"
                    viewBox="0 0 480 480"
                    style={{
                    enableBackground: "new 0 0 480 480"
                  }}
                    xmlSpace="preserve">
                    <path
                      style={{
                      fill: "#FF9900"
                    }}
                      d="M440,176h-56v16h56V176z M336,144h104v-16h24v188.8l-34.4-34.4c-1.6-1.6-3.2-2.4-5.6-2.4h-50.4
                      c-2.4-6.4-6.4-12-11.2-16c8-6.4,13.6-16.8,13.6-28c0-20-16-36-36-36h-92v-56h8h64H336z"/>
                    <g>
                      <rect
                        x="384"
                        y="176"
                        style={{
                        fill: "#000000"
                      }}
                        width="56"
                        height="16"/>
                      <rect
                        x="336"
                        y="128"
                        style={{
                        fill: "#000000"
                      }}
                        width="104"
                        height="16"/>
                      <rect
                        x="408"
                        y="80"
                        style={{
                        fill: "#000000"
                      }}
                        width="32"
                        height="16"/>
                      <rect
                        x="256"
                        y="80"
                        style={{
                        fill: "#000000"
                      }}
                        width="128"
                        height="16"/>
                      <rect
                        x="256"
                        y="128"
                        style={{
                        fill: "#000000"
                      }}
                        width="64"
                        height="16"/>
                    </g>
                    <path
                      style={{
                      fill: "#FFF8EF"
                    }}
                      d="M340,216c11.2,0,20,8.8,20,20s-8.8,20-20,20h-52h-16v16h16h52c11.2,0,20,8.8,20,20s-8.8,20-20,20h-52
                      h-16v16h16h52c11.2,0,20,8.8,20,20s-8.8,20-20,20h-52h-16v16h16h52c11.2,0,20,8.8,20,20s-8.8,20-20,20H163.2l-21.6-21.6
                      c-1.6-1.6-3.2-2.4-5.6-2.4h-24V248h32c2.4,0,4.8-1.6,6.4-4l32-48c0.8-1.6,1.6-2.4,1.6-4v-65.6c0-8,4-15.2,10.4-20s14.4-5.6,22.4-3.2
                      c9.6,3.2,16,12.8,16,22.4V208c0,4,4,8,8,8H340z"/>
                    <path
                      style={{
                      fill: "#FF9900"
                    }}
                      d="M440,80h-32v16h32V80z M384,80H256v16h128V80z M336,128v16h-16v-16h-64v16h-8v-17.6
                      c0-16.8-10.4-32-25.6-37.6c-12-4.8-26.4-3.2-36.8,4.8c-11.2,7.2-16.8,20-16.8,32.8v63.2l-24,36V67.2C144,61.6,148.8,56,156,56h296.8
                      c5.6,0,11.2,5.6,11.2,11.2V128h-24H336z"/>
                    <rect
                      x="16"
                      y="224"
                      style={{
                      fill: "#2FB4C2"
                    }}
                      width="80"
                      height="192"/>
                    <path
                      style={{
                      fill: "#000000"
                    }}
                      d="M96,416V224H16v192H96z M340,200c20,0,36,16,36,36c0,11.2-5.6,21.6-13.6,28c4.8,4,8.8,9.6,11.2,16
                      H424c2.4,0,4,0.8,5.6,2.4l34.4,34.4V128V67.2c0-5.6-5.6-11.2-12-11.2H156c-7.2,0-12,5.6-12,11.2v158.4l24-36v-63.2
                      c0-12.8,6.4-25.6,16.8-32.8c11.2-7.2,24.8-8.8,36.8-4.8c15.2,5.6,25.6,20.8,25.6,37.6V144v56H340z M376,404c0,20-16,36-36,36H160
                      c-2.4,0-4-0.8-5.6-2.4L132.8,416H112v8c0,4-3.2,8-8,8H8c-4,0-8-4-8-8V216c0-4,4-8,8-8h96c4.8,0,8,4,8,8v16h16V67.2
                      c0-14.4,12-27.2,28-27.2h296.8C468,40,480,52.8,480,67.2V336c0,3.2-1.6,6.4-4.8,7.2c-0.8,0.8-2.4,0.8-3.2,0.8c-2.4,0-4-0.8-5.6-2.4
                      L420.8,296H376c-0.8,9.6-6.4,18.4-13.6,24c8,6.4,13.6,16.8,13.6,28s-5.6,21.6-13.6,28C370.4,382.4,376,392.8,376,404z M340,256
                      c11.2,0,20-8.8,20-20s-8.8-20-20-20H240c-4,0-8-4-8-8v-81.6c0-9.6-6.4-19.2-16-22.4c-7.2-3.2-15.2-1.6-22.4,3.2
                      c-6.4,4.8-10.4,12-10.4,20V192c0,1.6-0.8,3.2-1.6,4l-32,48c-0.8,2.4-3.2,4-5.6,4h-32v152h24c2.4,0,4,0.8,5.6,2.4l21.6,21.6H340
                      c11.2,0,20-8.8,20-20s-8.8-20-20-20h-52h-16v-16h16h52c11.2,0,20-8.8,20-20s-8.8-20-20-20h-52h-16v-16h16h52c11.2,0,20-8.8,20-20
                      s-8.8-20-20-20h-52h-16v-16h16H340z"/>
                    <path
                      style={{
                      fill: "#1D9AAE"
                    }}
                      d="M16,224l37.6,9.6c16,4,27.2,17.6,28.8,33.6L96,416V224H16z"/>
                    <g>
                      <path
                        style={{
                        fill: "#D9CDC1"
                      }}
                        d="M232,128v-1.6c0-9.6-6.4-19.2-16-22.4c-7.2-2.4-15.2-1.6-22.4,3.2c-6.4,4.8-10.4,12-10.4,20v0.8
                        C184,128,208,104,232,128z"/>
                      <path
                        style={{
                        fill: "#D9CDC1"
                      }}
                        d="M340,216h-4c0,0,16,16,0,40h4c11.2,0,20-8.8,20-20S351.2,216,340,216z"/>
                      <path
                        style={{
                        fill: "#D9CDC1"
                      }}
                        d="M340,272h-4c0,0,16,16,0,40h4c11.2,0,20-8.8,20-20S351.2,272,340,272z"/>
                      <path
                        style={{
                        fill: "#D9CDC1"
                      }}
                        d="M340,328h-4c0,0,16,16,0,40h4c11.2,0,20-8.8,20-20S351.2,328,340,328z"/>
                      <path
                        style={{
                        fill: "#D9CDC1"
                      }}
                        d="M340,384h-4c0,0,16,16,0,40h4c11.2,0,20-8.8,20-20S351.2,384,340,384z"/>
                    </g>
                    <path
                      style={{
                      fill: "#FF7D00"
                    }}
                      d="M464,128V68c0-7.2-4.8-12-12-12H154.4l0,0l263.2,14.4c12.8,0.8,24,11.2,24.8,24L464,316l0,0V128z"/>
                  </svg>
                  <h1 style={{
                    display: 'inline-block'
                  }}>Düşünceni belirt</h1>
                </div>
              </div>

              <div id="main">
                <CustomerInput companyName={companyName}/>
              </div>
              
            </div>
          </Col>
          {/* Container right half*/}

          <Col
            xs={12}
            sm={12}
            md={12}
            lg={6}
            lgPull={6}
            className="container-left-half background-image">
            <Row className="left-header">
              <svg
                className="test-speak"
                version="1.1"
                id="Capa_1"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                x="0px"
                y="0px"
                viewBox="0 0 494.031 494.031"
                style={{
                enableBackground: "new 0 0 494.031 494.031"
              }}
                xmlSpace="preserve"
                alt="person speaks icon">
                <g transform="matrix(1.25 0 0 -1.25 0 45)">
                  <g>
                    <g>
                      <g>
                        <path
                          className="speak-voice"
                          d="M395.225-224.062c0.034-6.292-5.04-11.401-11.355-11.412l-56.889-0.148
                            c-6.281-0.023-11.366,5.086-11.378,11.344c-0.034,6.315,5.052,11.401,11.321,11.423l56.889,0.148
                            C390.105-212.707,395.214-217.77,395.225-224.062"/>
                        <path
                          className="speak-voice"
                          d="M377.157-161.609c2.708-5.678,0.284-12.459-5.404-15.167l-51.382-24.405
                            c-5.666-2.685-12.447-0.262-15.132,5.416c-2.731,5.666-0.296,12.447,5.382,15.167l51.382,24.394
                            C367.691-153.52,374.46-155.932,377.157-161.609"/>
                        <path
                          className="speak-voice"
                          d="M377.498-286.617c2.662,5.7,0.228,12.47-5.461,15.132l-51.519,24.144
                            c-5.7,2.685-12.459,0.239-15.132-5.45c-2.662-5.7-0.216-12.47,5.484-15.132l51.496-24.155
                            C368.055-294.752,374.847-292.306,377.498-286.617"/>
                      </g>
                      <path
                        className="speak-head"
                        d="M305.818-129.865c-16.156,4.767-30.64,17.601-35.681,25.6
                          c-8.647,13.744,1.775,17.306-1.752,55.626c-3.231,35.078-51.53,72.806-110.251,76.641c-26.681,1.741-54.443-3.709-82.887-19.263
                          C2.202-31.208-26.754-115.643,29.668-197.187c50.859-73.5,3.14-106.712,3.14-106.712s1.889-15.474,33.155-36.272
                          c31.278-20.799,69.643-6.69,69.643-6.69s12.652,44.988,54.022,40.846c29.662-4.369,71.293,1.456,81.818,11.651
                          c9.853,9.523-1.718,21.458,6.133,48.06c-26.908,2.628-41.688,15.462-43.11,33.542c29.867-2.901,42.177,6.576,50.711,17.01
                          c-0.228,6.144-0.853,19.183-1.434,27.921C310.153-160.187,320.268-134.132,305.818-129.865"/>
                    </g>
                  </g>
                </g>
              </svg>
            </Row>{/* left-header*/}
            <Row className="show-grid">
              <Col xs={12} sm={12} md={12} lg={12} className="communication-item-left-group">
                <div className="communication-item-left-wrapper">
                  <div className="communication-item-left">
                    <i className="fas fa-users"></i>
                    <span className="communication-item-text">
                      Düşünceni belirt
                    </span>
                  </div>
                  <div className="communication-item-left">
                    <i className="fas fa-search"></i>
                    <span className="communication-item-text">
                      Biz Şirkete ulaştıralım
                    </span>
                  </div>
                  <div className="communication-item-left">
                    <i className="fas fa-file-alt"></i>
                    <span className="communication-item-text">
                      Şirket üst-düzey yöneticisi değerlendirsin
                    </span>
                  </div>
                </div>
              </Col>{/* communication-item-group*/}
            </Row>{/* communication-item-left-group*/}
          </Col>
          {/*container-left-half */}
        </Row>
        {/* container-left-right */}

        <Row xs={12} sm={12} md={12} lg={12} className="show-grid container-footer">
          <Footer/>
        </Row>

      </Grid>
    );
  }
}

export default IndexSite;