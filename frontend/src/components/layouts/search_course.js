import React from "react";
import CountUp from 'react-countup';
import VisibilitySensor from "react-visibility-sensor";


const Style = true;

class SearchCourse extends React.Component {
  
  render() {
    return (
      <section id="search-course" className={this.props.Style !== true ? ('search-course-section') : ('search-course-section search-course-secound')}>
        <div className="container">
          {this.props.Style !== true ? (
            <div>
              <div className="section-title mb20 headline text-center ">
                {/* <span className="subtitle text-uppercase">LEARN NEW SKILLS</span> */}
                <h2>
                  <span>Bạn</span> muốn trở thành?
              </h2>
              </div>
             
              <div className="search-course mb30 relative-position ">
                <form action="#" method="post">
                  <input
                    className="course"
                    name="course"
                    type="text"
                    placeholder="Bác sĩ, Kỹ sư, Giáo viên,..."
                  />
                  <div className="nws-button text-center  gradient-bg text-capitalize">
                    <button type="submit" value="Submit">
                      Bắt đầu
                  </button>
                  </div>
                </form>
              </div>
            </div>
          )
            :
            ''
          }

                
          <div className="search-counter-up">
            <div class="container">
              <div className="row row-cols-1 row-cols-sm-1 row-cols-md-5">
                <div className="counter-icon-number ">
                  <div className="counter-icon">
                    <i className="text-gradiant flaticon-graduation-hat" />
                  </div>
                  <div className="counter-number">
                    <CountUp end={120} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span className="counter-count bold-font" ref={countUpRef}></span>
                          </VisibilitySensor>
                        )}
                      </CountUp>
                    <span>+</span>
                    <p>Trường Đại Học</p>
                  </div>
                </div>
                <div className="counter-icon-number ">
                  <div className="counter-icon">
                    <i className="text-gradiant flaticon-book" />
                  </div>
                  <div className="counter-number">
                    <CountUp end={80} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span className="counter-count bold-font" ref={countUpRef}></span>
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    <span>+</span>
                    <p>Trường Cao Đẳng</p>
                  </div>
                </div>
                <div className="counter-icon-number ">
                  <div className="counter-icon">
                    <i className="text-gradiant flaticon-favorites-button" />
                  </div>
                  <div className="counter-number">
                    <CountUp end={200} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span className="counter-count bold-font" ref={countUpRef}></span>
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    <span>+</span>
                    <p>Trường Dạy Nghề</p>
                  </div>
                </div>
                <div className="counter-icon-number ">
                  <div className="counter-icon">
                    <i className="text-gradiant flaticon-group" />
                  </div>
                  <div className="counter-number">
                    <CountUp end={1200} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span className="counter-count bold-font" ref={countUpRef}></span>
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    <span>+</span>
                    <p>Nghành đào tạo</p>
                  </div>
                </div>
                <div className="counter-icon-number ">
                  <div className="counter-icon">
                    <i className="text-gradiant flaticon-maths-class-materials-cross-of-a-pencil-and-a-ruler" />
                  </div>
                  <div className="counter-number">
                    <CountUp end={840} redraw={true}>
                      {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start} delayedCall>
                          <span className="counter-count bold-font" ref={countUpRef}></span>
                        </VisibilitySensor>
                      )}
                    </CountUp>
                    <span>+</span>
                    <p>Khóa học</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    );
  }
}

export default SearchCourse;
