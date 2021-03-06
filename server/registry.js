ReactionCore.registerPackage({
  label: 'Getoutfitted Static Pages',
  name: 'getoutfitted-static-pages',
  icon: 'fa fa-file-text',
  autoEnable: true,
  registry: [{
    provides: 'dashboard',
    name: 'staticPages',
    label: 'Static Pages',
    description: 'Getoutfitted\'s Static Pages',
    container: 'getoutfitted',
    icon: 'fa fa-file-text',
    workflow: 'coreWorkflow',
    priority: 2
  }, {
    route: '/dashboard/staticPages/settings',
    provides: 'settings',
    label: 'Getoutfitted Static Pages',
    name: 'staticPagesSettings',
    template: 'staticPagesSettings'
  }, {
    route: '/about',
    name: 'getoutfittedAbout',
    template: 'getoutfittedAbout',
    workflow: 'goPagesWorkflow',
  }, {
    route: '/privacy',
    name: 'getoutfittedPrivacyPolicy',
    template: 'getoutfittedPrivacyPolicy',
    workflow: 'goPagesWorkflow'
  }, {
    route: '/press',
    name: 'getoutfittedPressPage',
    template: 'getoutfittedPressPage',
    workflow: 'goPagesWorkflow'
  }, {
    route: '/nb',
    name: 'newBelgium',
    template: 'newBelgium',
    workflow: 'goPagesWorkflow'
  }, {
    route: '/NB',
    name: 'newBelgium',
    template: 'newBelgium',
    workflow: 'goPagesWorkflow'
  }, {
    route: '/winter',
    name: 'winter',
    template: 'winter',
    workflow: 'goPagesWorkflow'
  }, {
    route: '/groups',
    name: 'groups',
    template: 'groups',
    workflow: 'goPagesWorkflow'
  }
  ],
  layout: [{
    workflow: 'goPagesWorkflow',
    layout: 'coreLayout',
    theme: 'default',
    enabled: true,
    structure: {
      template: 'getoutfittedAbout',
      layoutHeader: 'layoutHeader',
      layoutFooter: 'layoutFooter',
      notFound: 'notFound',
      dashboardHeader: '',
      dashboardControls: '',
      dashboardHeaderControls: '',
      adminControlsFooter: ''
    }
  }]
});
