ReactionCore.registerPackage({
  label: 'Getoutfitted Static Pages',
  name: 'getoutfitted-static-pages',
  icon: 'fa fa-file-text',
  autoEnable: false,
  registry: [{
    // route: '/dashboard/staticPages',
    provides: 'dashboard',
    // name: 'staticPages',
    label: 'Static Pages',
    description: 'Getoutfitted\'s Static Pages',
    container: 'getoutfitted',
    icon: 'fa fa-file-text',
    // template: 'staticPagesDashboard',
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
    workflow: 'goPagesWorkflow'
    // permissions: [{label: 'guest', permission: 'guest'}],
  },{
    route: '/privacy',
    name: 'getoutfittedPrivacyPolicy',
    template: 'getoutfittedPrivacyPolicy',
    workflow: 'goPagesWorkflow'
    // permissions: [{label: 'guest', permission: 'guest'}],
  }],
  layout: [{
    workflow: 'goPagesWorkflow',
    layout: 'coreLayout',
    //audience: ["guest", "anonymous"]
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
  }, {
    template: "getoutfittedAbout",
    label: "About",
    workflow: "goPagesWorkflow",
    audience: ["guest", "anonymous"]
  }]
});
