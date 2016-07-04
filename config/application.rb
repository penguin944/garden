require File.expand_path('../boot', __FILE__)

require 'action_controller/railtie'
require 'active_model/railtie'
require 'action_mailer/railtie'
require 'sprockets/railtie'
require 'rails/test_unit/railtie'

Bundler.require(*Rails.groups)

module PleimannGarden
  class Application < Rails::Application
    config.middleware.insert_before 0, 'Rack::Cors' do
      allow do
        origins '*'
        resource '*', :headers => :any, :methods => [:get, :post, :options]
      end
    end

    # Explicitly add the 'node_modules' directory
    config.assets.paths << Rails.root.join('node_modules')
  end
end
