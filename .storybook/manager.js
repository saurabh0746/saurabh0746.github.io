import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: './icon.svg',
    brandTitle: 'Saurabh Chaudhary Components',
    brandUrl: 'https://hamishw.com',
  },
});
