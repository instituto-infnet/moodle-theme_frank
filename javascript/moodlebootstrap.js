
require(['core/first'], function() {
    require(['theme_frank/bootstrap', 'core/log'], function(bootstrap, log) {
        log.debug('Bootstrap initialised');
    });
});
