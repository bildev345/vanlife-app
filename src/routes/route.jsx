import { createBrowserRouter, createRoutesFromElements, redirect, Route} from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import About from "../pages/About";
import Vans, { loader as vansLoader } from "../pages/Vans/Vans";
import VanDetail, { loader as vanDetailLoader } from "../pages/Vans/VanDetail";
import HostLayout, {loader as hostLoader} from "../components/HostLayout";
import Dashboard from "../pages/Host/Dashboard";
import Income from "../pages/Host/Income";
import HostVans, { loader as hostVansLoader } from "../pages/Host/HostVans";
import HostVanDetailLayout, {loader as hostVanLoader} from "../components/HostVanDetailLayout";
import VanInfo from "../pages/Host/hostVan/VanInfo";
import VanPricing from "../pages/Host/hostVan/VanPricing";
import VanPhotos from "../pages/Host/hostVan/VanPhotos";
import Reviews from "../pages/Host/Reviews";
import NotFound from "../pages/NotFound";
import Error from "../components/Error";
import Login, { loader as loginLoader, action as loginAction } from "../pages/Auth/Login";
import { requireAuth } from "../utils/utils";

export const route = createBrowserRouter(createRoutesFromElements(
  <Route path="/" element={<Layout/>}>
    <Route index element={<Home/>}/>
    <Route path="about" element={<About/>}/>
    <Route 
        path="login" 
        element={<Login/>}
        loader={loginLoader}
        action={loginAction}
    />
    <Route 
        path="vans" 
        element={<Vans/>} 
        loader={vansLoader}
        errorElement={<Error/>}
    />
    <Route 
        path="vans/:id" 
        element={<VanDetail/>}
        loader={vanDetailLoader}
        errorElement={<Error/>}
    />
    <Route 
        path='host' 
        element={<HostLayout/>}
        loader={hostLoader}
        errorElement={<Error/>}
    >
      <Route 
          index 
          element={<Dashboard/>}
          loader={async({request}) => await requireAuth(request)}
          errorElement={<Error/>}

      />
      <Route 
          path="income" 
          element={<Income/>}
          loader={async({request}) => await requireAuth(request)}
          errorElement={<Error/>}

      />
      <Route 
          path='reviews' 
          element={<Reviews/>}
          loader={async({request}) => await requireAuth(request)}
          errorElement={<Error/>}

      />
      <Route 
          path="vans" 
          element={<HostVans/>}
          loader={hostVansLoader}
          errorElement={<Error/>}
      />
      <Route 
          path="vans/:id" 
          element={<HostVanDetailLayout/>}
          loader={hostVanLoader}
          errorElement={<Error/>}
      >
          <Route 
              index 
              element={<VanInfo/>}
              loader={async() => await requireAuth()}
          />
          <Route 
              path="pricing" 
              element={<VanPricing/>}
              loader={async() => await requireAuth()}
          />
          <Route 
              path="photos" 
              element={<VanPhotos/>}
              loader={async() => await requireAuth()}
          />
      </Route>
    </Route>
    <Route path="*" element={<NotFound/>}/>
  </Route>
));
