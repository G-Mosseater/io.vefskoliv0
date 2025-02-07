const hourglassIconLabel = "Hourglass icon";
export const Hourglass = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 17 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label={hourglassIconLabel}
  >
    <path
      d="M16.8522 20.5898C16.412 16.7303 14.6444 15.1306 13.3534 13.9641C12.4608 13.1544 12.0317 12.7333 12.0317 12C12.0317 11.2767 12.4593 10.8636 13.3494 10.0705C14.6555 8.90748 16.4442 7.3143 16.8532 3.40262C16.8859 3.07399 16.849 2.74217 16.7449 2.42865C16.6407 2.11513 16.4717 1.82688 16.2487 1.58256C16.0106 1.32161 15.7203 1.11326 15.3964 0.97096C15.0725 0.828657 14.7223 0.755553 14.3684 0.75636L3.24746 0.75636C2.89302 0.755257 2.54229 0.828213 2.21789 0.970521C1.89349 1.11283 1.60263 1.32133 1.36409 1.58256C1.14178 1.82722 0.973398 2.11559 0.869807 2.42908C0.766216 2.74257 0.729715 3.07421 0.762657 3.40262C1.17016 7.30175 2.95229 8.88338 4.25337 10.0379C5.15199 10.8355 5.58418 11.2516 5.58418 12C5.58418 12.7579 5.15099 13.1826 4.24934 13.9952C2.96488 15.1547 1.20189 16.7424 0.763665 20.5898C0.728082 20.9169 0.762182 21.2479 0.863737 21.561C0.965292 21.8741 1.13201 22.1623 1.35301 22.4068C1.59205 22.6711 1.88432 22.8822 2.21074 23.0264C2.53716 23.1706 2.89041 23.2446 3.24746 23.2436H14.3684C14.7254 23.2446 15.0787 23.1706 15.4051 23.0264C15.7315 22.8822 16.0238 22.6711 16.2629 22.4068C16.4838 22.1623 16.6506 21.8741 16.7521 21.561C16.8537 21.2479 16.8878 20.9169 16.8522 20.5898ZM13.2053 20.8342H4.43219C3.6464 20.8342 3.42477 19.9307 3.97583 19.3706C5.30966 18.0233 8.00199 17.0586 8.00199 15.5136V10.3937C8.00199 9.39738 6.08789 8.63693 4.90367 7.02066C4.70823 6.75412 4.72787 6.37816 5.22453 6.37816H12.414C12.8376 6.37816 12.9288 6.75111 12.7364 7.01815C11.5693 8.63693 9.61387 9.39236 9.61387 10.3937V15.5136C9.61387 17.046 12.42 17.8727 13.6637 19.3721C14.1649 19.9764 13.9896 20.8342 13.2053 20.8342Z"
      fill="var(--error-success-100)"
    />
  </svg>
);

const hatIconLabel = "Hat icon";
export const HatIcon = ({ color }: { color?: string }) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 25 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label={hatIconLabel}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11.9926 0.0755887C12.235 -0.0251962 12.5054 -0.0251962 12.7479 0.0755887L23.4447 4.52265C23.8312 4.68335 24.0847 5.07279 24.0847 5.50588C24.0847 5.93898 23.8312 6.32841 23.4447 6.48912L12.7479 10.9362C12.5054 11.037 12.235 11.037 11.9926 10.9362L1.29582 6.48912C0.909274 6.32841 0.655762 5.93898 0.655762 5.50588C0.655762 5.07279 0.909274 4.68335 1.29582 4.52265L11.9926 0.0755887ZM4.41609 5.50588L12.3702 8.81272L20.3244 5.50588L12.3702 2.19905L4.41609 5.50588Z"
      fill={color ?? "var(--error-success-100)"}
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.0671 4.50537C23.6292 4.50537 24.0848 4.97942 24.0848 5.56419V10.447C24.0848 11.0317 23.6292 11.5058 23.0671 11.5058C22.5051 11.5058 22.0494 11.0317 22.0494 10.447V5.56419C22.0494 4.97942 22.5051 4.50537 23.0671 4.50537ZM6.53599 6.78978C7.09803 6.78978 7.55366 7.26383 7.55366 7.84861V13.9554C7.57073 13.9699 7.58846 13.9848 7.60687 14.0001C7.85783 14.2089 8.22825 14.4908 8.69473 14.7731C9.63558 15.3424 10.9161 15.8824 12.3703 15.8824C13.8249 15.8824 15.1055 15.3424 16.0464 14.7731C16.5129 14.4908 16.8833 14.2089 17.1343 14.0001C17.1527 13.9848 17.1704 13.9699 17.1875 13.9554V7.84861C17.1875 7.26383 17.6431 6.78978 18.2052 6.78978C18.7672 6.78978 19.2229 7.26383 19.2229 7.84861V14.4355C19.2229 14.7193 19.1134 14.9912 18.919 15.1903L18.2052 14.4355C18.919 15.1903 18.9187 15.1905 18.9184 15.1908L18.9165 15.1927L18.9132 15.1961L18.9038 15.2056C18.8963 15.2131 18.8864 15.2229 18.8741 15.2349C18.8496 15.259 18.8155 15.2917 18.7723 15.332C18.6859 15.4125 18.5626 15.5232 18.4054 15.654C18.0916 15.9151 17.6384 16.2595 17.0696 16.6037C15.9399 17.2872 14.3031 18.0001 12.3703 18.0001C10.4378 18.0001 8.80108 17.2872 7.67146 16.6037C7.10271 16.2595 6.64958 15.9151 6.33579 15.654C6.17854 15.5232 6.05525 15.4125 5.96887 15.332C5.92566 15.2917 5.89159 15.259 5.86705 15.2349C5.85477 15.2229 5.84487 15.2131 5.83738 15.2056L5.82797 15.1961L5.82463 15.1927L5.82273 15.1908C5.82247 15.1905 5.82221 15.1903 6.53599 14.4355L5.82221 15.1903C5.6278 14.9912 5.51831 14.7193 5.51831 14.4355V7.84861C5.51831 7.26383 5.97394 6.78978 6.53599 6.78978Z"
      fill={color ?? "var(--error-success-100)"}
    />
  </svg>
);

