export const appRoutes = {
  mainLayoutRoutes: [
    {
      path: 'game/:id',
      loadChildren: () => import('./pages/crossword-game/crossword-game.module').then(m => m.CrosswordGamePageModule)
    },
    {
      path: 'levels',
      loadChildren: () => import('./pages/levels/levels.module').then(m => m.LevelsPageModule)
    },
    {
      path: 'home',
      loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
    },
  ]
};
