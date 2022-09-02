#C:\Users\my\Desktop\Controls#
const { REST, Routes } = require('discord.js');

const commands = [
  {
    name: 'Controls',
    description: 'We design bots with Discord Server and Bot bug reporters',
  },
];

const rest = new REST({ version: '10' }).setToken('MTAwMzI3OTQyNjc0NzkwNDAzMQ.GQtQ5y.Zqr-OPIJKXs6ZLVSN8TQslxDIeYhRYqh3aBqKQ');

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(Routes.applicationCommands(1003279426747904031), { body: commands });

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();