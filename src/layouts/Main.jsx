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
                <div>15 565 656 руб.</div>
                <p>Общая стоимость имущества </p>
              </div>
            </div>
            <div className="finance-graph">
              <div className="finance-graph-top">
                <div className="finance-graph-top-circle">
                  <div className="graph-one">
                    <svg
                      width="126"
                      height="125"
                      viewBox="0 0 126 125"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d)">
                        <path
                          d="M59.8976 2C48.5252 2 37.4081 5.37232 27.9523 11.6905C18.4965 18.0087 11.1265 26.989 6.77451 37.4957C2.42247 48.0025 1.28378 59.5638 3.50243 70.7177C5.72108 81.8716 11.1974 92.1171 19.2389 100.159C27.2805 108.2 37.526 113.677 48.6799 115.895C59.8338 118.114 71.3951 116.975 81.9019 112.623C92.4086 108.271 101.389 100.901 107.707 91.4453C114.025 81.9895 117.398 70.8724 117.398 59.5H100.114C100.114 67.454 97.7552 75.2294 93.3362 81.843C88.9172 88.4565 82.6362 93.6111 75.2877 96.655C67.9391 99.6989 59.853 100.495 52.0518 98.9435C44.2506 97.3918 37.0847 93.5615 31.4604 87.9372C25.836 82.3129 22.0058 75.147 20.4541 67.3458C18.9023 59.5446 19.6987 51.4585 22.7426 44.1099C25.7865 36.7613 30.9411 30.4804 37.5546 26.0614C44.1682 21.6424 51.9436 19.2837 59.8976 19.2837V2Z"
                          fill="#217AFF"
                        />
                      </g>
                      <rect
                        x="12.5"
                        y="98.5"
                        width="7"
                        height="7"
                        transform="rotate(-90 12.5 98.5)"
                        fill="white"
                        stroke="#2E81FE"
                        stroke-width="3"
                      />
                      <defs>
                        <filter
                          id="filter0_d"
                          x="0.397583"
                          y="0"
                          width="125"
                          height="125"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          />
                          <feOffset dx="3" dy="3" />
                          <feGaussianBlur stdDeviation="2.5" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0.33 0 0 0 0 0.825 0 0 0 0.36 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                  <div className="graph-two">
                    <svg
                      width="136"
                      height="131"
                      viewBox="0 0 136 131"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d)">
                        <path
                          d="M125.23 73.0714C125.876 64.2634 124.648 55.4185 121.627 47.1196C118.606 38.8208 113.86 31.2565 107.703 24.9252C101.545 18.594 94.1159 13.6396 85.9044 10.3886C77.6929 7.13758 68.8856 5.66377 60.063 6.06431L60.9619 25.8642C66.9867 25.5907 73.0009 26.5971 78.6084 28.8172C84.2158 31.0372 89.2891 34.4204 93.4938 38.7439C97.6985 43.0673 100.939 48.2328 103.002 53.8999C105.065 59.5669 105.904 65.6069 105.463 71.6217L125.23 73.0714Z"
                          fill="#2BD6FB"
                        />
                      </g>
                      <rect
                        x="104.571"
                        y="29.571"
                        width="7"
                        height="7"
                        transform="rotate(-90 104.571 29.571)"
                        fill="white"
                        stroke="#2BD6FB"
                        stroke-width="3"
                      />
                      <defs>
                        <filter
                          id="filter0_d"
                          x="54.063"
                          y="0"
                          width="81.3345"
                          height="83.0714"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          />
                          <feOffset dx="2" dy="2" />
                          <feGaussianBlur stdDeviation="4" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.139844 0 0 0 0 0.745833 0 0 0 0 0.745833 0 0 0 0.51 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                  <div className="circle-svg">
                    <svg
                      width="70"
                      height="69"
                      viewBox="0 0 70 69"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="34.8976" cy="34.5" r="34" stroke="#217AFF" />
                    </svg>

                    <h3>Остаток средств</h3>
                  </div>
                  <div className="sumfinanse-circle">15 565 656</div>
                  <div className="sumfinanse-circle two">15 565 656</div>
                </div>
                <div className="finance-graph-text">
                  <div>
                    <div className="list-circle">
                      <svg
                        width="15"
                        height="16"
                        viewBox="0 0 15 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="2.12132"
                          y="8"
                          width="7"
                          height="7"
                          transform="rotate(-45 2.12132 8)"
                          stroke="#217AFF"
                          stroke-width="3"
                        />
                      </svg>
                    </div>
                    <span>Внебюджет</span>
                  </div>
                  <div>
                    <div className="list-circle">
                      <svg
                        width="15"
                        height="16"
                        viewBox="0 0 15 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="2.12132"
                          y="8"
                          width="7"
                          height="7"
                          transform="rotate(-45 2.12132 8)"
                          stroke="#2BD6FB"
                          stroke-width="3"
                        />
                      </svg>
                    </div>
                    <span>Субсидия</span>
                  </div>
                </div>
              </div>
              <div className="finance-graph-top botoom">
                <div className="finance-graph-top-circle">
                  <div className="graph-one">
                    <svg
                      width="119"
                      height="125"
                      viewBox="0 0 119 125"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d)">
                        <path
                          d="M60.8976 2C53.0263 2 45.2387 3.61612 38.0174 6.74824C30.7961 9.88037 24.2947 14.4618 18.916 20.2088C13.5374 25.9557 9.3959 32.7458 6.74819 40.1585C4.10049 47.5712 3.00291 55.4485 3.52346 63.3026C4.04401 71.1567 6.17159 78.8203 9.77442 85.8187C13.3773 92.8171 18.3786 99.0012 24.4687 103.988C30.5588 108.975 37.6079 112.658 45.1794 114.81C52.751 116.962 60.6836 117.536 68.4861 116.497L66.2051 99.3645C60.748 100.091 55.1997 99.6894 49.9041 98.1845C44.6085 96.6796 39.6782 94.1034 35.4187 90.6155C31.1592 87.1277 27.6612 82.8024 25.1414 77.9076C22.6215 73.0129 21.1334 67.6528 20.7693 62.1596C20.4053 56.6663 21.1729 51.1568 23.0248 45.9723C24.8766 40.7878 27.7732 36.0387 31.5351 32.0192C35.2971 27.9997 39.8442 24.7954 44.8949 22.6047C49.9456 20.4141 55.3923 19.2837 60.8976 19.2837V2Z"
                          fill="#FD6A6A"
                        />
                      </g>
                      <rect
                        x="2.12132"
                        y="58.071"
                        width="7"
                        height="7"
                        transform="rotate(-45 2.12132 58.071)"
                        fill="white"
                        stroke="#FD6A6A"
                        stroke-width="3"
                      />
                      <defs>
                        <filter
                          id="filter0_d"
                          x="1.39758"
                          y="0"
                          width="75.0885"
                          height="125"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          />
                          <feOffset dx="3" dy="3" />
                          <feGaussianBlur stdDeviation="2.5" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 1 0 0 0 0 0.129412 0 0 0 0 0.54902 0 0 0 0.28 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                  <div className="graph-two">
                    <svg
                      width="136"
                      height="131"
                      viewBox="0 0 136 131"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d)">
                        <path
                          d="M125.23 73.0714C125.876 64.2634 124.648 55.4185 121.627 47.1196C118.606 38.8208 113.86 31.2565 107.703 24.9252C101.545 18.594 94.1159 13.6396 85.9044 10.3886C77.6929 7.13758 68.8856 5.66377 60.063 6.06431L60.9619 25.8642C66.9867 25.5907 73.0009 26.5971 78.6084 28.8172C84.2158 31.0372 89.2891 34.4204 93.4938 38.7439C97.6985 43.0673 100.939 48.2328 103.002 53.8999C105.065 59.5669 105.904 65.6069 105.463 71.6217L125.23 73.0714Z"
                          fill="#FFC01D"
                        />
                      </g>
                      <rect
                        x="105.5"
                        y="31.5"
                        width="7"
                        height="7"
                        transform="rotate(-90 105.5 31.5)"
                        fill="white"
                        stroke="#FFC01D"
                        stroke-width="3"
                      />
                      <defs>
                        <filter
                          id="filter0_d"
                          x="54.063"
                          y="0"
                          width="81.3345"
                          height="83.0714"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          />
                          <feOffset dx="2" dy="2" />
                          <feGaussianBlur stdDeviation="4" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.984314 0 0 0 0 0.462275 0 0 0 0 0.168627 0 0 0 0.51 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </div>
                  <div className="circle-svg">
                    <svg
                      width="70"
                      height="69"
                      viewBox="0 0 70 69"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle cx="34.8976" cy="34.5" r="34" stroke="#FD6A6A" />
                    </svg>

                    <h3>Затраты</h3>
                  </div>
                  <div className="sumfinanse-circle">15 565 656</div>
                  <div className="sumfinanse-circle two">15 565 656</div>
                  <div className="graph-three">
                    <svg
                      width="139"
                      height="132"
                      viewBox="0 0 139 132"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d)">
                        <path
                          d="M70.3697 121.401C83.6558 120.101 96.0443 114.11 105.315 104.505C114.585 94.8986 120.131 82.305 120.958 68.9811L109.285 68.2562C108.63 78.8057 104.238 88.777 96.8985 96.3826C89.5586 103.988 79.7498 108.731 69.2303 109.761L70.3697 121.401Z"
                          fill="#FB9B2B"
                        />
                      </g>
                      <rect
                        x="101.5"
                        y="106.5"
                        width="7"
                        height="7"
                        transform="rotate(-90 101.5 106.5)"
                        fill="white"
                        stroke="#FB9B2B"
                        stroke-width="3"
                      />
                      <defs>
                        <filter
                          id="filter0_d"
                          x="56.5928"
                          y="60.322"
                          width="81.7091"
                          height="71.2274"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          />
                          <feOffset dx="2" dy="2" />
                          <feGaussianBlur stdDeviation="4" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0.984314 0 0 0 0 0.462275 0 0 0 0 0.168627 0 0 0 0.51 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                    <div className="sumfinanse-circle three">15 565 656</div>
                  </div>
                </div>
                <div className="finance-graph-text">
                  <div>
                    <div className="list-circle">
                      <svg
                        width="15"
                        height="16"
                        viewBox="0 0 15 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="2.12132"
                          y="8"
                          width="7"
                          height="7"
                          transform="rotate(-45 2.12132 8)"
                          stroke="#FD6A6A"
                          stroke-width="3"
                        />
                      </svg>
                    </div>
                    <span>Фонд оплаты труда</span>
                  </div>
                  <div>
                    <div className="list-circle">
                      <svg
                        width="15"
                        height="16"
                        viewBox="0 0 15 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="2.12132"
                          y="8"
                          width="7"
                          height="7"
                          transform="rotate(-45 2.12132 8)"
                          stroke="#FFC01D"
                          stroke-width="3"
                        />
                      </svg>
                    </div>
                    <span>Земельный налог</span>
                  </div>
                  <div>
                    <div className="list-circle">
                      <svg
                        width="15"
                        height="16"
                        viewBox="0 0 15 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          x="2.12132"
                          y="8"
                          width="7"
                          height="7"
                          transform="rotate(-45 2.12132 8)"
                          stroke="#FB9B2B"
                          stroke-width="3"
                        />
                      </svg>
                    </div>
                    <span>Имущественный налог</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="retancle-one bottom">
            <div className="head-retancle">
              <h3 className="finance-text">Научная деятельность</h3>
            </div>
            <div className="graph-block-siense">
              <div className="graph-block-siense--left">
                <img src="./image/retancle-left/graph.png" alt=" afas" />
              </div>
              <div class="finance-graph-text">
                <div>
                  <div class="list-circle">
                    <svg
                      width="15"
                      height="16"
                      viewBox="0 0 15 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="2.12132"
                        y="8"
                        width="7"
                        height="7"
                        transform="rotate(-45 2.12132 8)"
                        stroke="#217AFF"
                        stroke-width="3"
                      ></rect>
                    </svg>
                    <div>
                      <span>Поступления от НИР</span>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="list-circle">
                    <svg
                      width="15"
                      height="16"
                      viewBox="0 0 15 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="2.12132"
                        y="8"
                        width="7"
                        height="7"
                        transform="rotate(-45 2.12132 8)"
                        stroke="#2BD6FB"
                        stroke-width="3"
                      ></rect>
                    </svg>
                    <div>
                      <span>Кол-во заключенных договоров </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="publicashion-block">
              <ol>
                <li className="active">Публикации WoS</li>
                <li>Публикации Scopus</li>
                <li>Публикации Q1</li>
                <li>Публикации Q2</li>
              </ol>
              <div className="img-graph-publication">
                <img
                  src="./image/retancle-left/graph-publication.png"
                  alt=""
                />
                <div className="month">
                  <div>Март</div>
                  <div>
                    <b>128</b>
                  </div>
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
