import { NgModule } from "@angular/core";

import { FeatherModule } from "angular-feather";
import {
  AlertCircle,
  AlertOctagon,
  AlertTriangle,
  ArrowDown,
  ArrowLeft,
  ArrowUp,
  AtSign,
  Award,
  Bell,
  Check,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Clock,
  Code,
  Codesandbox,
  Copy,
  CreditCard,
  DollarSign,
  ExternalLink,
  Feather,
  Flag,
  FolderMinus,
  FolderPlus,
  Gift,
  Heart,
  HelpCircle,
  Home,
  Image,
  Info,
  Key,
  Link,
  Link2,
  Mail,
  MessageSquare,
  Monitor,
  MoreHorizontal,
  MoreVertical,
  Percent,
  Plus,
  Power,
  RefreshCw,
  Repeat,
  RotateCw,
  Search,
  Send,
  Settings,
  Share2,
  ShoppingBag,
  ShoppingCart,
  Trash2,
  TrendingUp,
  User,
  UserPlus,
  Users,
  UserX,
  X,
} from "angular-feather/icons";
import {
  BellNotification,
  Bitclout,
  CreatorCoin,
  Card,
  Coin,
  Deso,
  Diamond,
  Frame,
  Gem,
  LandingBullet1,
  LandingBullet2,
  LandingBullet3,
  Lock,
  Lock2,
  MultipleNfts,
  Quote,
  SingleNft,
} from "src/assets/img/feather";

const icons = {
  AlertCircle,
  AlertOctagon,
  AlertTriangle,
  ArrowDown,
  ArrowLeft,
  ArrowUp,
  AtSign,
  Award,
  Bell,
  BellNotification,
  Bitclout,
  BitcloutCircle: CreatorCoin,
  Card,
  Check,
  CheckCircle,
  ChevronDown,
  ChevronRight,
  Clock,
  Code,
  Codesandbox,
  Coin,
  Copy,
  CreditCard,
  Deso,
  DollarSign,
  Diamond,
  ExternalLink,
  Feather,
  Flag,
  FolderMinus,
  FolderPlus,
  Frame,
  Gem,
  Gift,
  Heart,
  HelpCircle,
  Home,
  Image,
  Info,
  Key,
  LandingBullet1,
  LandingBullet2,
  LandingBullet3,
  Link,
  Link2,
  Lock,
  Lock2,
  Mail,
  MessageSquare,
  Monitor,
  MoreHorizontal,
  MoreVertical,
  MultipleNfts,
  Percent,
  Power,
  Plus,
  Quote,
  RefreshCw,
  Repeat,
  RotateCw,
  Search,
  Send,
  Settings,
  Share2,
  ShoppingBag,
  ShoppingCart,
  SingleNft,
  Trash2,
  TrendingUp,
  User,
  Users,
  UserPlus,
  UserX,
  X,
};

@NgModule({
  imports: [FeatherModule.pick(icons)],
  exports: [FeatherModule],
})
export class IconsModule {}
