import homePage from './pages/home-page.cmp.js'
import emailApp from './apps/email/pages/email-app.cmp.js'
import keepApp from './apps/keep/pages/keep-app.cmp.js'
import emailDetails from './apps/email/pages/email-details.cmp.js'
import emailCompose from './apps/email/cmps/email-compose.cmp.js'
const myRoutes = [{
    path: '/',
    component: homePage
},
{
    path: '/email/compose/',
    component: emailCompose
},
{
    path: '/email/:mailsCategory',
    component: emailApp
},
{
    path: '/email/:mailsCategory/:mailId',
    component: emailDetails
},



{
    path: '/keep',
    component: keepApp
},


]


export const myRouter = new VueRouter({ routes: myRoutes })