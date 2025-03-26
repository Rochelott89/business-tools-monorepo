import { ActivatedRouteSnapshot, ResolveFn, Route } from '@angular/router';

export const titleResolver: ResolveFn<string> =
    (route: ActivatedRouteSnapshot) =>
        route.routeConfig?.path?.replace('-', ' ') ?? '';


export const appRoutes: Route[] = [

    //redirect route
    { 
        path: '', 
        pathMatch: 'full', 
        redirectTo: '/expenses-overview' 
    },

    //fallback route, TODO
    //{ path: '**', component: NotFoundComponent },

    {
        path: 'expenses-approval',
        loadComponent: () => import('./pages/expenses-approval-page/expenses-approval-page.component'),
        title: titleResolver
      },

    { 

        path: 'expenses-overview', 
        loadComponent: () => import('./pages/expenses-overview-page/expenses-overview-page.component'),
        title : titleResolver, //using titleResolver for dinamic title
        children: [
            {   
                //router outlet path to load a specific part of the page
                path: 'list',
                loadComponent: () => import('./pages/expenses-overview-page/expenses-overview-page.component'),
                outlet: 'sidebar'  // load component in the named outlet 'sidebar'
            }
        ]
    }
];
