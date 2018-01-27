/**
 * @author Michael Couck
 * @since 27-01-2018
 * @version 1.0
 */

var couchbase = require('couchbase')
var cluster = new couchbase.Cluster('couchbase://ikube.be/');
cluster.authenticate('reaper', 'R7hEf2uyespA');
var bucket = cluster.openBucket('reaper');
var N1qlQuery = couchbase.N1qlQuery;

bucket.manager().createPrimaryIndex(function () {
    bucket.upsert('user:king_arthur', {
            'email': 'kingarthur@couchbase.com', 'interests': ['Holy Grail', 'African Swallows']
        },
        function (err, result) {
            bucket.get('user:king_arthur', function (err, result) {
                console.log('Got result: %j', result.value);
                bucket.query(
                    N1qlQuery.fromString('SELECT * FROM reaper WHERE $1 in interests LIMIT 1'),
                    ['African Swallows'],
                    function (err, rows) {
                        console.log("Got rows: %j", rows);
                    });
            });
        });
});
