import type { NextPage } from "next";
import Head from "next/head";
import Nav from "./components/Nav";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>TayBlog</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex justify-center items-center h-screen">
        <Nav />
        <div className="flex max-w-screen-lg justify-between items-center w-full">
          <div className="flex justify-start items-start flex-col gap-4">
            <p className="text-gray-600 text-lg">(Bi · yet · tay)</p>
            <h1 className="text-4xl font-bold">Hi I'm Bayethe Lungah</h1>
            <p className="text-xl">
              This is my personal Blog where I document my engineering journey.
            </p>
            <a href="/posts" className="btn w-32 text-center">
              Posts
            </a>
          </div>
          <div className="flex flex-col justify-center items-center">
            <svg
              width="532"
              height="494"
              viewBox="0 0 632 594"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_705_220)">
                <path
                  d="M582.22 581.842L570.788 581.841L565.352 537.745L582.224 537.746L582.22 581.842Z"
                  fill="#FFB8B8"
                />
                <path
                  d="M562.622 578.574H584.67V592.456H548.74C548.74 590.633 549.099 588.828 549.797 587.143C550.494 585.459 551.517 583.929 552.806 582.64C554.095 581.351 555.625 580.328 557.31 579.63C558.994 578.933 560.799 578.574 562.622 578.574V578.574Z"
                  fill="#2F2E41"
                />
                <path
                  d="M536.72 581.842L525.288 581.841L519.852 537.745L536.724 537.746L536.72 581.842Z"
                  fill="#FFB8B8"
                />
                <path
                  d="M517.122 578.574H539.17V592.456H503.24C503.24 590.633 503.599 588.828 504.297 587.143C504.994 585.459 506.017 583.929 507.306 582.64C508.595 581.351 510.125 580.328 511.81 579.63C513.494 578.933 515.299 578.574 517.122 578.574V578.574Z"
                  fill="#2F2E41"
                />
                <path
                  d="M591.027 429.391C590.107 428.375 589.421 427.169 589.017 425.859C588.613 424.549 588.502 423.167 588.69 421.809C588.878 420.451 589.362 419.151 590.107 418C590.853 416.85 591.841 415.876 593.003 415.149L589.462 394.016L601.78 388.732L606.361 418.646C607.454 420.679 607.762 423.043 607.229 425.288C606.695 427.534 605.357 429.505 603.467 430.83C601.576 432.154 599.266 432.739 596.973 432.474C594.681 432.209 592.565 431.112 591.027 429.391V429.391Z"
                  fill="#FFB8B8"
                />
                <path
                  d="M494.589 419.405C495.664 418.555 496.54 417.479 497.155 416.254C497.769 415.029 498.108 413.684 498.146 412.313C498.185 410.943 497.922 409.581 497.377 408.323C496.833 407.065 496.019 405.942 494.993 405.033L501.976 384.775L490.701 377.528L481.24 406.275C479.827 408.1 479.132 410.379 479.287 412.682C479.443 414.985 480.437 417.151 482.082 418.769C483.728 420.388 485.91 421.346 488.215 421.464C490.52 421.581 492.788 420.849 494.589 419.405V419.405Z"
                  fill="#FFB8B8"
                />
                <path
                  d="M553.139 270.166C566.704 270.166 577.7 259.17 577.7 245.605C577.7 232.04 566.704 221.044 553.139 221.044C539.575 221.044 528.578 232.04 528.578 245.605C528.578 259.17 539.575 270.166 553.139 270.166Z"
                  fill="#FFB8B8"
                />
                <path
                  d="M493.83 404.25C493.408 404.249 492.989 404.19 492.584 404.073L485.426 402.018C484.282 401.688 483.316 400.919 482.738 399.879C482.159 398.839 482.016 397.612 482.338 396.467L497.112 344.305L517.714 293.729C519.762 288.702 524.042 285.404 528.884 285.124C531.095 285.016 533.29 285.552 535.203 286.666C537.116 287.78 538.665 289.425 539.662 291.401V291.401C540.77 293.517 541.378 295.858 541.44 298.245C541.502 300.632 541.016 303.002 540.019 305.172L516.602 356.382L497.985 401.466C497.646 402.289 497.07 402.993 496.33 403.489C495.59 403.984 494.72 404.249 493.83 404.25Z"
                  fill="#3F3D56"
                />
                <path
                  d="M566.999 266.202L553.353 266.445C551.931 266.473 550.523 266.167 549.242 265.55C547.961 264.934 546.842 264.026 545.976 262.898C545.111 261.77 544.522 260.455 544.258 259.058C543.994 257.661 544.062 256.221 544.457 254.855C544.749 253.868 544.968 252.861 545.113 251.842C545.266 250.731 545.296 249.607 545.202 248.489C545.116 247.37 544.652 246.313 543.886 245.492C543.12 244.671 542.098 244.135 540.987 243.972C539.877 243.808 538.743 244.026 537.773 244.591C536.803 245.156 536.054 246.034 535.648 247.081C533.353 247.113 528.465 246.365 526.17 246.398C521.298 233.908 531.915 217.565 543.344 211.426C554.995 205.168 570.119 211.535 574.585 224.578C580.784 224.689 585.82 230.802 586.619 237.684C587.418 244.566 584.586 251.752 580.256 257.026C575.925 262.3 570.238 266.145 566.999 266.202Z"
                  fill="#2F2E41"
                />
                <path
                  d="M522.141 577.725C521.036 577.719 519.971 577.307 519.148 576.568C518.326 575.829 517.804 574.814 517.68 573.715L512.616 403.479L576.404 408.02L576.453 408.43C590.868 529.093 585.94 570.862 585.889 571.27C585.853 571.887 585.691 572.49 585.412 573.042C585.133 573.594 584.743 574.082 584.267 574.477C583.79 574.871 583.238 575.163 582.644 575.334C582.049 575.506 581.426 575.553 580.813 575.472L566.717 575.81C565.648 575.689 564.658 575.189 563.926 574.401C563.194 573.613 562.769 572.589 562.728 571.514L549.556 448.214C549.475 447.894 549.283 447.613 549.015 447.42C548.747 447.227 548.42 447.134 548.09 447.158C547.751 447.157 547.422 447.274 547.159 447.489C546.897 447.703 546.717 448.003 546.651 448.335L541.562 572.039C541.616 573.187 541.227 574.312 540.475 575.182C539.723 576.051 538.665 576.598 537.521 576.709L522.589 577.702C522.44 577.717 522.291 577.725 522.141 577.725V577.725Z"
                  fill="#2F2E41"
                />
                <path
                  d="M548.61 423.82C548.228 423.82 547.847 423.814 547.465 423.803C529.123 423.25 514.773 409.373 510.812 405.133C510.308 404.593 509.945 403.935 509.756 403.221C509.568 402.506 509.559 401.755 509.731 401.036L520.312 356.272L517.505 317.355C517.064 311.954 517.772 306.52 519.583 301.413C521.394 296.305 524.266 291.639 528.011 287.722C531.131 284.425 534.923 281.838 539.131 280.136C543.338 278.434 547.863 277.656 552.397 277.856C570.252 278.708 584.338 294.667 584.466 314.188C584.663 344.423 583.773 346.5 583.481 347.183C574.57 367.98 579.437 397.172 581.14 405.624C581.293 406.378 581.25 407.159 581.016 407.892C580.782 408.625 580.364 409.286 579.803 409.812C570.003 419.111 559.513 423.82 548.61 423.82Z"
                  fill="#3F3D56"
                />
                <path
                  d="M594.675 412.441C593.657 412.441 592.669 412.095 591.874 411.46C591.078 410.825 590.521 409.939 590.294 408.947L579.377 361.39L564.747 307.033C564.122 304.728 564.034 302.31 564.489 299.966C564.945 297.622 565.932 295.413 567.374 293.51C568.685 291.727 570.484 290.361 572.554 289.578C574.625 288.796 576.878 288.629 579.041 289.1C583.769 290.176 587.446 294.135 588.636 299.433L600.59 352.662L606.553 406.602C606.681 407.785 606.337 408.971 605.594 409.901C604.852 410.831 603.772 411.43 602.59 411.567L595.19 412.412C595.019 412.431 594.847 412.441 594.675 412.441Z"
                  fill="#3F3D56"
                />
                <path
                  d="M30.8318 417.507C32.1271 416.619 33.212 415.458 34.0101 414.105C34.8081 412.753 35.2998 411.242 35.4507 409.678C35.6015 408.115 35.4077 406.538 34.883 405.057C34.3583 403.577 33.5154 402.23 32.4137 401.111L36.5808 308.093L15.3653 310.474L16.5979 401.459C14.8403 403.434 13.8683 405.986 13.8663 408.63C13.8642 411.274 14.8321 413.827 16.5866 415.805C18.3412 417.783 20.7604 419.049 23.3858 419.363C26.0113 419.677 28.6606 419.016 30.8318 417.507V417.507Z"
                  fill="#FFB8B8"
                />
                <path
                  d="M69.534 574.966L81.609 577.089L93.543 531.525L77.722 528.392L69.534 574.966Z"
                  fill="#FFB8B8"
                />
                <path
                  d="M102.925 592.395L64.9759 585.723L67.5534 571.061L90.8402 575.155C92.7656 575.493 94.6056 576.208 96.2549 577.257C97.9042 578.307 99.3307 579.671 100.453 581.272C101.575 582.873 102.371 584.679 102.795 586.587C103.219 588.496 103.263 590.469 102.925 592.395V592.395Z"
                  fill="#2F2E41"
                />
                <path
                  d="M36.392 581.01H48.652L54.484 533.722L36.39 533.723L36.392 581.01Z"
                  fill="#FFB8B8"
                />
                <path
                  d="M72.2963 592.393L33.7656 592.395L33.7649 577.508L57.4088 577.507C61.357 577.506 65.1436 579.075 67.9356 581.866C70.7275 584.658 72.2961 588.445 72.2963 592.393V592.393Z"
                  fill="#2F2E41"
                />
                <path
                  d="M88.5449 568.061C88.3536 568.061 88.1624 568.05 87.9724 568.027L73.5424 566.84C72.8854 566.762 72.251 566.552 71.6777 566.222C71.1044 565.892 70.6041 565.449 70.2073 564.92C69.8105 564.39 69.5255 563.786 69.3695 563.143C69.2135 562.5 69.1898 561.832 69.2999 561.18L82.6246 486.499L73.6211 439.025C73.5476 438.639 73.3372 438.293 73.0286 438.051C72.72 437.808 72.3341 437.685 71.942 437.704C71.5498 437.724 71.178 437.884 70.895 438.157C70.612 438.429 70.4369 438.794 70.4021 439.185L59.1463 565.813C59.0227 567.083 58.4103 568.256 57.4383 569.084C56.4664 569.912 55.2109 570.33 53.9367 570.25L40.3419 569.744C39.1505 569.659 38.0313 569.142 37.1955 568.288C36.3597 567.435 35.8652 566.305 35.8055 565.113L34.8916 413.345L105.373 404.535L110.296 480.576L110.277 480.656L93.2861 564.331C93.0272 565.394 92.4194 566.339 91.5598 567.015C90.7002 567.691 89.6386 568.06 88.5449 568.061V568.061Z"
                  fill="#2F2E41"
                />
                <path
                  d="M58.1291 247.816C71.6938 247.816 82.6902 236.82 82.6902 223.255C82.6902 209.69 71.6938 198.694 58.1291 198.694C44.5645 198.694 33.5681 209.69 33.5681 223.255C33.5681 236.82 44.5645 247.816 58.1291 247.816Z"
                  fill="#FFB8B8"
                />
                <path
                  d="M81.2716 424.437C77.4303 424.46 73.6628 423.382 70.4147 421.332C58.5173 413.896 45.0041 416.851 38.0078 419.275C37.3136 419.518 36.5734 419.601 35.8425 419.517C35.1117 419.434 34.4091 419.187 33.7873 418.794C33.1727 418.408 32.6533 417.888 32.2681 417.273C31.8829 416.658 31.6418 415.964 31.5629 415.242L18.8404 301.617C16.7084 282.579 28.1763 264.68 46.1081 259.057C46.7818 258.846 47.4668 258.645 48.1633 258.456C53.7435 256.943 59.5875 256.671 65.284 257.66C70.9806 258.648 76.3912 260.873 81.1353 264.178C85.9676 267.519 90.0089 271.879 92.9748 276.95C95.9407 282.022 97.7592 287.682 98.3021 293.531L109.013 407.918C109.085 408.659 108.986 409.406 108.721 410.102C108.456 410.797 108.033 411.421 107.485 411.925C103.731 415.399 92.8338 424.436 81.2716 424.437Z"
                  fill="#6C63FF"
                />
                <path
                  d="M42.5306 325.983L13.8272 322.827C13.0105 322.737 12.2228 322.472 11.5176 322.05C10.8125 321.629 10.2065 321.06 9.74101 320.383C9.27548 319.706 8.96133 318.937 8.81996 318.127C8.67858 317.318 8.71331 316.488 8.92176 315.693L16.2278 287.847C16.7109 283.671 18.8302 279.857 22.121 277.241C25.4119 274.625 29.6056 273.421 33.7828 273.893C37.9599 274.365 41.7796 276.474 44.4043 279.757C47.0289 283.041 48.2444 287.231 47.7842 291.41L48.8688 320.085C48.8996 320.906 48.7531 321.724 48.4392 322.483C48.1254 323.243 47.6516 323.926 47.0501 324.485C46.4486 325.045 45.7335 325.468 44.9536 325.727C44.1737 325.985 43.3472 326.072 42.5306 325.983V325.983Z"
                  fill="#6C63FF"
                />
                <path
                  d="M108.898 413.524C110.077 412.487 111.014 411.203 111.643 409.764C112.272 408.325 112.578 406.766 112.539 405.196C112.501 403.626 112.118 402.083 111.419 400.677C110.72 399.271 109.721 398.035 108.492 397.057L101.419 304.214L80.6306 308.894L92.8335 399.308C91.3268 401.481 90.6694 404.131 90.986 406.756C91.3026 409.381 92.5711 411.799 94.5512 413.551C96.5314 415.304 99.0855 416.269 101.73 416.264C104.374 416.259 106.924 415.284 108.898 413.524Z"
                  fill="#FFB8B8"
                />
                <path
                  d="M72.6606 320.146C72.0588 319.587 71.5849 318.904 71.2711 318.145C70.9572 317.386 70.8109 316.568 70.8421 315.747L71.9268 287.071C71.4665 282.893 72.682 278.702 75.3067 275.419C77.9313 272.135 81.751 270.026 85.9282 269.555C90.1053 269.083 94.2991 270.287 97.5899 272.903C100.881 275.518 103 279.332 103.483 283.508L110.789 311.354C110.998 312.149 111.032 312.979 110.891 313.789C110.75 314.598 110.435 315.368 109.97 316.045C109.504 316.722 108.898 317.29 108.193 317.712C107.488 318.134 106.7 318.398 105.884 318.488L77.1804 321.644C76.3636 321.734 75.537 321.647 74.757 321.389C73.9769 321.13 73.2619 320.707 72.6606 320.146V320.146Z"
                  fill="#6C63FF"
                />
                <path
                  d="M56.6683 248.741C56.2317 248.741 55.7966 248.69 55.3717 248.59L55.2469 248.56C33.6524 245.256 28.8802 232.748 27.8326 227.525C26.7484 222.116 27.983 216.896 30.7728 214.869C29.2518 210.066 29.4959 205.808 31.5001 202.207C34.9954 195.927 42.5811 193.803 43.5985 193.543C49.6566 189.074 56.9049 192.057 58.2237 192.662C69.9422 188.327 74.4212 191.936 75.2313 192.741C80.4696 193.682 83.6624 195.706 84.7225 198.757C86.7135 204.488 80.4171 211.617 80.148 211.918L80.0084 212.073L70.6283 212.52C69.7382 212.563 68.867 212.792 68.0711 213.193C67.2753 213.594 66.5726 214.157 66.0086 214.847C65.4447 215.537 65.032 216.338 64.7974 217.197C64.5629 218.057 64.5117 218.956 64.6471 219.837C64.9009 220.974 65.2216 222.094 65.6075 223.193C67.2095 228.199 68.4098 232.476 66.8617 234.102C66.5109 234.416 66.0787 234.626 65.6144 234.706C65.1501 234.787 64.6726 234.735 64.2364 234.557C62.7699 234.165 61.774 234.247 61.2779 234.802C60.5077 235.661 60.7428 237.836 61.94 240.927C62.3157 241.904 62.4168 242.966 62.2324 243.996C62.0481 245.027 61.5853 245.988 60.8941 246.774C60.3737 247.388 59.7265 247.882 58.997 248.221C58.2674 248.561 57.473 248.738 56.6683 248.741Z"
                  fill="#2F2E41"
                />
                <path
                  d="M141 593.941H1C0.734784 593.941 0.480414 593.836 0.292877 593.648C0.105341 593.46 0 593.206 0 592.941C0 592.676 0.105341 592.421 0.292877 592.234C0.480414 592.046 0.734784 591.941 1 591.941H141C141.265 591.941 141.52 592.046 141.707 592.234C141.895 592.421 142 592.676 142 592.941C142 593.206 141.895 593.46 141.707 593.648C141.52 593.836 141.265 593.941 141 593.941Z"
                  fill="#CCCCCC"
                />
                <path
                  d="M605 594.004H465C464.735 594.004 464.48 593.898 464.293 593.711C464.105 593.523 464 593.269 464 593.004C464 592.738 464.105 592.484 464.293 592.297C464.48 592.109 464.735 592.004 465 592.004H605C605.265 592.004 605.52 592.109 605.707 592.297C605.895 592.484 606 592.738 606 593.004C606 593.269 605.895 593.523 605.707 593.711C605.52 593.898 605.265 594.004 605 594.004Z"
                  fill="#CCCCCC"
                />
                <path
                  d="M428.713 424H186.713C177.433 423.989 168.537 420.299 161.976 413.737C155.414 407.176 151.723 398.279 151.713 389V35C151.723 25.7207 155.414 16.8244 161.976 10.2629C168.537 3.7014 177.433 0.0105313 186.713 0H428.713C437.992 0.0105313 446.888 3.7014 453.45 10.2629C460.011 16.8244 463.702 25.7207 463.713 35V389C463.702 398.279 460.011 407.176 453.45 413.737C446.888 420.299 437.992 423.989 428.713 424V424Z"
                  fill="white"
                />
                <path
                  d="M390.713 281.029H224.713C207.756 280.948 207.685 255.118 224.714 255.029L390.713 255.029C407.658 255.109 407.75 280.941 390.713 281.029Z"
                  fill="#CCCCCC"
                />
                <path
                  d="M390.713 72.9705H224.713C207.756 72.8888 207.685 47.0589 224.714 46.9705L390.713 46.9705C407.658 47.0498 407.75 72.8817 390.713 72.9705Z"
                  fill="#CCCCCC"
                />
                <path
                  d="M390.713 329.029H224.713C207.756 328.948 207.685 303.118 224.714 303.029L390.713 303.029C407.658 303.109 407.75 328.941 390.713 329.029Z"
                  fill="#CCCCCC"
                />
                <path
                  d="M390.713 377.029H224.713C207.756 376.948 207.685 351.118 224.714 351.029L390.713 351.029C407.658 351.109 407.75 376.941 390.713 377.029Z"
                  fill="#CCCCCC"
                />
                <path
                  d="M387.713 223.829H227.713C223.338 223.824 219.144 222.084 216.051 218.991C212.958 215.898 211.218 211.704 211.213 207.329V117.73C211.218 113.355 212.958 109.161 216.051 106.068C219.144 102.975 223.338 101.235 227.713 101.23H387.713C392.087 101.235 396.281 102.975 399.374 106.068C402.468 109.161 404.208 113.355 404.213 117.73V207.329C404.208 211.704 402.468 215.898 399.374 218.991C396.281 222.084 392.087 223.824 387.713 223.829V223.829Z"
                  fill="#6C63FF"
                />
                <path
                  d="M428.713 424H186.713C177.433 423.989 168.537 420.299 161.976 413.737C155.414 407.176 151.723 398.279 151.713 389V35C151.723 25.7207 155.414 16.8244 161.976 10.2629C168.537 3.7014 177.433 0.0105313 186.713 0H428.713C437.992 0.0105313 446.888 3.7014 453.45 10.2629C460.011 16.8244 463.702 25.7207 463.713 35V389C463.702 398.279 460.011 407.176 453.45 413.737C446.888 420.299 437.992 423.989 428.713 424V424ZM186.713 6C179.024 6.00869 171.653 9.06684 166.216 14.5035C160.779 19.9402 157.721 27.3114 157.713 35V389C157.721 396.689 160.779 404.06 166.216 409.497C171.653 414.933 179.024 417.991 186.713 418H428.713C436.401 417.991 443.772 414.933 449.209 409.497C454.646 404.06 457.704 396.689 457.713 389V35C457.704 27.3114 454.646 19.9402 449.209 14.5035C443.772 9.0668 436.401 6.00867 428.713 6H186.713Z"
                  fill="#E6E6E6"
                />
                <path
                  d="M280.924 163.568L296.871 156.834L298.092 160.497L285.697 165.455L298.092 170.413L296.871 174.076L280.924 167.342V163.568ZM303.618 182.845H299.03L311.536 147.029H316.05L303.618 182.845ZM334.514 167.342L318.567 174.076L317.346 170.413L329.741 165.455L317.346 160.497L318.567 156.834L334.514 163.568V167.342Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_705_220">
                  <rect width="631.483" height="593.941" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </main>
    </>
  );
};

export default Home;
