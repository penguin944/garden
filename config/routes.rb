Rails.application.routes.draw do
  root 'welcome#index'

  get 'api/feeds' => 'feeds#index', defaults: { :format => :json }
  get 'api/feeds/:name' => 'feeds#details', defaults: { :format => :json }

  match 'api' => 'application#invalid_api_path', defaults: { :format => :json }, via: [ :all ]
  match 'api/*path' => 'application#invalid_api_path', defaults: { :format => :json }, via: [ :all ]

  # match '/*path' => redirect('/'), via: [ :all ]
end
