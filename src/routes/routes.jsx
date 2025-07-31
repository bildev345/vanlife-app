import { createRoutesFromElements, Route } from "react-router-dom";
import Layout from '../components/Layout.jsx';
import About from '../pages/About.jsx';
import Home from '../pages/Home.jsx';
import Login, {loader as loginLoader, action as loginAction} from '../pages/Auth/Login.jsx';
import Vans, {loader as vansLoader} from '../pages/Vans/Vans.jsx';
import VanDetail, {loader as vanDetailLoader} from '../pages/Vans/VanDetail.jsx';
import HostLayout from '../components/HostLayout.jsx';
import Dashboard from '../pages/Host/Dashboard.jsx';
import Income from '../pages/Host/Income.jsx';
import Reviews from '../pages/Host/Reviews.jsx';
import HostVans, {loader as hostVansLoader} from '../pages/Host/HostVans.jsx';
import HostVanDetail, {loader as hostVanLoader} from '../pages/Host/hostVan/HostVanDetail.jsx';
import VanInfo from '../pages/Host/hostVan/VanInfo.jsx';
import VanPhotos from '../pages/Host/hostVan/VanPhotos.jsx';
import VanPricing from '../pages/Host/hostVan/VanPricing.jsx';
import NotFound from '../pages/NotFound.jsx';
import Error from '../components/Error.jsx';
import { requireAuth } from '../utils/utils.js';


export default createRoutesFromElements(
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
        errorElement={<Error/>}
    >
      <Route 
          index 
          element={<Dashboard/>}
          loader={async({request}) => await requireAuth(request)}

      />
      <Route 
          path="income" 
          element={<Income/>}
          loader={async({request}) => await requireAuth(request)}

      />
      <Route 
          path='reviews' 
          element={<Reviews/>}
          loader={async({request}) => await requireAuth(request)}

      />
      <Route 
          path="vans" 
          element={<HostVans/>}
          loader={hostVansLoader}
      />
      <Route 
          path="vans/:id" 
          element={<HostVanDetail/>}
          loader={hostVanLoader}
      >
          <Route 
              index 
              element={<VanInfo/>}
              loader={async({request}) => await requireAuth(request)}
          />
          <Route 
              path="pricing" 
              element={<VanPricing/>}
              loader={async({request}) => await requireAuth(request)}
          />
          <Route 
              path="photos" 
              element={<VanPhotos/>}
              loader={async({request}) => await requireAuth(request)}
          />
      </Route>
    </Route>
    <Route path="*" element={<NotFound/>}/>
  </Route>
)