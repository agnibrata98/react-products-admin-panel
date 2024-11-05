import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { lazy, Suspense } from 'react';
import Header from './components/layout/header/Header';
import Footer from './components/layout/footer/Footer';
import toast from 'react-hot-toast';
import { Box } from '@mui/material';
import { ClipLoader, BarLoader, PropagateLoader, GridLoader, RingLoader, PuffLoader } from 'react-spinners';
import useDarkMode from 'use-dark-mode';



// Lazy loading components
const Login = lazy(() => import('./components/auth/login/Login'));
const Register = lazy(() => import('./components/auth/register/Register'));
const Profile = lazy(() => import('./components/auth/profile/Profile'));
const Home = lazy(() => import('./components/cms/home/Home'));
const About = lazy(() => import('./components/cms/about/About'));
const Create = lazy(() => import('./components/cms/create/Create'));
const ProductDetails = lazy(() => import('./components/cms/productdetails/ProductDetails'));
const ProductList = lazy(() => import('./components/cms/productlist/ProductList'));

// Private route logic
function Private({ children }) {
  const token = localStorage.getItem("token") || sessionStorage.getItem("token");
  return token != null || token != undefined ? (
      children
    ) : (
      <>
        <Navigate to={"/"} />
        {toast.error("login First")}
      </>
    );
}

// Function to return different loaders based on the route
const getLoader = (path) => {
  const darkMode = useDarkMode(false);
  switch (path) {
    case '/productlist':
      return <GridLoader size={20} aria-label="Loading Product List" color={ darkMode.value ? '#fff' : '#000' } />;
    case '/profile':
      return <PropagateLoader width={200} height={5} aria-label="Loading Profile" color={ darkMode.value ? '#fff' : '#000' } />;
    case '/about':
      return <RingLoader size={70} aria-label="Loading About Page" color={ darkMode.value ? '#fff' : '#000' } />;
    case '/create':
      return <PuffLoader size={70} aria-label="Loading Create Page" color={ darkMode.value ? '#fff' : '#000' } />;
    case '/products/:id':
      return <BarLoader size={60} aria-label="Loading Product Details" color={ darkMode.value ? '#fff' : '#000' } />;
    default:
      return <ClipLoader size={70} aria-label="Loading" color={ darkMode.value ? '#fff' : '#000' } />;
  }
};

function App() {
  const publicRouting = [
    { path: '/', component: Login },
    { path: '/register', component: Register },
    { path: '/home', component: Home },
  ];

  const privateRouting = [
    { path: '/about', component: About },
    { path: '/create', component: Create },
    { path: '/products/:id', component: ProductDetails },
    { path: '/productlist', component: ProductList },
    { path: '/profile', component: Profile },
  ];

  return (
    <>
      <Router>
        <Header />
        <Routes>
          {/* Public Routes */}
          {publicRouting.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <Suspense fallback={
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'center',
                      height: '100vh',
                    }}
                  >
                    {getLoader(route.path)}
                  </Box>
                }>
                  <route.component />
                </Suspense>
              }
            />
          ))}

          {/* Private Routes */}
          {privateRouting.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              element={
                <Private>
                  <Suspense fallback={
                    <Box
                      sx={{
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        height: '100vh',
                      }}
                    >
                      {getLoader(route.path)}
                    </Box>
                  }>
                    <route.component />
                  </Suspense>
                </Private>
              }
            />
          ))}
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