const greenTickLabel = "Green tick icon";

export const GreenTick = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 22 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label={greenTickLabel}
  >
    <path
      d="M7.12572 18L0 10.8069L3.24731 7.52896L7.12572 11.4556L18.4626 0L21.7099 3.27799L7.12572 18Z"
      fill="var(--error-success-100)"
    />
  </svg>
);

const notificationIconLabel = "Notification icon";
export const NotificationIcon = ({ color }: { color?: string }) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 19 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label={notificationIconLabel}
  >
    <rect x="0.5" width="18" height="18" rx="9" fill={color ?? "#D82823"} />
    <path
      d="M9.44404 2.44287C9.94558 2.44287 10.349 2.85531 10.338 3.35673L10.1685 11.0615C10.1598 11.4554 9.83804 11.7702 9.44404 11.7702C9.05003 11.7702 8.72823 11.4554 8.71956 11.0615L8.55006 3.35673C8.53903 2.85531 8.94249 2.44287 9.44404 2.44287ZM9.51865 15.5572C9.19531 15.5572 8.9217 15.4452 8.69785 15.2214C8.47399 14.9975 8.36206 14.7239 8.36206 14.4006C8.36206 14.0772 8.47399 13.8036 8.69785 13.5798C8.9217 13.3559 9.19531 13.244 9.51865 13.244C9.82957 13.244 10.0907 13.3559 10.3022 13.5798C10.526 13.8036 10.6379 14.0772 10.6379 14.4006C10.6379 14.7239 10.526 14.9975 10.3022 15.2214C10.0907 15.4452 9.82957 15.5572 9.51865 15.5572Z"
      fill="white"
    />
  </svg>
);

const purpleStarLabel = "Purple star icon";
export const PurpleStar = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 19 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label={purpleStarLabel}
  >
    <path
      d="M4.00096 17.7714L5.48829 11.2852L0.5 6.92253L7.09004 6.34546L9.65283 0.228516L12.2156 6.34546L18.8057 6.92253L13.8174 11.2852L15.3047 17.7714L9.65283 14.3321L4.00096 17.7714Z"
      fill="var(--theme-module3-100)"
    />
  </svg>
);

const redCrossLabel = "Red cross icon";
export const RedCross = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label={redCrossLabel}
  >
    <path
      d="M15.6959 0.405762L9.24924 6.85144L2.80413 0.405762L0.655762 2.55432L7.10087 9L0.655762 15.4457L2.80413 17.5942L9.24924 11.1486L15.6959 17.5942L17.8442 15.4457L11.3991 9L17.8442 2.55432L15.6959 0.405762Z"
      fill="var(--error-failure-100)"
    />
  </svg>
);

