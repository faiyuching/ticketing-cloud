import dynamic from 'next/dynamic';

// https://github.com/ionic-team/ionic/issues/19975
module.exports = new Proxy({}, {
  get: function(obj, prop) {
    return prop === '__esModule' ? true : dynamic(
      async () => (await import('@ionic/react'))[prop],
      { ssr: false }
    );
  }
});