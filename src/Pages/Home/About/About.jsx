const About = () => {
  return (
    <div className="md:mt-36 mt-20 p-4   h-96 bg-[#FFF] ">
      <div className="grid grid-cols-2 gap-6 ">
        <div className="  p-10 space-y-4">
          <h1 className="text-5xl text-black font-serif">About WPPOOL</h1>
          <h2 className="text-[#7D7F81] text-2xl font-serif ">
            Investing in wppool for over 50 years
          </h2>
          <p className="text-[#191618]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
            mollitia,molestiae quas vel sint commodi repudiandae consequuntur
            voluptatum laborumnumquam blanditiis harum quisquam eius sed odit
            fugiat iusto fuga praesentiumoptio, eaque rerum! Provident similique
            accusantium nemo autem.
          </p>
          <button className="px-1 md:px-3  py-1 md:py-2 rounded-full bg-[#2042B6] text-white shadow-[4.0px_8.0px_8.0px_rgba(0,0,0,0.38)] text-xs">
            Download ‘All Companies’ Data
          </button>
        </div>
        <div className=" flex justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="450"
            height="357"
            viewBox="0 0 450 357"
            fill="none"
            className="translate-x-32 translate-y-14"
            // Light svg
          >
            <path
              opacity="0.5"
              d="M449.998 0.5L319.351 356.545H120.518L0.746399 0.5H449.998Z"
              fill="url(#paint0_radial_1_537)"
            />
            <defs>
              <radialGradient
                id="paint0_radial_1_537"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(224.902 -104.5) rotate(90) scale(426 475.441)"
              >
                <stop stopColor="#98FFFF" stopOpacity="0" />
                <stop offset="0.505208" stopColor="#98FFFF" stopOpacity="0" />
                <stop offset="1" stopColor="#98FFFF" />
              </radialGradient>
            </defs>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="69"
            height="76"
            viewBox="0 0 69 76"
            fill="none"
            className="translate-y-20 translate-x-6"
            // call svg
          >
            <path
              d="M4.6554 59.8729C2.1794 58.4439 0.654419 55.8019 0.654419 52.9439V23.0709C0.654419 20.2119 2.1794 17.5709 4.6554 16.1419L30.5334 1.20393C33.0084 -0.224065 36.0574 -0.224065 38.5324 1.20393L64.4104 16.1419C66.8864 17.5709 68.4114 20.2119 68.4114 23.0709V52.9439C68.4114 55.8019 66.8864 58.4439 64.4104 59.8729L38.5324 74.8109C36.0574 76.2389 33.0084 76.2389 30.5334 74.8109L4.6554 59.8729Z"
              fill="#092DA4"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M26.5974 36.992C27.6694 39.098 29.3964 40.818 31.5024 41.897L33.1394 40.259C33.3404 40.058 33.6384 39.992 33.8984 40.081C34.7324 40.356 35.6324 40.505 36.5554 40.505C36.9654 40.505 37.3004 40.84 37.3004 41.249V43.847C37.3004 44.256 36.9654 44.591 36.5554 44.591C29.5674 44.591 23.9034 38.927 23.9034 31.939C23.9034 31.529 24.2384 31.194 24.6474 31.194H27.2524C27.6614 31.194 27.9964 31.529 27.9964 31.939C27.9964 32.869 28.1454 33.762 28.4214 34.596C28.5024 34.856 28.4434 35.146 28.2354 35.355L26.5974 36.992ZM36.6744 31.708L36.1464 31.187L31.3464 35.876V32.683H30.6014V37.149H35.0674V36.404H31.9784L36.6744 31.708Z"
              fill="white"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M43.3784 45.1589V41.1559L50.5634 46.2879C50.9864 46.5899 51.5424 46.6309 52.0044 46.3929C52.4664 46.1549 52.7574 45.6789 52.7574 45.1589V31.2829C52.7574 30.7629 52.4664 30.2869 52.0044 30.0489C51.5424 29.8109 50.9864 29.8509 50.5634 30.1529L43.3784 35.2849V31.2829C43.3784 28.8329 41.1974 27.1199 38.8644 27.1199H21.6704C19.3374 27.1199 17.1564 28.8329 17.1564 31.2829V45.1589C17.1564 47.6089 19.3374 49.3219 21.6704 49.3219H38.8644C41.1974 49.3219 43.3784 47.6089 43.3784 45.1589ZM31.5024 41.8969C29.3954 40.8179 27.6694 39.0979 26.5974 36.9919L28.2344 35.3549C28.4434 35.1459 28.5024 34.8559 28.4204 34.5959C28.1454 33.7619 27.9964 32.8689 27.9964 31.9389C27.9964 31.5289 27.6614 31.1939 27.2524 31.1939H24.6474C24.2384 31.1939 23.9034 31.5289 23.9034 31.9389C23.9034 38.9269 29.5674 44.5909 36.5554 44.5909C36.9644 44.5909 37.2994 44.2559 37.2994 43.8469V41.2489C37.2994 40.8399 36.9644 40.5049 36.5554 40.5049C35.6324 40.5049 34.7324 40.3559 33.8984 40.0809C33.6384 39.9909 33.3404 40.0579 33.1394 40.2589L31.5024 41.8969ZM36.1464 31.1869L36.6744 31.7079L31.9784 36.4039H35.0674V37.1479H30.6014V32.6829H31.3454V35.8759L36.1464 31.1869Z"
              fill="#407BFF"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="94"
            height="90"
            viewBox="0 0 94 90"
            fill="none"
            className="translate-y-36 -translate-x-16"
          >
            <path
              opacity="0.5"
              d="M0.756409 30.3279C0.756409 27.4699 2.2804 24.8289 4.7554 23.3999L43.1154 1.24694C45.5914 -0.183061 48.6414 -0.183061 51.1174 1.24694L89.4774 23.3999C91.9524 24.8289 93.4764 27.4699 93.4764 30.3279V74.6169C93.4764 77.4759 91.9514 80.1169 89.4764 81.5459L76.2024 89.2089C52.5054 83.424 27.4574 80.0969 2.2164 79.2259C1.2814 77.8989 0.756409 76.2959 0.756409 74.6169V30.3279Z"
              fill="#0E32A8"
            />
            <path
              d="M67.7554 36.2499C67.7574 35.5599 67.6224 34.8769 67.3594 34.2389C67.0964 33.6009 66.7094 33.0219 66.2214 32.5339C65.7334 32.0459 65.1544 31.6599 64.5164 31.3969C63.8794 31.1329 63.1954 30.9979 62.5054 30.9999H31.0064C30.3164 30.9979 29.6324 31.1329 28.9954 31.3969C28.3574 31.6599 27.7784 32.0459 27.2904 32.5339C26.8024 33.0219 26.4154 33.6009 26.1524 34.2389C25.8894 34.8769 25.7544 35.5599 25.7564 36.2499V67.7499C25.7544 68.4399 25.8894 69.1229 26.1524 69.7609C26.4154 70.3989 26.8024 70.9779 27.2904 71.4659C27.7784 71.9539 28.3574 72.3399 28.9954 72.6029C29.6324 72.8669 30.3164 73.0019 31.0064 72.9999H62.5054C63.1954 73.0019 63.8794 72.8669 64.5164 72.6029C65.1544 72.3399 65.7334 71.9539 66.2214 71.4659C66.7094 70.9779 67.0964 70.3989 67.3594 69.7609C67.6224 69.1229 67.7574 68.4399 67.7554 67.7499V36.2499Z"
              fill="url(#paint0_linear_1_725)"
            />
            <path
              d="M48.5644 39.4349H38.0644C37.5824 39.4409 37.1224 39.6369 36.7844 39.9799C36.4454 40.3229 36.2554 40.7849 36.2564 41.2669V64.5999C36.2564 64.8419 36.3034 65.0809 36.3964 65.3039C36.4894 65.5269 36.6254 65.7289 36.7964 65.8989C36.9674 66.0699 37.1714 66.2039 37.3944 66.2959C37.6184 66.3869 37.8574 66.4329 38.0994 66.4319H54.0704C54.3124 66.4329 54.5514 66.3869 54.7754 66.2959C54.9994 66.2039 55.2024 66.0699 55.3734 65.8989C55.5454 65.7289 55.6814 65.5269 55.7734 65.3039C55.8664 65.0809 55.9144 64.8419 55.9144 64.5999V46.8199L51.6094 43.7279L48.5644 39.4349Z"
              fill="#0F9D58"
            />
            <path
              d="M41.1794 52.653V61.5779H51.0264V52.653H41.1794ZM45.4734 60.3299H42.3934V58.7899H45.4734V60.3299ZM45.4734 57.868H42.3934V56.3279H45.4734V57.868ZM45.4734 55.407H42.3934V53.8669H45.4734V55.407ZM49.7784 60.3299H46.6864V58.7899H49.7784V60.3299ZM49.7784 57.868H46.6864V56.3279H49.7784V57.868ZM49.7784 55.407H46.6864V53.8669H49.7784V55.407Z"
              fill="#F1F1F1"
            />
            <path
              d="M49.0904 46.2949L55.9384 53.1669V46.8669L49.0904 46.2949Z"
              fill="url(#paint1_linear_1_725)"
            />
            <path
              d="M48.5394 39.4469V44.9999C48.5374 45.2419 48.5834 45.4809 48.6754 45.7049C48.7664 45.9279 48.9014 46.1319 49.0714 46.3029C49.2414 46.4739 49.4444 46.6099 49.6674 46.7029C49.8904 46.7959 50.1294 46.8429 50.3704 46.8429H55.9124L48.5394 39.4469Z"
              fill="#87CEAC"
            />
            <path
              opacity="0.2"
              d="M38.0994 39.435C37.8574 39.434 37.6184 39.48 37.3944 39.571C37.1714 39.663 36.9674 39.797 36.7964 39.967C36.6254 40.138 36.4894 40.3399 36.3964 40.5629C36.3034 40.7859 36.2564 41.025 36.2564 41.267V41.4299C36.2564 41.1889 36.3034 40.949 36.3964 40.726C36.4894 40.503 36.6254 40.301 36.7964 40.131C36.9674 39.961 37.1714 39.826 37.3944 39.734C37.6184 39.643 37.8574 39.5969 38.0994 39.5979H48.5994V39.435H38.0994Z"
              fill="white"
            />
            <path
              opacity="0.2"
              d="M54.0704 66.339H38.0994C37.8574 66.34 37.6184 66.294 37.3944 66.202C37.1714 66.111 36.9674 65.976 36.7964 65.806C36.6254 65.636 36.4894 65.433 36.3964 65.21C36.3034 64.987 36.2564 64.748 36.2564 64.507V64.67C36.2564 64.912 36.3034 65.151 36.3964 65.374C36.4894 65.597 36.6254 65.799 36.7964 65.969C36.9674 66.14 37.1714 66.274 37.3944 66.366C37.6184 66.457 37.8574 66.503 38.0994 66.502H54.0704C54.3124 66.503 54.5514 66.457 54.7754 66.366C54.9994 66.274 55.2024 66.14 55.3734 65.969C55.5454 65.799 55.6814 65.597 55.7734 65.374C55.8664 65.151 55.9144 64.912 55.9144 64.67V64.507C55.9154 64.749 55.8694 64.989 55.7764 65.212C55.6844 65.436 55.5484 65.639 55.3774 65.81C55.2054 65.98 55.0014 66.115 54.7774 66.206C54.5534 66.296 54.3124 66.342 54.0704 66.339Z"
              fill="#263238"
            />
            <path
              opacity="0.1"
              d="M50.3964 46.82C49.9124 46.82 49.4484 46.629 49.1054 46.288C48.7624 45.947 48.5674 45.484 48.5644 45V45.128C48.5634 45.37 48.6094 45.609 48.7004 45.833C48.7924 46.056 48.9264 46.26 49.0964 46.431C49.2674 46.602 49.4694 46.738 49.6924 46.831C49.9154 46.924 50.1544 46.972 50.3964 46.972H55.9494V46.808H50.3964V46.82Z"
              fill="#263238"
            />
            <path
              d="M55.6114 37.2069C56.3804 37.2129 57.1414 37.3679 57.8514 37.6619C58.1924 37.8089 58.5204 37.985 58.8314 38.187C59.4484 38.585 59.9734 39.1099 60.3714 39.7269C60.5874 40.0339 60.7644 40.3669 60.8964 40.7179C61.2064 41.4199 61.3654 42.1789 61.3634 42.9469C61.3554 43.7129 61.1974 44.4699 60.8964 45.1749C60.7494 45.5159 60.5734 45.8439 60.3714 46.1549C60.1754 46.4639 59.9444 46.7499 59.6834 47.0069C59.4244 47.2689 59.1394 47.5039 58.8314 47.7069C58.5234 47.9139 58.1954 48.0899 57.8514 48.2319C57.1434 48.5319 56.3814 48.687 55.6114 48.687C54.8464 48.679 54.0904 48.5239 53.3834 48.2319C53.0474 48.0749 52.7204 47.8999 52.4034 47.7069C52.0934 47.5059 51.8084 47.2719 51.5514 47.0069C51.2874 46.7529 51.0554 46.4669 50.8634 46.1549C50.6654 45.7699 50.5014 45.443 50.3614 45.1049C50.0614 44.4009 49.9065 43.643 49.9065 42.877C49.9135 42.112 50.0674 41.3549 50.3614 40.6479C50.5014 40.3219 50.7004 39.995 50.8864 39.657C51.0924 39.354 51.3224 39.0699 51.5754 38.8049C51.8414 38.5499 52.1304 38.3189 52.4384 38.1169C52.7444 37.9049 53.0724 37.7289 53.4184 37.5919C54.1194 37.3289 54.8634 37.1979 55.6114 37.2069ZM55.6114 36.8099C54.4124 36.8119 53.2404 37.17 52.2444 37.838C51.2484 38.506 50.4724 39.4539 50.0154 40.5629C49.5574 41.6719 49.4394 42.8909 49.6744 44.0669C49.9104 45.2429 50.4884 46.3229 51.3374 47.1709C52.1864 48.0179 53.2674 48.5949 54.4444 48.8279C55.6204 49.0609 56.8394 48.9399 57.9474 48.4799C59.0554 48.021 60.0024 47.2429 60.6684 46.2459C61.3344 45.2489 61.6904 44.076 61.6904 42.877C61.6834 41.27 61.0404 39.7309 59.9004 38.5979C58.7614 37.4649 57.2184 36.8299 55.6114 36.8329V36.8099Z"
              fill="white"
            />
            <path
              d="M50.5594 42.8769C50.5564 43.8299 50.8224 44.7639 51.3284 45.5709C51.8344 46.3789 52.5594 47.0259 53.4174 47.4389L50.9914 40.8469C50.6934 41.4809 50.5454 42.1759 50.5594 42.8769ZM59.0294 42.6439C59.0224 42.1519 58.8724 41.6739 58.5974 41.2669C58.3304 40.9309 58.1604 40.5269 58.1074 40.0999C58.1004 39.9819 58.1164 39.8639 58.1554 39.7529C58.1944 39.6409 58.2554 39.5389 58.3344 39.4519C58.4144 39.3649 58.5104 39.2939 58.6184 39.2449C58.7254 39.1959 58.8414 39.1699 58.9594 39.1669H59.0294C58.4844 38.6869 57.8434 38.3289 57.1484 38.1169C56.4534 37.9049 55.7214 37.8439 55.0014 37.9379C54.2814 38.0319 53.5894 38.2779 52.9724 38.6609C52.3554 39.0439 51.8264 39.5549 51.4224 40.1589H51.7494C52.2744 40.1589 53.0914 40.0889 53.0914 40.0889C53.1404 40.0999 53.1834 40.1269 53.2144 40.1669C53.2454 40.2059 53.2624 40.2539 53.2624 40.3039C53.2624 40.3539 53.2454 40.4029 53.2144 40.4419C53.1834 40.4809 53.1404 40.5089 53.0914 40.5199C53.0914 40.5199 52.8224 40.5199 52.4964 40.5199L54.3394 46.0039L55.4474 42.6669L54.6664 40.4739C54.4914 40.4839 54.3164 40.4839 54.1414 40.4739C53.8724 40.4739 53.9074 40.0419 54.1414 40.0419C54.1414 40.0419 54.9574 40.1119 55.4824 40.1119C56.0074 40.1119 56.8244 40.0419 56.8244 40.0419C56.8734 40.0529 56.9164 40.0809 56.9474 40.1199C56.9784 40.1589 56.9954 40.2079 56.9954 40.2579C56.9954 40.3079 56.9784 40.3559 56.9474 40.3949C56.9164 40.4349 56.8734 40.4619 56.8244 40.4739C56.6264 40.4859 56.4274 40.4859 56.2294 40.4739L58.0724 45.9219L58.5974 44.2769C58.8154 43.7629 58.9604 43.2209 59.0294 42.6669V42.6439ZM55.6814 43.3439L54.1764 47.7299C55.1884 48.0159 56.2634 47.9829 57.2564 47.6369C57.2564 47.6369 57.2564 47.6369 57.2564 47.5669L55.6814 43.3439ZM60.0444 40.4499C60.0634 40.6249 60.0634 40.8009 60.0444 40.9749C60.0344 41.5979 59.8994 42.2129 59.6474 42.7839L58.1074 47.2399C59.2474 46.5799 60.0844 45.4999 60.4394 44.2319C60.7944 42.9629 60.6404 41.6069 60.0094 40.4499H60.0444Z"
              fill="white"
            />
            <defs>
              <linearGradient
                id="paint0_linear_1_725"
                x1="57.6994"
                y1="67.1319"
                x2="28.8244"
                y2="27.2079"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#08CF68" />
                <stop offset="1" stopColor="#E2FFBC" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_1_725"
                x1="52.5194"
                y1="46.8669"
                x2="52.5194"
                y2="53.1199"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#263238" stopOpacity="0.2" />
                <stop offset="1" stopColor="#263238" stopOpacity="0.02" />
              </linearGradient>
            </defs>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="168"
            height="186"
            viewBox="0 0 168 186"
            fill="none"
            className=" -translate-x-64 translate-y-3"
            // moon svg
          >
            <path
              opacity="0.8"
              d="M11.0394 146.953C4.6764 143.28 0.756409 136.491 0.756409 129.143V56.765C0.756409 49.418 4.6764 42.629 11.0394 38.956L73.7584 2.754C80.1194 -0.918 87.9564 -0.918 94.3184 2.754L157.036 38.956C163.4 42.629 167.32 49.418 167.32 56.765V129.143C167.32 136.491 163.4 143.28 157.036 146.953L94.3184 183.155C87.9564 186.827 80.1194 186.827 73.7584 183.155L11.0394 146.953Z"
              fill="#092DA4"
            />
            <path
              d="M131.397 92.999C131.397 83.577 128.603 74.366 123.368 66.532C118.133 58.698 110.693 52.592 101.988 48.986C93.2834 45.38 83.7044 44.437 74.4634 46.275C65.2214 48.113 56.7334 52.65 50.0704 59.313C43.4084 65.975 38.8704 74.464 37.0324 83.705C35.1944 92.947 36.1374 102.525 39.7434 111.23C43.3494 119.935 49.4554 127.376 57.2894 132.611C65.1244 137.845 74.3354 140.639 83.7574 140.639C96.3924 140.639 108.509 135.62 117.443 126.686C126.378 117.752 131.397 105.634 131.397 92.999Z"
              fill="black"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M35.7564 92.82C35.7564 83.327 38.5714 74.046 43.8454 66.153C49.1194 58.259 56.6164 52.107 65.3874 48.474C74.1584 44.841 83.8094 43.89 93.1204 45.742C102.431 47.594 110.984 52.166 117.697 58.879C124.41 65.592 128.981 74.145 130.833 83.456C132.685 92.767 131.735 102.418 128.102 111.189C124.469 119.96 118.316 127.456 110.423 132.731C102.529 138.005 93.2494 140.82 83.7564 140.82C71.0254 140.82 58.8164 135.763 49.8144 126.761C40.8134 117.759 35.7564 105.55 35.7564 92.82ZM83.7564 48.732C75.0364 48.732 66.5124 51.318 59.2624 56.162C52.0114 61.007 46.3604 67.892 43.0244 75.948C39.6874 84.004 38.8144 92.869 40.5154 101.421C42.2164 109.973 46.4154 117.829 52.5814 123.995C58.7464 130.161 66.6024 134.36 75.1544 136.061C83.7074 137.762 92.5714 136.889 100.627 133.552C108.683 130.215 115.569 124.564 120.413 117.314C125.258 110.064 127.843 101.54 127.843 92.82C127.837 81.129 123.19 69.919 114.923 61.652C106.657 53.385 95.4464 48.738 83.7564 48.732Z"
              fill="#FF631A"
            />
            <path
              d="M86.3504 115.416C90.6054 115.459 94.7824 114.272 98.3794 111.999C101.977 109.725 104.842 106.462 106.63 102.6C104.322 103.603 101.825 104.094 99.3104 104.04C94.5884 104.034 90.0634 102.155 86.7244 98.8171C83.3864 95.4791 81.5084 90.9531 81.5024 86.2321C81.5454 82.9651 82.4564 79.7671 84.1424 76.9681C85.8204 74.1591 88.2244 71.8551 91.1024 70.2961C89.5114 70.0781 87.9074 69.9821 86.3024 70.0081C80.4114 70.2001 74.8264 72.6741 70.7274 76.9091C66.6274 81.1441 64.3364 86.8061 64.3364 92.7001C64.3364 98.5941 66.6274 104.256 70.7274 108.491C74.8264 112.726 80.4114 115.2 86.3024 115.392L86.3504 115.416Z"
              fill="#D7F1E1"
            />
            <path
              d="M105.187 78.72C105.661 78.72 106.125 78.5801 106.52 78.3161C106.915 78.0521 107.222 77.6771 107.404 77.2391C107.586 76.8001 107.633 76.318 107.541 75.852C107.448 75.387 107.219 74.959 106.884 74.623C106.548 74.288 106.121 74.0591 105.655 73.9671C105.189 73.8741 104.707 73.921 104.268 74.103C103.83 74.285 103.455 74.592 103.191 74.987C102.928 75.382 102.787 75.8461 102.787 76.3201C102.787 76.9571 103.04 77.567 103.49 78.017C103.94 78.468 104.55 78.72 105.187 78.72Z"
              fill="white"
            />
            <path
              d="M95.7554 99.3601C95.9184 99.3651 96.0794 99.3211 96.2174 99.2331C96.3554 99.1451 96.4634 99.0181 96.5284 98.8681C96.5934 98.7181 96.6114 98.5521 96.5804 98.3911C96.5494 98.2311 96.4714 98.0831 96.3564 97.9681C96.2404 97.8521 96.0924 97.7741 95.9324 97.7431C95.7714 97.7121 95.6054 97.7311 95.4554 97.7951C95.3054 97.8601 95.1784 97.9681 95.0904 98.1061C95.0034 98.2441 94.9584 98.4051 94.9634 98.5681C94.9634 98.7781 95.0464 98.9801 95.1954 99.1281C95.3434 99.2771 95.5454 99.3601 95.7554 99.3601Z"
              fill="white"
            />
            <path
              d="M90.9564 83.4C91.1664 83.4 91.3674 83.317 91.5164 83.168C91.6644 83.02 91.7484 82.818 91.7484 82.608C91.7484 82.398 91.6644 82.197 91.5164 82.048C91.3674 81.9 91.1664 81.816 90.9564 81.816C90.7464 81.816 90.5444 81.9 90.3964 82.048C90.2474 82.197 90.1644 82.398 90.1644 82.608C90.1644 82.818 90.2474 83.02 90.3964 83.168C90.5444 83.317 90.7464 83.4 90.9564 83.4Z"
              fill="white"
            />
            <path
              d="M114.717 94.584C114.874 94.584 115.027 94.538 115.157 94.451C115.288 94.364 115.389 94.24 115.449 94.095C115.509 93.95 115.525 93.791 115.494 93.637C115.464 93.484 115.388 93.343 115.277 93.232C115.167 93.121 115.026 93.046 114.872 93.015C114.718 92.985 114.559 93 114.414 93.06C114.27 93.12 114.146 93.222 114.059 93.352C113.972 93.482 113.925 93.635 113.925 93.792C113.925 94.002 114.009 94.204 114.157 94.352C114.306 94.501 114.507 94.584 114.717 94.584Z"
              fill="white"
            />
          </svg>
          {/* new svg */}
          
          
        </div>
      </div>
    </div>
  );
};

export default About;
