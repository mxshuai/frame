fis.match('/test/**', {
  release: '$0'
});

fis.match('/test/server.conf', {
  release: '/config/server.conf'
});
