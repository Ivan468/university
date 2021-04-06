import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Content = () => {
  return (
    <div className="content">
      <div className="arrow-block">
        <img src="./image/arrow/bottom-centr.svg" alt="" />
        <img src="./image/arrow/bottom-right.svg" alt="" />
        <img src="./image/arrow/left-bottom.svg" alt="" />
        <img src="./image/arrow/right-top.svg" alt="" />
        <img src="./image/arrow/left-top.svg" alt="" />
      </div>
      <main>
        <div className="left-block">
          <div className="retancle-one">
            <div className="head-retancle">
              <h3 className="finance-text">Финансы</h3>
              <div className="finanse-cash">
                <div>5 565 656 руб.</div>
                <p>доходы филиалов</p>
              </div>
              <div className="finanse-cash">
                <div>30 000 руб</div>
                <p>Средняя зарплата</p>
              </div>
            </div>
           
          </div>
          <div className="retancle-one bottom">
            <div className="head-retancle">
              <h3 className="finance-text">Научная деятельность</h3>
            </div>
          </div>
        </div>

        <div className="circle-block">
          <svg
            className="cyrcle-rotate"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 353 354"
            style={{ enableBackground: " new 0 0 353 354" }}
            xmlSpace="preserve"
          >
            {/* <style type="text/css">
              .st0 {
                fill: none;
                stroke: #44bcff;
                 strokeWidth: 21;
                stroke-opacity: 0.2;
                strokeDasharray: 10, 10;
              }
            </style> */}
            <path
              className="st0"
              d="M22.3,177.8c-0.1-20.3,3.8-40.3,11.5-59.1c7.7-18.7,18.9-35.8,33.2-50.2c14.3-14.4,31.2-25.8,49.9-33.7
	c18.7-7.8,38.7-11.9,59-12c20.3-0.1,40.3,3.8,59.1,11.5s35.8,18.9,50.2,33.2c14.4,14.3,25.8,31.2,33.7,49.9
	c7.8,18.7,11.9,38.7,12,59c0.1,20.3-3.8,40.3-11.5,59.1c-7.7,18.7-18.9,35.8-33.2,50.2c-14.3,14.4-31.2,25.8-49.9,33.7
	c-18.7,7.8-38.7,11.9-59,12c-20.3,0.1-40.3-3.8-59.1-11.5c-18.7-7.7-35.8-18.9-50.2-33.2c-14.4-14.3-25.8-31.2-33.7-49.9
	C26.5,218,22.4,198,22.3,177.8L22.3,177.8z"
            />
          </svg>

          <div className="speedometer">
            <svg
              version="1.1"
              id="spedometer-test"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              viewBox="0 0 353 354"
              style={{ enableBackground: " new 0 0 353 354" }}
              className="js-guage-svg guage-svg"
              xmlSpace="preserve"
            >
              <path
                d="M44.3,177c0-2.2,0.1-4.4,0.2-6.6l-43.9-2.1c-0.1,2.9-0.2,5.8-0.2,8.7c0,0.9,0,1.8,0,2.7l44-0.7
	C44.3,178.4,44.3,177.7,44.3,177z"
              />
              <path d="M45.7,157.6l-43.5-6.4c-0.5,3.7-1,7.6-1.3,11.3l43.9,3.6C45,163.3,45.3,160.5,45.7,157.6z" />
              <path d="M48.2,145L5.5,134.5c-0.9,3.7-1.7,7.4-2.4,11.2l43.3,7.8C46.9,150.6,47.5,147.8,48.2,145z" />
              <path d="M51.9,132.8L10.4,118c-1.3,3.6-2.4,7.2-3.5,10.9l42.3,12C50.1,138.2,50.9,135.4,51.9,132.8z" />
              <path d="M56.8,120.9l-39.8-18.7c-1.6,3.4-3.1,7-4.5,10.5l41,16.1C54.4,126.1,55.6,123.4,56.8,120.9z" />
              <path d="M62.8,109.5L25,87c-1.9,3.3-3.8,6.6-5.5,10l39.2,20C60,114.5,61.3,111.9,62.8,109.5z" />
              <path d="M69.9,98.8L34.5,72.7c-2.2,3.1-4.4,6.2-6.5,9.4l37.1,23.7C66.6,103.4,68.2,101.1,69.9,98.8z" />
              <path d="M78,88.8L45.3,59.4c-2.5,2.8-5,5.8-7.3,8.7l34.6,27.2C74.3,93.1,76.1,90.9,78,88.8z" />
              <path d="M87.1,79.6L57.3,47.2c-2.8,2.6-5.5,5.3-8.1,8l31.8,30.4C82.9,83.6,85,81.6,87.1,79.6z" />
              <path d="M96.9,71.4L70.4,36.3c-3,2.3-6,4.7-8.9,7.2l28.7,33.3C92.4,74.9,94.7,73.1,96.9,71.4z" />
              <path d="M107.6,64.2l-23-37.5c-3.2,2-6.4,4.1-9.5,6.3l25.4,36C102.7,67.2,105.1,65.6,107.6,64.2z" />
              <path d="M118.8,58L99.6,18.4c-3.4,1.7-6.8,3.4-10.1,5.3L111.2,62C113.7,60.6,116.3,59.2,118.8,58z" />
              <path d="M130.6,53l-15.3-41.3c-3.6,1.3-7.1,2.8-10.6,4.3l17.9,40.2C125.3,55,127.9,53.9,130.6,53z" />
              <path d="M142.8,49.1L131.7,6.5c-3.7,1-7.4,2.1-11,3.3l13.9,41.7C137.3,50.6,140.1,49.8,142.8,49.1z" />
              <path d="M155.4,46.5l-7-43.4c-3.7,0.6-7.5,1.3-11.2,2.2l9.8,42.9C149.8,47.5,152.6,46.9,155.4,46.5z" />
              <path d="M168.2,45l-2.7-43.9c-3.8,0.2-7.6,0.6-11.4,1.1l5.6,43.6C162.5,45.5,165.3,45.2,168.2,45z" />
              <path d="M181.1,44.9l1.5-44c-3.8-0.1-7.6-0.1-11.4,0l1.3,44C175.3,44.8,178.2,44.8,181.1,44.9z" />
              <path d="M199.6,2.3c-3.8-0.5-7.6-0.9-11.4-1.1l-2.9,43.9c2.8,0.2,5.7,0.5,8.5,0.8L199.6,2.3z" />
              <path d="M206.5,48.2l9.9-42.9c-3.7-0.9-7.5-1.6-11.2-2.2l-7.1,43.4C200.9,47,203.8,47.5,206.5,48.2z" />
              <path d="M218.9,51.7L232.9,10c-3.6-1.2-7.3-2.3-10.9-3.3l-11.3,42.5C213.4,50,216.2,50.8,218.9,51.7z" />
              <path d="M230.8,56.4l18.1-40.1c-3.5-1.6-7-3-10.6-4.4l-15.4,41.2C225.6,54.1,228.2,55.2,230.8,56.4z" />
              <path
                d="M352.6,168.9l-44,2c0.1,2,0.1,4.1,0.1,6.1c0,0.8,0,1.7,0,2.5l44,0.8c0-1.1,0-2.2,0-3.4
	C352.7,174.3,352.7,171.6,352.6,168.9z"
              />
              <path d="M307.9,192.4l43.7,5c0.4-3.8,0.8-7.6,0.9-11.4l-43.9-2.2C308.4,186.7,308.2,189.5,307.9,192.4z" />
              <path d="M305.8,205l43,9.3c0.8-3.7,1.5-7.5,2-11.2l-43.5-6.5C306.9,199.4,306.4,202.3,305.8,205z" />
              <path d="M302.5,217.4l41.9,13.4c1.2-3.6,2.2-7.3,3.1-11l-42.7-10.7C304.1,212,303.3,214.7,302.5,217.4z" />
              <path d="M297.9,229.5l40.4,17.5c1.5-3.5,2.9-7.1,4.2-10.6l-41.4-14.8C300.1,224.2,299.1,226.9,297.9,229.5z" />
              <path d="M292.2,241l38.5,21.3c1.8-3.3,3.6-6.8,5.2-10.2l-39.8-18.8C295,236,293.6,238.5,292.2,241z" />
              <path d="M285.5,252l36.2,25c2.2-3.1,4.2-6.4,6.2-9.6l-37.8-22.6C288.6,247.2,287.1,249.6,285.5,252z" />
              <path d="M277.7,262.2l33.6,28.4c2.4-2.9,4.8-5.9,7.1-9L283,255.4C281.3,257.7,279.5,260,277.7,262.2z" />
              <path d="M268.9,271.6l30.7,31.5c2.7-2.6,5.4-5.4,7.9-8.2l-32.7-29.4C272.9,267.5,270.9,269.6,268.9,271.6z" />
            </svg>

            <div className="js-needle needle"></div>
          </div>

          <div className="sum-student">
            <div>128</div>
            <p>студентов</p>
          </div>

          <Link className="btn-filials" to="/modal">
            Все филиалы
          </Link>

          <div className="budget">
            <img src="./image/circle/budget.svg" alt="Расходи" />
            <div className="circle-text">
              <div>
                15,5 <span>млн.</span>
              </div>
              <p>Доходы</p>
            </div>
            <div className="circle-text costs">
              <div>
                5,5 <span>млн.</span>
              </div>
              <p>Расходы</p>
            </div>
          </div>
          <div className="raiting-block">
            <img src="./image/circle/raiting.svg" alt="рейтинг" />
            <div className="circle-text raiting-text">
              <div>7.8</div>
              <p>Рейтинг Вуза</p>
            </div>
          </div>
          <div className="publication-block">
            <img src="./image/circle/bottom-left.svg" alt="publication " />
            <div className="circle-text text-block">
              <div>23</div>
              <p>научные исследования</p>
            </div>
            <div className="circle-text text-block peocent-left">
              <div>67%</div>
              <p>Дневная форма</p>
            </div>
            <div className="circle-text text-block peocent-right">
              <div>27%</div>
              <p>Заочная форма</p>
            </div>
            <div className="circle-text text-block mid-text-circle">
              <div>123</div>
              <p>кол-во публикаций</p>
            </div>
            <div className="circle-text text-block bottom-text-circle">
              <div>14</div>
              <p>заключенные договора</p>
            </div>
          </div>
          <div className="bottom-block">
            <img
              src="./image/circle/bottom-stud.svg"
              alt="Принято студентов "
            />
            <div className="circle-text raiting-text bottom-text-studetns">
              <div>12 643</div>
              <p>Принято студентов</p>
            </div>
          </div>
          <div className="worker-block">
            <img src="./image/circle/bottom-right.svg" alt="Работники " />
            <div className="circle-text worker-text">
              <div>43</div>
              <p>Принято сотрудников</p>
            </div>
            <div className="circle-text worker-text mid">
              <div>9</div>
              <p>уволено сотрудников</p>
            </div>
          </div>
        </div>
        <div className="left-block right">
          <div className="retancle-one right">
            <div className="head-retancle">
              <h3 className="finance-text">Международная деятельность</h3>
            </div>
            <div className="retancle-one-graph">
              <div className="globus">
                <svg
                  width="78"
                  height="1"
                  viewBox="0 0 78 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M0 0.5H78"
                    stroke="#21CAFF"
                    strokeDasharray="1 3"
                  />
                </svg>
                <svg
                  width="78"
                  height="1"
                  viewBox="0 0 78 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M0 0.5H78"
                    stroke="#21CAFF"
                    strokeDasharray="1 3"
                  />
                </svg>
                <svg
                  width="78"
                  height="1"
                  viewBox="0 0 78 1"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    opacity="0.5"
                    d="M0 0.5H78"
                    stroke="#21CAFF"
                    strokeDasharray="1 3"
                  />
                </svg>
              </div>
              <div id="myearth" className="earth-container earth-ready"></div>

              <div className="text-globus">
                <div className="column">
                  <div className="finanse-cash">
                    <div className="one">9 504</div>
                    <p>иностранных студентов</p>
                  </div>
                  <div className="finanse-cash">
                    <div className="two">20</div>
                    <p>заключенных соглашений</p>
                  </div>
                  <div className="finanse-cash">
                    <div className="three">45</div>
                    <p>Партнеров</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="retancle-one bottom right-bottom">
            <div className="head-retancle">
              <h3 className="finance-text">Кадры</h3>
            </div>
            <div className="retancle-one-graph right-bottom">
              <div className="graph-block">
                <p>Севастопольский</p>
                <div className="graph-col-1">
                  <span>15</span>
                </div>
                <div className="graph-col-2">
                  <span>3</span>
                </div>
              </div>
              <div className="graph-block">
                <p>Тульский</p>
                <div className="graph-col-1">
                  <span>8</span>
                </div>
                <div className="graph-col-2">
                  <span>3</span>
                </div>
              </div>
              <div className="graph-block">
                <p>Волгоградский</p>
                <div className="graph-col-1">
                  <span>20</span>
                </div>
                <div className="graph-col-2">
                  <span>3</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div className="bottom-block-stats-wrapper">
        <div className="bottom-block-stats">
          <h3>Приемная комиссия</h3>
          <div className="stats-block">
            <div className="graph-stats">
              <svg
                width="20"
                height="51"
                viewBox="0 0 20 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0V51"
                  stroke="#F79A2D"
                  stroke-opacity="0.2"
                  stroke-width="20"
                  stroke-dasharray="3 2"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 21.9301V18.8701H20V21.9301H0ZM0 27.0301V23.9701H20V27.0301H0ZM0 32.1301V29.0701H20V32.1301H0ZM0 37.2301V34.1701H20V37.2301H0ZM0 42.3301V39.2701H20V42.3301H0ZM0 47.4301V44.3701H20V47.4301H0ZM0 51.0001V49.4701H20V51.0001H0Z"
                  fill="#F79A2D"
                />
              </svg>
            </div>
            <div className="graph-text">
              <p>Дневная форма</p>
              <div>8 217</div>
            </div>
          </div>
          <div className="stats-block">
            <div className="graph-stats">
              <svg
                width="20"
                height="51"
                viewBox="0 0 20 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0V51"
                  stroke="#F79A2D"
                  stroke-opacity="0.2"
                  stroke-width="20"
                  stroke-dasharray="3 2"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 37.2299V34.1699H20V37.2299H0ZM0 42.3299V39.2699H20V42.3299H0ZM0 47.4299V44.3699H20V47.4299H0ZM0 50.9999V49.4699H20V50.9999H0Z"
                  fill="#F79A2D"
                />
              </svg>
            </div>
            <div className="graph-text">
              <p>Дневная форма</p>
              <div>3 125</div>
            </div>
          </div>
          <div className="stats-block">
            <div className="graph-stats">
              <svg
                width="20"
                height="51"
                viewBox="0 0 20 51"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 0V51"
                  stroke="#F79A2D"
                  stroke-opacity="0.2"
                  stroke-width="20"
                  stroke-dasharray="3 2"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M0 47.4301V44.3701H20V47.4301H0ZM0 51.0001V49.4701H20V51.0001H0Z"
                  fill="#F79A2D"
                />
              </svg>
            </div>
            <div className="graph-text">
              <p>Доп образование</p>
              <div>1 264</div>
            </div>
          </div>
        </div>
        <div className="left-wrapper">
          <div className="left--down-button button-down">
            <h3>Проверки</h3>
          </div>
          <div className="right--down-button button-down">
            <h3>Транслации экзаменов</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