const bellIconLabel = "Bell icon";
export const Bell = ({ color }: { color?: string }) => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 22 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label={bellIconLabel}
  >
    <path
      d="M19.1881 16.4137V17.3629H1.91883V16.4137L3.83764 14.5152V8.81965C3.83764 5.87696 5.78523 3.2855 8.63467 2.45016V2.17487C8.63467 1.67136 8.83683 1.18847 9.19667 0.832427C9.55652 0.476388 10.0446 0.276367 10.5535 0.276367C11.0624 0.276367 11.5504 0.476388 11.9103 0.832427C12.2701 1.18847 12.4723 1.67136 12.4723 2.17487V2.45016C15.3217 3.2855 17.2693 5.87696 17.2693 8.81965V14.5152L19.1881 16.4137ZM12.4723 18.3122C12.4723 18.8157 12.2701 19.2986 11.9103 19.6546C11.5504 20.0107 11.0624 20.2107 10.5535 20.2107C10.0446 20.2107 9.55652 20.0107 9.19667 19.6546C8.83683 19.2986 8.63467 18.8157 8.63467 18.3122M17.9889 1.40598L16.6265 2.75392C17.438 3.54694 18.0822 4.49146 18.5219 5.53269C18.9617 6.57393 19.1881 7.69117 19.1881 8.81965H21.1069C21.1069 6.03834 19.994 3.36144 17.9889 1.40598ZM1.8225e-05 8.81965H1.91883C1.91883 6.54144 2.83986 4.35816 4.48044 2.75392L3.11809 1.40598C2.12787 2.37571 1.34229 3.53047 0.807015 4.80318C0.271736 6.07588 -0.00257565 7.44115 1.8225e-05 8.81965Z"
      fill={color ?? "var(--error-warning-100)"}
    />
  </svg>
);

const exitIconLabel = "Exit icon";
export const ExitIcon = ({ color }: { color?: string }) => (
  <svg
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill={color ?? "none"}
    xmlns="http://www.w3.org/2000/svg"
    aria-label={exitIconLabel}
  >
    <path
      d="M47.2967 43.9009C47.5197 44.1239 47.6965 44.3886 47.8172 44.6799C47.9379 44.9712 48 45.2835 48 45.5988C48 45.9141 47.9379 46.2264 47.8172 46.5177C47.6965 46.809 47.5197 47.0737 47.2967 47.2967C47.0737 47.5197 46.809 47.6965 46.5177 47.8172C46.2264 47.9379 45.9141 48 45.5988 48C45.2835 48 44.9712 47.9379 44.6799 47.8172C44.3886 47.6965 44.1239 47.5197 43.9009 47.2967L24 27.3928L4.09911 47.2967C3.64879 47.747 3.03804 48 2.4012 48C1.76436 48 1.15361 47.747 0.703295 47.2967C0.252983 46.8464 1.25536e-08 46.2356 0 45.5988C-1.25536e-08 44.962 0.252983 44.3512 0.703295 43.9009L20.6072 24L0.703295 4.09911C0.252983 3.64879 -4.74481e-09 3.03804 0 2.4012C4.74481e-09 1.76436 0.252983 1.15361 0.703295 0.703295C1.15361 0.252983 1.76436 4.74481e-09 2.4012 0C3.03804 -4.74481e-09 3.64879 0.252983 4.09911 0.703295L24 20.6072L43.9009 0.703295C44.3512 0.252983 44.962 -1.25536e-08 45.5988 0C46.2356 1.25536e-08 46.8464 0.252983 47.2967 0.703295C47.747 1.15361 48 1.76436 48 2.4012C48 3.03804 47.747 3.64879 47.2967 4.09911L27.3928 24L47.2967 43.9009Z"
      fill="white"
    />
  </svg>
);

