const faker = require('faker');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost/plants');
// Define what our schema is 

const  User = mongoose.model('User', userSchema);

let user  = createUser();
console.log(user);


user.save( err => {
    if(err) {
	console.log("There was an error");
    }
    console.log("saved successfully");
});

function createUser(){
    return new User({
	name: faker.name.findName(),
	username: faker.internet.userName(),
	password: faker.internet.password(),
	email: faker.internet.email(),
	location: faker.address.state(),
	created_at: faker.date.past(),
	updated_at: faker.date.recent()
    });
}

