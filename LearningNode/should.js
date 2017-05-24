var user ={
    name:'tj',
    pets:['tobi', 'loki', 'jane', 'bandit']
};

/* extends objects with should function syntactic sugar
for readibility enhanced assertions*/
user.should.have.property('name', 'tj');

/*chainable assertions*/
user.should.have.property('pets').with.lengthOf(4);

/*should available statically
(to test for variable existence)*/
someAsyncTask(foo, function(err, result){
    should.not.exist(err);
    should.exist(result);

/*can assert properties of objects directly*/    
    result.bar.should.equal(foo);
});