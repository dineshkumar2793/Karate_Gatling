function fn() {
  var env = karate.env; // get system property 'karate.env'
  karate.log('karate.env system property was:', env);

  if (!env) {
    env = 'dev';
  }

  var port  = karate.properties['port'];
  if (!port || port === '0')
    port = 8081;

  var config = {
    env: env,
    user: 'swiss',
    id: 1,
    deleteId: 3,
    //baseUrl: 'http://localhost:' + port + '/karate-api'
    baseUrl: 'http://localhost:' + port + '/user'
    //baseUrl: 'http://localhost:' + port + 'jdbc:h2:mem:userapp'
  }

  if (env == 'dev') {
    // customize
    // e.g. config.foo = 'bar';
  } else if (env == 'e2e') {
    // customize
  }

  return config;
}
