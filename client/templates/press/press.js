Template.getoutfittedPressPage.helpers({
  pressFeedEnabled: function () {
    return ReactionCore.Collections.Packages.findOne({
      name: 'press-feed',
      shopId: ReactionCore.getShopId()
    }).enabled;
  }
});
