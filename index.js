// example function myEach(collection, callback)
myEach([1,2,3], alert);
myEach({one: 1, two: 2, three: 3}, alert);

// example function myMap(collection, callback)
myMap([1,2,3], num => num * 3)

// example function myReduce(collection, callback, acc) last thing: starting value
myReduce([1,2,3], function(acc, val, collection) {
    return acc + val;
});

// myFind(collection, predicate) returns true or false
myFind([1,2,3,4,5,6], num => num%2 == 0)

// myFilter(collection, predicate)
myFilter([1,2,3,4,5,6], num => num%2 == 0);

// mySize(collection)
mySize({one: 1, two: 2, three: 3})

// myFirst(array, [n])
myFirst([1,2,3,4,5])

myLast(array, [n])

// Bonus: mySortBy 
