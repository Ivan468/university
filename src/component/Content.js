import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const Content = () => {  return (
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
          <div className="retancle-one-graph">
            <div className="rotate-left">
              <div>
                <p>Севастопольський</p>
                <div className="retalncle"></div>
              </div>
              <div>
                <p>Тульский</p>
                <div className="retalncle tulskiy-un"></div>
              </div>
              <div>
                <p>Волгоградский</p>
                <div className="retalncle volgradskiy-un"></div>
              </div>
              <div>
                <p>Севастопольский</p>
                <div className="retalncle sevastopolskiy-un"></div>
              </div>
              <div>
                <p>Тульский</p>
                <div className="retalncle tulskiy-un-two"></div>
              </div>
              <div>
                <p>Севастопольский</p>
                <div className="retalncle sevastopolskiy-un-two"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="retancle-one bottom">
          <div className="head-retancle">
            <h3 className="finance-text">Научная деятельность</h3>
          </div>
          <div className="retancle-one-graph">
            <div className="column">
              <div className="finanse-cash">
                <div>9 504</div>
                <p>доходы филиалов</p>
              </div>
              <div className="finanse-cash">
                <div>20</div>
                <p>доходы филиалов</p>
              </div>
              <div className="finanse-cash">
                <div>45</div>
                <p>Партнеров</p>
              </div>
            </div>
            <div className="column center">
              <svg
                width="133"
                height="118"
                viewBox="0 0 133 118"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  className="animatio-spin"
                  d="M77.0428 53.2535C71.9262 48.1273 63.6157 48.1273 58.5317 53.2535C53.4151 58.3796 53.4151 66.6729 58.5317 71.8318C63.6483 76.9579 71.9262 76.9579 77.0428 71.8318C82.1595 66.6729 82.1595 58.3796 77.0428 53.2535Z"
                  fill="#44BCFF"
                />
                <path
                  className="animatio-spin"
                  d="M120.942 6.49751C120.942 10.0891 118.041 12.995 114.456 12.995C110.871 12.995 107.971 10.0891 107.971 6.49751C107.971 2.90592 110.871 0 114.456 0C118.041 0 120.942 2.90592 120.942 6.49751Z"
                  fill="#44BCFF"
                />
                <path
                  className="animatio-spin"
                  d="M12.9708 93.7731C12.9708 97.3647 10.0703 100.271 6.48542 100.271C2.90051 100.271 0 97.3647 0 93.7731C0 90.1815 2.90051 87.2756 6.48542 87.2756C10.0703 87.2756 12.9708 90.1815 12.9708 93.7731Z"
                  fill="#44BCFF"
                />
                <path
                  className="animatio-spin delay-3"
                  d="M86.3637 43.0991C79.6176 36.6342 70.3294 34.4139 61.856 36.3077C60.8131 34.5445 58.8903 33.3691 56.7068 33.4344C53.4478 33.4997 50.8732 36.1771 50.9709 39.4422C50.9709 40.0952 51.1339 40.7155 51.362 41.3033C50.3517 42.1195 49.3414 42.9684 48.4289 43.9153C38.1956 54.6574 38.5541 71.6685 49.2762 81.9535C59.9984 92.2059 76.9778 91.8467 87.2436 81.1046C97.4443 70.3951 97.0858 53.3841 86.3637 43.0991ZM85.8749 79.8639C76.326 89.855 60.5198 90.2142 50.5147 80.6475C40.5421 71.0808 40.1836 55.2125 49.7325 45.2214C50.5147 44.4051 51.362 43.6541 52.2093 42.9684C53.3174 44.3724 55.0121 45.254 56.9023 45.2214C60.1613 45.1561 62.7359 42.446 62.6382 39.2136C62.6382 38.8218 62.573 38.4626 62.5078 38.0708C70.3294 36.373 78.8354 38.4953 85.0275 44.4704C95.0653 54.0044 95.4238 69.8401 85.8749 79.8639Z"
                  fill="#44BCFF"
                />
                <path
                  className="animatio-spin delay-1"
                  d="M133 94.5241C133 97.1361 130.882 99.2584 128.274 99.2584C125.667 99.2584 123.549 97.1361 123.549 94.5241C123.549 91.912 125.667 89.7897 128.274 89.7897C130.882 89.7897 133 91.912 133 94.5241Z"
                  fill="#44BCFF"
                />
                <path
                  className="animatio-spin delay-13"
                  d="M130.425 43.8827C130.425 37.7117 125.439 32.7161 119.28 32.7161C118.237 32.7161 117.226 32.8794 116.281 33.1406C114 29.3857 111.262 25.8921 108.036 22.6597C86.2659 0.848921 50.9708 0.848921 29.2007 22.6597C24.0189 27.8511 20.0755 33.8262 17.3705 40.1931C16.8165 40.0952 16.2298 40.0299 15.6432 40.0299C10.5918 40.0299 6.48541 44.1439 6.48541 49.1721C6.48541 53.3188 9.25557 56.8124 13.036 57.9552C11.8628 73.5949 17.2401 89.6591 29.1681 101.609C50.9382 123.42 86.2333 123.42 108.003 101.609C120.942 88.6469 126.189 70.8849 123.744 54.0697C127.688 52.3392 130.425 48.4211 130.425 43.8827ZM105.331 98.8993C85.06 119.208 52.2093 119.208 31.9382 98.8993C20.825 87.7654 15.8062 72.8113 16.8816 58.249C21.3465 57.6287 24.801 53.8085 24.801 49.1721C24.801 46.0703 23.2693 43.3603 20.9228 41.6951C23.4648 35.7526 27.1149 30.202 31.9708 25.3697C52.2418 5.06087 85.0926 5.06087 105.364 25.3697C108.264 28.2756 110.741 31.4427 112.794 34.7731C109.959 36.7975 108.134 40.0952 108.134 43.85C108.134 50.021 113.12 55.0166 119.28 55.0166C119.54 55.0166 119.801 54.984 120.062 54.984C122.18 70.591 117.292 86.9491 105.331 98.8993Z"
                  fill="#44BCFF"
                />
                <path
                  className="animatio-spin delay-9"
                  d="M96.662 33.6303C80.7255 17.6641 54.8816 17.6641 38.945 33.6303C23.0085 49.5966 23.0085 75.4887 38.945 91.4549C51.2641 103.83 69.5797 106.605 84.5711 99.8135C85.9399 101.348 87.8953 102.295 90.0788 102.295C94.1852 102.295 97.4768 98.9646 97.4768 94.8832C97.4768 93.6425 97.1834 92.4671 96.6294 91.4222C112.566 75.456 112.566 49.5966 96.662 33.6303ZM40.9004 89.4632C26.0719 74.5744 26.0719 50.4781 40.9004 35.622C55.7289 20.7659 79.8129 20.7659 94.6414 35.622C109.405 50.4128 109.47 74.3459 94.8696 89.202C93.5659 88.0919 91.9039 87.4388 90.0788 87.4388C85.9725 87.4388 82.6809 90.7692 82.6809 94.8832C82.6809 95.7648 82.8438 96.5811 83.1045 97.3647C69.1886 103.536 52.3395 100.891 40.9004 89.4632Z"
                  fill="#44BCFF"
                />
              </svg>
            </div>
            <div className="column">
              <div className="finanse-cash">
                <div>9 504</div>
                <p>доходы филиалов</p>
              </div>
              <div className="finanse-cash">
                <div>20</div>
                <p>доходы филиалов</p>
              </div>
              <div className="finanse-cash">
                <div>45</div>
                <p>Партнеров</p>
              </div>
            </div>
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
          <img src="./image/circle/bottom-stud.svg" alt="Принято студентов " />
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

 