const logOutIconLabel = "Log out icon";
export const LogoutIcon = () => (
  <svg
    width="17"
    height="18"
    viewBox="0 0 17 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label={logOutIconLabel}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.3396 0H1.87993C1.38134 0 0.903173 0.189642 0.550618 0.527208C0.198063 0.864773 0 1.32261 0 1.8V16.2C0 16.6774 0.198063 17.1352 0.550618 17.4728C0.903173 17.8104 1.38134 18 1.87993 18H10.3396C10.8382 18 11.3164 17.8104 11.6689 17.4728C12.0215 17.1352 12.2195 16.6774 12.2195 16.2V15.3C12.2195 15.0613 12.1205 14.8324 11.9442 14.6636C11.7679 14.4948 11.5289 14.4 11.2796 14.4C11.0303 14.4 10.7912 14.4948 10.6149 14.6636C10.4386 14.8324 10.3396 15.0613 10.3396 15.3V16.2H1.87993V1.8H10.3396V2.7C10.3396 2.93869 10.4386 3.16761 10.6149 3.3364C10.7912 3.50518 11.0303 3.6 11.2796 3.6C11.5289 3.6 11.7679 3.50518 11.9442 3.3364C12.1205 3.16761 12.2195 2.93869 12.2195 2.7V1.8C12.2195 1.32261 12.0215 0.864773 11.6689 0.527208C11.3164 0.189642 10.8382 0 10.3396 0ZM13.3522 12.8656C12.9856 13.2166 12.3934 13.2166 12.0269 12.8656C11.8511 12.6972 11.7524 12.4689 11.7522 12.2308C11.752 11.9928 11.8505 11.7644 12.0259 11.5957L13.7893 9.90009H5.6398C5.39051 9.90009 5.15142 9.80527 4.97515 9.63648C4.79887 9.4677 4.69984 9.23878 4.69984 9.00009C4.69984 8.76139 4.79887 8.53247 4.97515 8.36369C5.15142 8.19491 5.39051 8.10009 5.6398 8.10009H13.7893L12.0259 6.40449C11.8644 6.23341 11.7778 6.00945 11.7838 5.77892C11.7899 5.54839 11.8883 5.32891 12.0586 5.16585C12.2289 5.00279 12.4581 4.90862 12.6989 4.9028C12.9396 4.89698 13.1735 4.97996 13.3522 5.13459L16.7248 8.36379C16.901 8.53256 17 8.76144 17 9.00009C17 9.23873 16.901 9.46761 16.7248 9.63639L13.3522 12.8656Z"
      fill="#666666"
    />
  </svg>
);

export const Arrow = ({
  color = "var(--theme-module3-100)",
  direction = "left",
  width = 24,
  height = "auto",
}: {
  color?: string;
  direction?: "up" | "down" | "left" | "right";
  width?: number;
  height?: number | "auto";
}) => {
  const directions: { [key: string]: number } = {
    up: -90,
    down: 90,
    right: 180,
    left: 0,
  };

  const rotation = directions[direction];

  return (
    <svg
      width={width + ""}
      height={height + ""}
      viewBox="0 0 16 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ transform: `rotate(${rotation}deg)` }}
    >
      <path
        d="M15.4457 23.5257C15.8152 23.2095 16 22.8351 16 22.4025C16 21.9708 15.8152 21.5968 15.4457 21.2806L4.61894 12.0158L15.4827 2.71937C15.8276 2.42424 16 2.05534 16 1.61265C16 1.16996 15.8152 0.790514 15.4457 0.474308C15.0762 0.158103 14.6387 0 14.1332 0C13.6287 0 13.1917 0.158103 12.8222 0.474308L0.406466 11.1304C0.25866 11.2569 0.153719 11.3939 0.0916405 11.5415C0.0305471 11.6891 9.53674e-07 11.8472 9.53674e-07 12.0158C9.53674e-07 12.1845 0.0305471 12.3426 0.0916405 12.4901C0.153719 12.6377 0.25866 12.7747 0.406466 12.9012L12.8591 23.5573C13.204 23.8524 13.6287 24 14.1332 24C14.6387 24 15.0762 23.8419 15.4457 23.5257Z"
        fill={color}
      />
    </svg>
  );
};

const defaultUserIconLabel = "Default user icon";
export const DefaultUserIcon = ({
  height = 100,
  width = 100,
}: {
  height?: number | "auto";
  width?: number | "auto";
}) => (
  <svg
    width={"" + width}
    height={"" + height}
    viewBox="0 0 143 143"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    aria-label={defaultUserIconLabel}
  >
    <path
      d="M71.1685 0.453613C80.5836 0.453613 89.6132 4.19378 96.2707 10.8513C102.928 17.5089 106.668 26.5384 106.668 35.9536C106.668 45.3688 102.928 54.3984 96.2707 61.0559C89.6132 67.7134 80.5836 71.4536 71.1685 71.4536C61.7533 71.4536 52.7237 67.7134 46.0662 61.0559C39.4086 54.3984 35.6685 45.3688 35.6685 35.9536C35.6685 26.5384 39.4086 17.5089 46.0662 10.8513C52.7237 4.19378 61.7533 0.453613 71.1685 0.453613ZM71.1685 142.454C71.1685 142.454 142.168 142.454 142.168 124.704C142.168 103.404 107.556 80.3286 71.1685 80.3286C34.781 80.3286 0.168457 103.404 0.168457 124.704C0.168457 142.454 71.1685 142.454 71.1685 142.454Z"
      fill="black"
    />
  </svg>
);

export const exportedForTesting = {
  hourglassIconLabel,
  hatIconLabel,
  greenTickLabel,
  notificationIconLabel,
  purpleStarLabel,
  redCrossLabel,
  bellIconLabel,
  exitIconLabel,
  logOutIconLabel,
  defaultUserIconLabel,
};
