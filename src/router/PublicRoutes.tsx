import { Navigate, Route } from 'react-router-dom';
import Counter from '@/pages/counter';
import Home from '@/pages/home';

const publicPaths = [
  { path: '*', component: <Navigate to="/" /> },
  {
    path: '/',
    component: <Home />,
  },
  { path: '/counter', component: <Counter /> },
];

export default function publicRoutes() {
  return publicPaths.map((page) => {
    return <Route path={page.path} element={page.component} key={page.path} />;
  });
}
