try {
    console.log('this happens first');
    throw 'myException';

}
catch (err) {
    console.log('this happens if we error');
    throw(err);

}
finally {
    console.log('This always happens at the end.');
    
}
