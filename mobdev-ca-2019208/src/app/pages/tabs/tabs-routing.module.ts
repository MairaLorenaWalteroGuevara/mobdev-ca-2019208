import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TabsPage } from './tabs.page';
const routes: Routes = [
    {
        // create the tabs for the pages 
        // tabs/episodes is going to open episodes 
        //tabs/eqpisodes/id is gonna open episodes details
        // we are defined the route with loadclidren, in this case the pages can use lazy loading. 
        //Also this is necessary to add in the app routing module.ts, to have the route of the tabs for the app. 
        //lazy loading is a desing pattern that dolad only  what need to be necessary instead all loading the hole webapp. 
        // this help to the efficiency. 
        
        
        path: 'tabs',
        component: TabsPage,
        children: [
            {
                
                path: 'episodes',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../episodes/episodes.module').then(m => m.EpisodesPageModule)
                    },
                    {
                        path: ':id',
                        loadChildren: () => import('../episode-details/episode-details.module').then(m => m.EpisodeDetailsPageModule)
                    }
                ]
            },
            {
                path: 'characters',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../characters/characters.module').then(m => m.CharactersPageModule)
                    },
                    {
                        path: ':id',
                        loadChildren: () => import('../character-details/character-details.module').then(m => m.CharacterDetailsPageModule)
                    }
                ]
            },
            {
                path: 'quotes',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../quotes/quotes.module').then(m => m.QuotesPageModule)
                    },
                    {
                        path: ':id',
                        loadChildren: () => import('../quote-details/quote-details.module').then(m => m.QuoteDetailsPageModule)
                    }
                ]
            },
            {
                path: 'deaths',
                children: [
                    {
                        path: '',
                        loadChildren: () => import('../deaths/deaths.module').then(m => m.DeathsPageModule)
                    }
                ]
            }
        ]
    },
    {
        path: '',
        redirectTo: '/tabs/episodes',
        pathMatch: 'full'
    }
];
@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class TabsPageRoutingModule { }