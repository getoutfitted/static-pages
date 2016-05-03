ReactionCore.registerPackage({
  label: 'Getoutfitted Static Pages',
  name: 'Getoutfitted Static Pages',
  icon: 'fa fa-email',
  autoEnable: false,
  registry: [{
    route: '/dashboard/staticPages',
    provides: 'dashboard',
    name: 'staticPages',
    label: 'Getoutfitted Static Pages',
    description: 'Getoutfitted\'s Static Pages ,
    container: 'getoutfitted',
    icon: 'fa fa-email',
    // template: 'klaviyoDashboard',
    workflow: 'coreWorkflow',
    priority: 3
  }, {
    route: '/dashboard/staticPages/settings',
    provides: 'settings',
    label: 'Getoutfitted Static Pages',
    name: 'staticPagesSettings',
    template: 'staticPagesSettings'
  }]
});
