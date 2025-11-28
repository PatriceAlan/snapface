import { Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    { 
        path: 'facesnaps/:id',
        loadComponent: () =>
            import('./facesnaps-components/single-face-snap/single-face-snap.component')
                .then(m => m.SingleFaceSnapComponent),
        canActivate: [AuthGuard]
    },
    { 
        path: 'facesnaps',
        loadComponent: () =>
            import('./facesnaps-components/face-snap-list/face-snap-list.component')
                .then(m => m.FaceSnapListComponent),
        canActivate: [AuthGuard]
    },
    { 
        path: 'create',
        loadComponent: () =>
            import('./facesnaps-components/new-face-snap/new-face-snap.component')
                .then(m => m.NewFaceSnapComponent),
        canActivate: [AuthGuard]
        
    },
    { 
        path: '',
        loadComponent: () =>
            import('./landing-page/landing-page.component')
                .then(m => m.LandingPageComponent),
        canActivate: [AuthGuard]
    },
    {
        path: 'auth',
        loadChildren: () =>
            import('./auth/auth.routes')
                .then(m => m.authRoutes)
    }
];