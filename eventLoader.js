nes (4 sloc)  144 Bytes

const Berkay1298 = (event) => require(`../events/${event}`);
module.exports = client => {
  client.on('message', Berkay1298('message'));
};