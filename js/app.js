///FUNZIONI///
function getFullName() {
	// console.log(this)
	const firstName = this['firstName']
	const lastName = this.lastName
	return `${firstName} ${lastName}`
}

//Creiamo un array di oggetti e forniamo le seguenti informazioni (nome, ruolo, img)
const persona = {
    firstName: 'Wayne',
    lastName: 'Barnett',
    role: 'Founder & CEO',
    img: 'wayne-barnett-founder-ceo.jpg',
    getFullName: getFullName
};

const teamArray = [
    persona,
    {
        firstName: 'Angela',
        lastName: 'Caroll',
        role: 'Chief Editor',
        img: 'angela-caroll-chief-editor.jpg',
        getFullName: getFullName
    },
    {
        firstName: 'Walter',
        lastName: 'Gordon',
        role: 'Office Manager',
        img: 'walter-gordon-office-manager.jpg',
        getFullName: getFullName
    },
    {
        firstName: 'Angela',
        lastName: 'Lopez',
        role: 'Social Media Manager',
        img: 'angela-lopez-social-media-manager.jpg',
        getFullName: getFullName
    },
    {
        firstName: 'Scott',
        lastName: 'Estrada',
        role: 'Developer',
        img: 'scott-estrada-developer.jpg',
        getFullName: getFullName
    },
    {
        firstName: 'Barbara',
        lastName: 'Ramos',
        role: 'Graphic Designer',
        img: 'barbara-ramos-graphic-designer.jpg',
        getFullName: getFullName
    }

];

// console.log(teamArray);

//Stampare in console le informazioni di ogni membro del team (for-in)
for(let teamInfo in teamArray){
    // console.log(teamArray[teamInfo]);

    const teamArrayValue = teamArray[teamInfo];
    // console.log(teamArrayValue);
}

for(let i = 0; i < teamArray.length; i++){
    const personaCorrente = teamArray[i];

    const fullName = personaCorrente.getFullName()
    const role = personaCorrente.role;
    const imgPersona = personaCorrente.img;

    console.log(fullName, role, imgPersona);
}