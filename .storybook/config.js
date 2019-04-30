import React from 'react'
import { addDecorator, configure } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Normalize from '../src/components/common/Normalize'
import GlobalStyles from '../src/components/common/GlobalStyles'

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls
// from creating console errors you override it here
global.___loader = {
  enqueue: () => {},
  hovering: () => {},
}

// Gatsby internal mocking to prevent unnecessary errors in storybook
// testing environment
global.__PATH_PREFIX__ = ""

// This is to utilized to override the window.___navigate method Gatsby
// defines and uses to report what path a Link would be taking us to
// if it wasn't inside a storybook
window.___navigate = pathname => {
  action("NavigateTo:")(pathname)
}

addDecorator((story) => (
  <>
    <Normalize />
    <GlobalStyles />
    {story()}
  </>
))

// automatically import all files from components dir ending with *.story.js
const req = require.context('../src/components', true, /\.story\.jsx$/)

function loadStories() {
  req.keys().forEach(filename => req(filename))
}

configure(loadStories, module)
