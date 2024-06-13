import {
  Home,
  ClipboardList,
  LayoutGrid,
  Banknote,
  Users,
  Zap,
  Wallet,
  ChevronDown,
  Search,
  HelpCircle,
  MessageSquareMore,
  Download,
  ArrowUpDown,
  Info,
  type XIcon as LucideIcon,
  ChevronLeft,
  ChevronRight,
  Menu,
  FolderClosed,
  Box,
  Bug,
  Store,
  Settings,
  PlayCircle,
  Trash2,
  PlusIcon,
  PlusCircle,
  CheckCircle2Icon,
  XCircle,
  Loader,
  Copy,
  Check,
  RefreshCwIcon,
  Folder,
  Play,
  SquarePlus,
  LucideProps,
  LucideX
} from "lucide-react";

export type Icon = typeof LucideIcon;

export const Icons = {
  home: Home,
  tasks: ClipboardList,
  boxes: LayoutGrid,
  money: Banknote,
  users: Users,
  plugins: Zap,
  wallet: Wallet,
  arrowDown: ChevronDown,
  arrowLeft: ChevronLeft,
  arrowRight: ChevronRight,
  search: Search,
  helpCircle: HelpCircle,
  download: Download,
  sort: ArrowUpDown,
  chat: MessageSquareMore,
  info: Info,
  menu: Menu,
  projects: FolderClosed,
  deploy: Box,
  test: Bug,
  browser: Store,
  settings: Settings,
  executeCode: PlayCircle,
  delete: Trash2,
  add: PlusIcon,
  addCircle: PlusCircle,
  codeSuccess: CheckCircle2Icon,
  codeError: XCircle,
  codeRunning: Loader,
  copy: Copy,
  tick: Check,
  refresh: RefreshCwIcon,
  folder: Folder,
  play: Play,
  sqPlus: SquarePlus,
  close: LucideX,

  golfFlag: ({ ...props }: LucideProps) => (
    <svg
      width="36"
      height="40"
      viewBox="0 0 36 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M35.0769 5.67823C34.9214 7.66835 33.5532 9.82949 31.4232 11.4465C29.5186 12.8924 25.3906 15.1235 19.086 13.8797C13.5821 12.7913 9.86613 15.0536 8.03149 20.6041L13.3955 38.4996C13.4813 38.7965 13.447 39.1152 13.3002 39.3871C13.1533 39.6589 12.9056 39.8623 12.6103 39.9534C12.5016 39.9841 12.3891 39.9998 12.276 40C12.0249 39.9998 11.7805 39.9188 11.5789 39.769C11.3773 39.6192 11.2293 39.4086 11.1566 39.1682L5.76151 21.1716C5.69579 21.0428 5.65366 20.9033 5.63713 20.7596L1.43922 6.75103C1.34457 6.58752 1.2912 6.40341 1.28375 6.21463L0.451938 3.44712C0.406475 3.30018 0.390569 3.14569 0.40514 2.99257C0.41971 2.83944 0.464468 2.69073 0.53683 2.555C0.609191 2.41927 0.707722 2.29922 0.826733 2.20178C0.945745 2.10434 1.08288 2.03144 1.23022 1.98729C1.37756 1.94314 1.53219 1.92861 1.68517 1.94455C1.83816 1.96048 1.98647 2.00657 2.12155 2.08014C2.25662 2.1537 2.37579 2.2533 2.47217 2.37318C2.56854 2.49306 2.64021 2.63083 2.68305 2.77856L2.83075 3.28387C3.83996 2.14935 5.11757 1.28603 6.54668 0.772896C10.2393 -0.610858 15.1446 -0.113328 19.3425 2.07891C21.9235 3.4238 28.4846 6.36233 33.5066 4.48882C33.6907 4.42179 33.8886 4.40195 34.0824 4.43114C34.2761 4.46033 34.4594 4.5376 34.6156 4.65589C34.7718 4.77419 34.8959 4.92974 34.9764 5.10833C35.057 5.28692 35.0915 5.48285 35.0769 5.67823Z"
        fill="white"
      />
    </svg>
  ),

  smiley: ({ ...props }: LucideProps) => (
    <svg
      width="40"
      height="41"
      viewBox="0 0 40 41"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M39.9482 21.64C40.1546 18.7783 39.7429 15.9056 38.7412 13.2171C37.7395 10.5285 36.1712 8.08694 34.1426 6.05813C32.1141 4.02932 29.6729 2.46075 26.9847 1.4589C24.2965 0.457046 21.4242 0.0453597 18.5629 0.251786C13.8649 0.622897 9.4452 2.62787 6.0713 5.91856C2.6974 9.20925 0.582364 13.5778 0.0934705 18.2657C-0.178519 21.0525 0.144724 23.8653 1.04178 26.5177C1.30767 27.2691 1.33916 28.0836 1.13209 28.8533L0.293454 31.8148C0.0395849 32.6707 -0.0387071 33.5692 0.0632815 34.4562C0.16527 35.3431 0.445436 36.2003 0.886953 36.9763C1.60967 38.2132 2.72343 39.1743 4.05265 39.7082C5.38187 40.2421 6.85094 40.3183 8.22827 39.9249L11.1635 39.0861C11.5577 38.9718 11.9659 38.9131 12.3763 38.9119C12.7889 38.9107 13.1988 38.9783 13.5891 39.1119C16.2684 40.0376 19.1147 40.3786 21.9368 40.112C26.624 39.623 30.9919 37.5077 34.2822 34.1333C37.5724 30.759 39.5771 26.3387 39.9482 21.64ZM20.0015 36.3311C18.2454 36.3342 16.5012 36.0442 14.8406 35.473C13.3058 34.9611 11.651 34.9318 10.0991 35.3891L7.16384 36.2279C6.61045 36.3874 6.0196 36.3572 5.48535 36.1421C4.9511 35.927 4.50417 35.5393 4.2157 35.0407C4.04022 34.7167 3.93154 34.3607 3.89608 33.9939C3.86062 33.627 3.89911 33.2568 4.00927 32.9051L4.85436 29.9437C5.28247 28.4192 5.23294 26.8002 4.71244 25.3047C3.98931 23.1688 3.72766 20.9038 3.94476 18.6592C4.33427 14.8764 6.03728 11.3497 8.75757 8.69273C11.4779 6.03571 15.0433 4.41643 18.8338 4.11651C19.2209 4.07134 19.6144 4.07134 20.0015 4.07134C23.4444 4.04898 26.8015 5.1448 29.5684 7.19409C32.194 9.13187 34.1701 11.8206 35.2357 14.9052C36.3013 17.9898 36.4064 21.3251 35.5369 24.4706C34.6675 27.6161 32.8645 30.4239 30.366 32.5231C27.8676 34.6222 24.7912 35.9141 21.5433 36.2279C21.0229 36.2967 20.509 36.3311 20.0015 36.3311Z"
        fill="white"
      />
      <path
        d="M13.5508 18.2655C14.6198 18.2655 15.4864 17.3989 15.4864 16.3299C15.4864 15.2609 14.6198 14.3943 13.5508 14.3943C12.4818 14.3943 11.6152 15.2609 11.6152 16.3299C11.6152 17.3989 12.4818 18.2655 13.5508 18.2655Z"
        fill="white"
      />
      <path
        d="M26.4527 18.2655C27.5217 18.2655 28.3883 17.3989 28.3883 16.3299C28.3883 15.2609 27.5217 14.3943 26.4527 14.3943C25.3837 14.3943 24.5171 15.2609 24.5171 16.3299C24.5171 17.3989 25.3837 18.2655 26.4527 18.2655Z"
        fill="white"
      />
      <path
        d="M19.2276 29.1695C19.8766 29.2824 20.5425 29.252 21.1785 29.0803C21.8144 28.9086 22.4052 28.5999 22.9092 28.1757C23.4133 27.7515 23.8184 27.2221 24.0962 26.6248C24.3741 26.0274 24.5178 25.3765 24.5175 24.7176C24.5168 24.3962 24.48 24.0759 24.4078 23.7627C24.3372 23.4764 24.1706 23.223 23.9359 23.0445C23.7011 22.8661 23.4124 22.7735 23.1176 22.782H16.8536C16.5653 22.7805 16.2847 22.8756 16.0566 23.0522C15.8286 23.2287 15.6663 23.4766 15.5957 23.7563C15.4346 24.4567 15.4501 25.1861 15.6408 25.879C15.8663 26.7106 16.323 27.4612 16.9579 28.0436C17.5928 28.626 18.3798 29.0164 19.2276 29.1695Z"
        fill="white"
      />
    </svg>
  ),

  share: ({ ...props }: LucideProps) => (
    <svg width="25" height="14" viewBox="0 0 25 14" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path id="Vector" d="M24.101 5.31592L16.5306 0.162893C15.9177 -0.254317 15.0815 0.178202 15.0815 0.912473V3.05968C8.22441 3.05968 2.42853 7.52401 0.512348 13.6643C0.431497 13.9233 0.767038 14.116 0.955972 13.9191C3.73482 11.0225 7.669 9.21444 12.0324 9.21444H15.0815V11.2185C15.0815 11.9528 15.9177 12.3853 16.5306 11.9681L24.101 6.81508C24.633 6.45295 24.633 5.67803 24.101 5.31592Z" />
    </svg>),

  modules: ({ ...props }: LucideProps) => (
    <svg width="21" height="22" viewBox="0 0 21 22" xmlns="http://www.w3.org/2000/svg" {...props}>
      <g id="Frame 158">
        <path id="Vector" d="M4.76368 5.95208L0.282542 2.97195C0.226319 2.93449 0.155327 2.93212 0.0967216 2.96247C0.0362108 2.99423 0 3.05539 0 3.12271V8.54061C0 8.60082 0.0309695 8.65676 0.0805217 8.689L4.56261 11.671C4.59215 11.6905 4.62884 11.7014 4.66314 11.7014C4.69269 11.7014 4.72223 11.6947 4.74891 11.68C4.80799 11.6478 4.84563 11.5866 4.84563 11.5203V6.10284C4.8442 6.04263 4.81466 5.98574 4.76368 5.95208Z" />
        <path id="Vector_2" d="M10.1499 16.2498L5.66877 13.2697C5.61255 13.2327 5.54156 13.2284 5.48295 13.2606C5.42387 13.291 5.38623 13.3517 5.38623 13.419V18.8383C5.38623 18.8985 5.4172 18.9545 5.46675 18.9876L9.94884 21.9692C9.97838 21.9886 10.0151 21.9991 10.0494 21.9991C10.0789 21.9991 10.1085 21.991 10.1351 21.9777C10.1942 21.946 10.2304 21.8848 10.2304 21.818V16.4005C10.2304 16.3408 10.2009 16.283 10.1499 16.2498Z" />
        <path id="Vector_3" d="M20.9075 3.35121C20.8499 3.31944 20.7803 3.32086 20.7241 3.35405L16.2415 6.06395C16.1881 6.09666 16.1548 6.15545 16.1548 6.21803V11.9085C16.1548 11.9749 16.1919 12.0361 16.251 12.0659C16.2777 12.0806 16.3073 12.0882 16.3368 12.0882C16.3716 12.0882 16.4078 12.0783 16.4369 12.0583L20.9194 9.07679C20.969 9.0436 20.9999 8.98766 20.9999 8.9265V3.5086C20.9999 3.44271 20.9647 3.38297 20.9075 3.35121Z" />
        <path id="Vector_4" d="M9.83125 2.66993C9.83268 2.60498 9.79885 2.54335 9.74168 2.51016L5.53594 0.0254557C5.484 -0.00678243 5.41825 -0.00773058 5.36298 0.0188184L0.672202 2.33664C0.61312 2.36651 0.574527 2.4253 0.571668 2.49025C0.56738 2.55378 0.599779 2.61683 0.654572 2.65096L4.8465 5.30492C4.87604 5.32341 4.90939 5.33337 4.94417 5.33337C4.97228 5.33337 5.00182 5.32625 5.02851 5.31203L9.73453 2.82638C9.79218 2.79461 9.82982 2.73441 9.83125 2.66993Z" />
        <path id="Vector_5" d="M20.5185 2.87097C20.517 2.80554 20.4813 2.74486 20.4222 2.71499L15.993 0.363506C15.9396 0.33506 15.8753 0.33506 15.822 0.364928L11.4356 2.72874C11.378 2.76003 11.3408 2.82024 11.3408 2.88756C11.3408 2.95251 11.3766 3.01414 11.4342 3.04591L15.8877 5.51828C15.9158 5.53298 15.9463 5.54104 15.9759 5.54104C16.0078 5.54104 16.0387 5.53298 16.0669 5.51686L20.4275 3.03121C20.4856 2.99755 20.5199 2.93734 20.5185 2.87097Z" />
        <path id="Vector_6" d="M15.517 13.2606C15.4584 13.2284 15.3874 13.2322 15.3307 13.2696L10.85 16.2498C10.799 16.2834 10.7681 16.3408 10.7681 16.4005V21.8184C10.7681 21.8853 10.8057 21.9464 10.8643 21.9782C10.8915 21.9915 10.9205 22 10.9501 22C10.9853 22 11.0211 21.9886 11.0506 21.9697L15.5332 18.9881C15.5827 18.9549 15.6137 18.899 15.6137 18.8388V13.4199C15.6137 13.3526 15.5761 13.2914 15.517 13.2606Z" />
        <path id="Vector_7" d="M15.1556 12.787C15.157 12.7221 15.1232 12.6604 15.066 12.6273L10.6983 9.83108C10.6463 9.79979 10.5806 9.79837 10.5258 9.82491L5.78403 12.5727C5.72542 12.6026 5.68635 12.6614 5.68397 12.7263C5.67968 12.7903 5.71208 12.8529 5.76688 12.8875L10.3438 15.87C10.3733 15.8885 10.4062 15.898 10.4415 15.898C10.4696 15.898 10.4991 15.8914 10.5258 15.8767L15.0589 12.943C15.1165 12.9122 15.1542 12.852 15.1556 12.787Z" />
        <path id="Vector_8" d="M10.2752 3.35121C10.2175 3.31944 10.148 3.32086 10.0918 3.35405L5.47197 5.82738C5.41861 5.86009 5.38525 5.9184 5.38525 5.98146V11.672C5.38525 11.7383 5.42242 11.7995 5.4815 11.8298C5.50818 11.8441 5.53772 11.8516 5.56726 11.8516C5.60204 11.8516 5.63778 11.8417 5.66732 11.8218L10.3786 9.27069C10.4281 9.23751 10.4591 9.18156 10.4591 9.11993L10.3681 3.5086C10.3681 3.44271 10.3333 3.38297 10.2752 3.35121Z" />
        <path id="Vector_9" d="M15.5684 5.9231L11.0882 3.31655C11.032 3.27958 10.9615 3.27483 10.9024 3.30707C10.8433 3.33789 10.8062 3.39857 10.8062 3.46542L10.8562 9.08528C10.8562 9.14549 10.8872 9.20096 10.9362 9.23414L15.4231 11.9587C15.4526 11.9782 15.4893 11.9891 15.5236 11.9891C15.5532 11.9891 15.5827 11.9805 15.6094 11.9677C15.6685 11.9355 15.7047 11.8748 15.7047 11.8075V6.19001C15.7047 6.1298 15.6194 5.95581 15.5684 5.9231Z" />
      </g>
    </svg>
  ),

  blueprints: ({ ...props }: LucideProps) => (
    <svg width="24" height="16" viewBox="0 0 24 16" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path id="Vector" fillRule="evenodd" clipRule="evenodd" d="M4.77395 12.1357C4.82019 12.2211 4.83636 12.2791 4.83636 12.2791H5.82127C6.01685 12.2791 6.18182 12.1119 6.18182 11.9058V2.60465C6.18182 2.36415 6.15952 2.12897 6.11692 1.90117C6.14581 1.87436 6.16762 1.86047 6.18182 1.86047H23.2727C23.6744 1.86047 24 2.19365 24 2.60465V15.2558C24 15.6668 23.6744 16 23.2727 16H2.54545C1.13964 16 0 14.8339 0 13.3953C0 11.9568 1.13964 10.7907 2.54545 10.7907C3.50473 10.7907 4.34006 11.3337 4.77395 12.1357ZM5.09091 2.60465V10.7381C4.435 10.0801 3.53653 9.67442 2.54545 9.67442C1.55438 9.67442 0.655909 10.0801 0 10.7381V2.60465C0 1.16614 1.13964 0 2.54545 0C3.95127 0 5.09091 1.16614 5.09091 2.60465ZM5.70135 11.4948C5.69996 11.4912 5.69882 11.4883 5.69775 11.4856L5.70135 11.4948ZM17.9247 6.96078C17.7827 7.10609 17.7827 7.34169 17.9247 7.487L19.3351 8.93023L17.9247 10.3735C17.7827 10.5188 17.7827 10.7544 17.9247 10.8997L18.4389 11.4259C18.581 11.5712 18.8112 11.5712 18.9532 11.4259L20.8779 9.45645C21.1619 9.16583 21.1619 8.69464 20.8779 8.40401L18.9532 6.43457C18.8112 6.28926 18.581 6.28926 18.4389 6.43457L17.9247 6.96078ZM11.8935 10.8997C12.0355 10.7544 12.0355 10.5188 11.8935 10.3735L10.4831 8.93023L11.8935 7.487C12.0355 7.34169 12.0355 7.10609 11.8935 6.96078L11.3792 6.43457C11.2372 6.28926 11.007 6.28926 10.865 6.43457L8.9403 8.40401C8.65628 8.69464 8.65628 9.16583 8.9403 9.45645L10.865 11.4259C11.007 11.5712 11.2372 11.5712 11.3792 11.4259L11.8935 10.8997ZM16.0611 6.49128C15.894 6.37729 15.6682 6.42349 15.5568 6.59448L13.0511 10.4404C12.9397 10.6114 12.9849 10.8424 13.152 10.9564L13.7571 11.3692C13.9242 11.4832 14.15 11.437 14.2614 11.266L16.767 7.42007C16.8784 7.24908 16.8333 7.01806 16.6662 6.90407L16.0611 6.49128Z" />
    </svg>
  )

};
