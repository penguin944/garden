# Be sure to restart your server when you modify this file.

# Version of your assets, change this if you want to expire all your assets.
Rails.application.config.assets.version = '1.0'

# Explicitly add the 'node_modules' directory to the asset paths
Rails.application.config.assets.paths << Rails.root.join('node_modules').to_s

# Precompile additional assets.
# application.js, application.css, and all non-JS/CSS in src/assets folder are already added.
# Rails.application.config.assets.precompile += %w( search.js )
