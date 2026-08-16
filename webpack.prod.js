import { merge } from 'webpack-merge';
import common from './webpack.common.js';

export default merge(common, {
  mode: 'production',

  output: {
    // Uncomment for GitHub Pages projects
    // publicPath: '/repo-name/'
  },
});
