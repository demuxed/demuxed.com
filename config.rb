###
# Page options, layouts, aliases and proxies
###

Time.zone = "UTC"

page '/*.xml', layout: false
page '/*.json', layout: false
page '/*.txt', layout: false


# General configuration

configure :development do
  activate :livereload
  activate :syntax
end

configure :build do
  activate :syntax
  activate :minify_css
  activate :minify_javascript
  activate :directory_indexes
  activate :asset_hash
end


###
# Helpers
###

set :haml, { :ugly => true, :format => :html5 }
set :markdown_engine, :redcarpet
set :markdown, {
    :no_intra_emphasis => true,
    :autolink => true,
    :strikethrough => true,
    :fenced_code_blocks => true,
    :tables => true,
    :with_toc_data => true }
set :relative_links, true
