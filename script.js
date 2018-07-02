let name = 'David Mayes';
let myInfo =[
	'Career: Full Stack Web Developer',
	'Description: Promising web developer with colossal ideas!'
]

console.log('Name: ' + name.toUpperCase());
for(var i = 0; i < myInfo.length; i++) {
	console.log(myInfo[i]);
}

let interest = ['Basketball', 'Cooking', 'Coding', 'Family'];

console.log('\n' + 'Interest:');

for (var i = 0; i < interest.length; i++) {
	console.log('* ' + interest[i]);
}

function displayPosition(companyName, jobTitle, jobDesc) {
	console.log(
		'* ' +
		'Company: ' + companyName +
		'\n' +
		'  ' +
		'Position: ' + jobTitle +
		'\n' +
		'  ' +
		'Job Description: ' + jobDesc
	);
}

console.log('\n' + 'My Previous Experience:');

displayPosition(
	"L'Amy America",
	'District Sales Manager',
	'Travel to different opthalmic office to manage their frame boards with the collections I offer'
);
displayPosition(
	'Optix Consulting Group',
	'Owner',
	'Help private optometrist offices better manage day to day operations to increase profits'
);
displayPosition(
	'EyeMart Express',
	'General Manager',
	'Managed a staff of 8, sales training, day to day operations'
);

console.log('\n' + 'My Skills:');

function displaySkill(skill, isCool) {
	if (isCool === true) {
		console.log('* ' + 'BAM: ' + skill);
	} else {
		console.log('* ' + skill);
	}
}

displaySkill('Sales', true);
displaySkill('Management', false);
displaySkill('Manufacturing', true);
displaySkill('A.B.O.C.', true);
displaySkill('Computer Systems', false);
