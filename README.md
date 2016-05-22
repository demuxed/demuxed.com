# Demuxed 2016 Website

We use [Harp](http://harpjs.com) to build the site. Read the docs there on how to use it.

## Updating the site

1. Make a new branch off `master`
2. Make changes (use `$ harp server _harp` for preview server)
3. Submit PR against `master` / merge
4. Checkout `gh-pages`
5. Rebase against `master`
6. Build the site: `$ harp compile _harp ./`
7. Deploy the site: `git push -f`
