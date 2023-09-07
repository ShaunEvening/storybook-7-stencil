export default {
  title: 'Components/CoolButton',
};

const template = args => `<cool-button is-primary="${args.isPrimary}">Click me</cool-button>`;

export const Example = template.bind({});
Example.args = {
  isPrimary: true,
};
