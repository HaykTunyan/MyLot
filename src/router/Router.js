import Registration from '../components/user-registration/user-registration';
import Login from '../components/user-login/user-login';
import AllItems from '../components/all-items/all-items';
import UserAuction from '../components/user-auction/user-auction';
import AddItem from '../components/add-item/add-item';
import ContainerAuction from '../components/container-auction/container-auction';
import AboutUs from '../components/about-us/about-us';
import UserPurchases from '../components/user-purchases/user-purchases';
import UserSettings from '../components/user-settings/user-settings';
import AuctionItem from '../components/all-items/all-items';
import EditItem from '../components/edit-item/edit-item';
import ContactUs from '../components/contact-us/contact-us';
import ProductPageContainer from '../components/product-page/product-page-container';
import VerifyEmailContainer from '../components/verify-email/VerifyEmailContainer';
import VerifyEmail from '../components/verify-email/verify-email';
import ExpectedViewMore from '../components/container-auction/view-more/expected/expected-view-more';
import LiveViewMore from '../components/container-auction/view-more/live-view-more/live-view-more';
import FavoritesContainer from '../components/favorites/favorites-container';
import NotFound from '../components/not-found/not-found';
import HelpCenter from '../components/help-center/help-center';
import AuctionContainer from '../components/container-auction/auction-container';
import SignOut from '../components/sign-out/sign-out';
import SearchPage from '../components/search-page/search-page';
import ForgotPassword from '../components/forgot-password/forgot-password';
import ResetPasswordContainer from '../components/reset-password/reset-password-container';
import LastViewMore from '../components/container-auction/view-more/last-view-more/last-view-more';
import PaymentModal from '../components/modal-popup/payment-modal/payment-modal';
import Payment from '../components/payment/payment';
import ResetPassword from '../components/reset-password/reset-password';
import ResetPasswordPage from '../components/reset-password/reset-password-page';
import StartLot from '../components/start-lot/start-lot';
import Politics from '../components/politics/politics';

const Routes = [
  {
    path: '/',
    exact: true,
    component: ContainerAuction,
  },
  {
    path: '/auction',
    component: AuctionContainer,
  },
  {
    path: '/politics',
    component: Politics,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/registration',
    component: Registration,
  },
  {
    path: '/sign-out',
    component: SignOut,
  },
  {
    path: '/allItems',
    component: AllItems,
  },
  {
    path: '/userAuction',
    component: UserAuction,
  },
  {
    path: '/addItem',
    component: AddItem,
  },
  {
    path: '/about_us',
    component: AboutUs,
  },
  {
    path: '/home',
    component: ContainerAuction,
  },
  {
    path: '/favoritesContainer',
    component: FavoritesContainer,
  },
  {
    path: '/purchases',
    component: UserPurchases,
  },
  {
    path: '/usersettings',
    component: UserSettings,
  },
  {
    path: `/slug/:slug`,
    component: AuctionItem,
  },
  {
    path: '/edititem/:id',
    component: EditItem,
  },
  {
    path: '/contact_us',
    component: ContactUs,
  },
  {
    path: '/verify',
    component: VerifyEmailContainer,
  },
  {
    path: '/verifyEmail',
    component: VerifyEmail,
  },
  {
    path: '/product-page',
    component: ProductPageContainer,
  },
  {
    path: '/expected',
    component: ExpectedViewMore,
  },
  {
    path: '/liveView',
    component: LiveViewMore,
  },
  {
    path: '/lastView',
    component: LastViewMore,
  },
  {
    path: '/help_center',
    component: HelpCenter,
  },
  {
    path: '/search-page',
    component: SearchPage,
  },
  {
    path: '/forgot-password',
    component: ForgotPassword,
  },
  {
    path: '/reset-password',
    component: ResetPasswordContainer,
  },

  {
    path: '/payment/',
    component: Payment,
  },
  {
    path: '/api/auth/change-password/',
    component: ResetPassword,
  },
  {
    component: NotFound,
  },
];

export default Routes;
