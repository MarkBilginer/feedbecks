import React from 'react';
import { Grid, Row, Col } from 'react-bootstrap';
import MessageForm from './MessageForm'
import Footer from './Footer'

window.React = React;

class IndexSite extends React.Component {
  render() {
    return (
      <Grid fluid>
        <Row className="show-grid">
            <Col xs={12} sm={12} md={6} mdPush={6} lg={6} lgPush={6} className="container-right-half">
                <div className="container-main">
                <div className="main-form-header">
                    <span className="thoughtbubble-image" aria-hidden="true">
                    <a className="image-link-landing" 
                        href="https://dusuncembu.com"
                        aria-label="Homepage">
                        <svg
                            className="thoughtbubble-logo"
                            width="124.17062mm"
                            height="103.45384mm"
                            viewBox="0 0 124.17062 103.45384"
                            version="1.1">
                            <defs
                            id="defs2" />
                            <sodipodiNamedview
                            id="base"
                            pagecolor="#ffffff"
                            bordercolor="#666666"
                            borderopacity="1.0"
                            showgrid="false"
                            fit-margin-top="0"
                            fit-margin-left="0"
                            fit-margin-right="0"
                            fit-margin-bottom="0" />
                            <g
                            id="layer1"
                            transform="translate(-40.11537,-33.625228)">
                            <path
                                style={{fill:"rgba(1, 22, 39, 1)",strokeWidth:"0.97692311"}}
                                d="m 85.027197,135.5751 c -3.158975,-3.15897 -0.764338,-8.23407 3.885171,-8.23407 1.428655,0 2.97741,0.95754 3.950268,2.44231 1.4824,2.26243 1.4824,2.62219 0,4.88461 -1.839963,2.80814 -5.509594,3.233 -7.835439,0.90715 z m -23.112131,-8.50937 c -6.33808,-4.86623 -3.510593,-14.37855 4.273946,-14.37855 3.970687,0 6.198736,1.47481 7.389808,4.89153 1.186975,3.40496 0.686129,5.41735 -2.125731,8.54117 -2.193335,2.43667 -6.978257,2.91118 -9.538023,0.94585 z M 90.330493,113.0558 c -3.993831,-1.55117 -9.51398,-4.67301 -11.480971,-6.49291 -1.810496,-1.6751 -3.540845,-2.05331 -9.769231,-2.1353 -9.163882,-0.12063 -14.794508,-2.38512 -20.757492,-8.348096 -5.945825,-5.94582 -8.207429,-11.59895 -8.207429,-20.51538 0,-9.10986 2.348518,-14.78422 8.656161,-20.91455 5.270246,-5.12209 13.095079,-8.39315 20.077592,-8.39315 4.391365,0 5.203686,-0.38142 9.090892,-4.26863 7.861,-7.861 20.548508,-10.52043 31.086955,-6.51613 5.02991,1.91122 5.05303,1.91102 11.00086,-0.0936 11.75308,-3.96118 25.55669,-0.98335 34.01529,7.33806 16.84511,16.57191 12.2702,44.12326 -9.00493,54.23011 -4.26285,2.02508 -7.02204,2.58971 -13.35343,2.73257 l -7.98036,0.18007 -4.18727,4.542656 c -6.04649,6.55967 -10.51433,8.56247 -19.905857,8.92322 -4.298472,0.16511 -8.474818,0.0441 -9.28078,-0.26894 z M 83.01498,78.482274 c 4.024752,-4.4473 0.808545,-11.71047 -5.18552,-11.71047 -3.327762,0 -7.037429,3.59745 -7.037429,6.82454 0,5.95077 8.268218,9.25586 12.222949,4.88593 z m 23.92321,0.0126 c 4.2283,-4.22831 1.10548,-11.72308 -4.88462,-11.72308 -3.760447,0 -6.838461,3.078 -6.838461,6.83846 0,1.62821 0.868376,3.79915 1.953849,4.88462 1.085475,1.08547 3.256412,1.95384 4.884612,1.95384 1.62821,0 3.79915,-0.86837 4.88462,-1.95384 z m 24.38502,-0.18421 c 5.90078,-6.33374 -3.02307,-15.21336 -9.78577,-9.73726 -2.74597,2.22355 -2.96615,7.12332 -0.44528,9.90886 2.43402,2.68955 7.64693,2.60212 10.23105,-0.1716 z"
                                id="path43"/>
                            </g>
                        </svg>
                    </a>
                    </span>
                    <i className="company-akkol-logo"></i>
                    <h1 className="main-form-title">Düşünceni belirt</h1>
                </div>

                <div id="main" className="wrap-main">
                    <MessageForm/>
                </div>
            </div>
          </Col> {/* Container right half*/}

          <Col xs={12} sm={12} md={6} mdPull={6} lg={6} lgPull={6} className="container-left-half background-image">
              <Row className="left-header">
                <svg className="test-speak" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    viewBox="0 0 494.031 494.031" style={{enableBackground:"new 0 0 494.031 494.031"}} xmlSpace="preserve" alt="person speaks icon">
                  <g transform="matrix(1.25 0 0 -1.25 0 45)">
                    <g>
                      <g>
                        <g>
                          <path className="speak-voice" d="M395.225-224.062c0.034-6.292-5.04-11.401-11.355-11.412l-56.889-0.148
                            c-6.281-0.023-11.366,5.086-11.378,11.344c-0.034,6.315,5.052,11.401,11.321,11.423l56.889,0.148
                            C390.105-212.707,395.214-217.77,395.225-224.062"/>
                          <path className="speak-voice" d="M377.157-161.609c2.708-5.678,0.284-12.459-5.404-15.167l-51.382-24.405
                            c-5.666-2.685-12.447-0.262-15.132,5.416c-2.731,5.666-0.296,12.447,5.382,15.167l51.382,24.394
                            C367.691-153.52,374.46-155.932,377.157-161.609"/>
                          <path className="speak-voice" d="M377.498-286.617c2.662,5.7,0.228,12.47-5.461,15.132l-51.519,24.144
                            c-5.7,2.685-12.459,0.239-15.132-5.45c-2.662-5.7-0.216-12.47,5.484-15.132l51.496-24.155
                            C368.055-294.752,374.847-292.306,377.498-286.617"/>
                        </g>
                        <path className="speak-head" d="M305.818-129.865c-16.156,4.767-30.64,17.601-35.681,25.6
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
                </Col>{/* communication-item-group*/}
              </Row>{/* communication-item-left-group*/}
          </Col> {/*container-left-half */}
        </Row> {/* container-left-right */}

        <Row xs={12} sm={12} md={12} className="show-grid container-footer">
          <Footer/>
        </Row>

      </Grid>);
  }
}

export default IndexSite;