const friends = ['Sabir','Sakib','Najmus1','Najmus2'];
console.log(friends.includes('Hello'));
if(friends.includes('Sabir')){
    console.log('Party');
}else{
    console.log('No Party');
}
console.log(friends.indexOf('Sabir'));
console.log(Array.isArray(friends));