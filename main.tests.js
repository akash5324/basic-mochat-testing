const add=require('./main.js');
var app=require('./server').app;
const request=require('supertest');

//testing add function from main.js
it('Add two numbers',()=>{

		var result=add.addNumbers(40,20);
			console.log(result);

});

it('Add two numbers',()=>{

		//var result=add.addNumbers(40,20);

		var result2=add.addNumbers(60,-40);
		console.log(result2);

});

//testing express server file
it('should print hello world',(done)=>{

request(app)
  .get('/')
  .expect('Content-Type', /html/)
  .expect(200)
  .expect('hello')
	.end(done);

});

