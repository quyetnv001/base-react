import Home from '~/pages/Home';
import Following from '~/pages/Following';
import Profile from '~/pages/Profile';
import Upload from '~/pages/Upload';
import Search from '~/pages/Search';

import { DefaultLayout, PublicLayout, NoLayout } from '~/components/layouts';

//public routes
export const publicRouter = [
    {
        path: '/',
        component: Home,
        layout: DefaultLayout,
    },
    {
        path: '/following',
        component: Following,
        layout: DefaultLayout,
    },
    {
        path: '/profile',
        component: Profile,
        layout: DefaultLayout,
    },
    {
        path: '/upload',
        component: Upload,
        layout: PublicLayout,
    },
    {
        path: '/search',
        component: Search,
        layout: NoLayout,
    },
];

//private routes
export const privateRouter = [];
