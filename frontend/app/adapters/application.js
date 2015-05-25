import DS from 'ember-data';

function ourUrl() {
    return location.protocol + '//' + location.hostname + (location.port ? ':'+location.port: '');
}

export default DS.RESTAdapter.extend({
  namespace: 'v1',
  host: ourUrl(),
});
