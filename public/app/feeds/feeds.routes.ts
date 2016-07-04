import { RouterConfig }          from '@angular/router';

import { FeedListComponent }     from './feed-list.component';
import { FeedDetailComponent }   from './feed-detail.component';

export const FeedsRoutes: RouterConfig = [
    { path: 'feeds',  component: FeedListComponent },
    { path: 'feeds/:name', component: FeedDetailComponent }
];
