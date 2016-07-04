System.register(['./feed-list.component', './feed-detail.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var feed_list_component_1, feed_detail_component_1;
    var FeedsRoutes;
    return {
        setters:[
            function (feed_list_component_1_1) {
                feed_list_component_1 = feed_list_component_1_1;
            },
            function (feed_detail_component_1_1) {
                feed_detail_component_1 = feed_detail_component_1_1;
            }],
        execute: function() {
            exports_1("FeedsRoutes", FeedsRoutes = [
                { path: 'feeds', component: feed_list_component_1.FeedListComponent },
                { path: 'feeds/:name', component: feed_detail_component_1.FeedDetailComponent }
            ]);
        }
    }
});
//# sourceMappingURL=feeds.routes.js.map