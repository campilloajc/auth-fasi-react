import LoginView from '../components/Login/LoginView';
import HomeView from '../components/Home/HomeView';
import NotFound from '../components/NotFound/NotFound';

export const configRoutes = {
   routes:[],
   initialRoute:{
      component: LoginView,
      path:'/',
   },
   homeRoute:{
      component: HomeView,
      path:'home',
   },
   NotFoundRoute:{
      component: NotFound,
      path:'notFound',
   }
}