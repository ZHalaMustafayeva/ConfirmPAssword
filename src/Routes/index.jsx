import React, { Suspense } from 'react';
import style from './style.module.scss';
import { Result, Button, Spin } from 'antd';
import {
  Route,
  Navigate,
  Outlet,
  Link,
  Routes,
  BrowserRouter
} from 'react-router-dom';
import Layout from '../Layouts';
import {
  Home,
 
} from '../Pages';

const Index = () => {

  return (

    <BrowserRouter>
      <Suspense fallback={<Spin className={style.spin} tip='Yüklənir...' />}>
        <Routes>
          <Route path='home' element={<Layout />}>
            <Route index element={<Home />} />
            
          

            {/* ---------status message--------- */}
            <Route path='404'
              element={<Result
                status='404'
                title='404'
                subTitle='Üzr istəyirik: Daxil etdiyiniz səhifə tapılmadı.'
                extra={<Link to={process.env.REACT_APP_HOME} ><Button type='primary'>Ana Səhifə</Button></Link>}
              />}
            />
            <Route path='500'
              element={<Result
                status='500'
                title='500'
                subTitle='Üzr istəyirik: Gözlənilməyən xəta baş verdi'
                extra={<Link to={process.env.REACT_APP_HOME} ><Button type='primary'>Ana Səhifə</Button></Link>}
              />}
            />
            {/* ---------status message--------- */}

            <Route path='*' element={<Navigate to={process.env.REACT_APP_404} />} />

          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>

  )
}


export default Index;