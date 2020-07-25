export default function (context) {
  if (process.server) {
    console.log('log process in server!') // eslint-disable-line no-console
  } else if (process.client) {
    console.log('log process in client!') // eslint-disable-line no-console
  } else {
    console.log('where is process?') // eslint-disable-line no-console
  }
}
