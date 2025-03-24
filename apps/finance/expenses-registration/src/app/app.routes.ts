import { ActivatedRouteSnapshot, ResolveFn, Route } from '@angular/router';
import { ExpensesOverviewPageComponent } from './pages/expenses-overview-page/expenses-overview-page.component';
import { ExpensesApprovalPageComponent } from './pages/expenses-approval-page/expenses-approval-page.component';

export const titleResolver: ResolveFn<string> =
    (route: ActivatedRouteSnapshot) =>
        route.routeConfig?.path?.replace('-', ' ') ?? '';


export const appRoutes: Route[] = [
    { 

        path: 'expenses-overview', 
        component: ExpensesOverviewPageComponent,
        title : titleResolver //using titleResolver for dinamic title
    },
    { 
        path: 'expenses-approval', 
        component: ExpensesApprovalPageComponent,
        title : titleResolver
    }


];
