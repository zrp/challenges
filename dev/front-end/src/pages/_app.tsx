import Head from 'next/head'
import SideBar from '@/components/Navbar'
import { ThemeProvider } from "@/assets/theme"
import { QueryClient, QueryClientProvider } from 'react-query';

import { useRouter } from 'next/router';
import AuthProtect from './AuthProtect';
import RouteProtector from './RouteProtector';

const queryClient = new QueryClient();
const noLayoutRoutes = ['/login', '/signup', '/404'];

function MyApp({ Component, pageProps }) {
  const { pathname } = useRouter()
  
  return (
    <>
      <Head>
      <link
        rel="stylesheet"
        href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
        crossOrigin=""/>
      </Head>
      <ThemeProvider>
          <QueryClientProvider client={queryClient}>
              {noLayoutRoutes.includes(pathname) ? (
                <Component {...pageProps} />
              ) : (
                <SideBar currentRoute={pathname}>
                  <RouteProtector>
                    <AuthProtect>
                      <Component {...pageProps} />
                    </AuthProtect>
                  </RouteProtector>
                </SideBar>
              )
              }
          </QueryClientProvider>
        </ThemeProvider>
    </>
  )
}

export default MyApp
