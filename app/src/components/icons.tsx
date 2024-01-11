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
};
