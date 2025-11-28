import { Routes } from '@angular/router';

export const routes: Routes = [
    { 
        path: 'facesnaps/:id',
        loadComponent: () =>
        import('./facesnaps-components/single-face-snap/single-face-snap.component')
            .then(m => m.SingleFaceSnapComponent)
    },
    { 
        path: 'facesnaps',
        loadComponent: () =>
        import('./facesnaps-components/face-snap-list/face-snap-list.component')
            .then(m => m.FaceSnapListComponent)
    },
    { 
        path: 'create',
        loadComponent: () =>
        import('./facesnaps-components/new-face-snap/new-face-snap.component')
            .then(m => m.NewFaceSnapComponent)
    },
    { 
        path: '',
        loadComponent: () =>
        import('./landing-page/landing-page.component')
            .then(m => m.LandingPageComponent)
    },
    {
        path: 'auth',
        loadChildren: () =>
            import('./auth/auth.routes')
                .then(m => m.authRoutes)
    }
];