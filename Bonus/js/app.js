///FUNZIONI///
function getFullName() {
	// console.log(this)
	const firstName = this['firstName']
	const lastName = this.lastName
	return `${firstName} ${lastName}`
}

function isImg(immagine){
    const imgElementCreate = document.createElement('img');
    console.log(imgElementCreate);

    imgElementCreate.src = immagine;
}

//Creiamo un array di oggetti e forniamo le seguenti informazioni (nome, ruolo, img)
const persona = {
    firstName: 'Wayne',
    lastName: 'Barnett',
    role: 'Founder & CEO',
    img: './img/wayne-barnett-founder-ceo.jpg',
    getFullName: getFullName
};

const teamArray = [
    persona,
    {
        firstName: 'Angela',
        lastName: 'Caroll',
        role: 'Chief Editor',
        img: './img/angela-caroll-chief-editor.jpg',
        getFullName: getFullName
    },
    {
        firstName: 'Walter',
        lastName: 'Gordon',
        role: 'Office Manager',
        img: './img/walter-gordon-office-manager.jpg',
        getFullName: getFullName
    },
    {
        firstName: 'Angela',
        lastName: 'Lopez',
        role: 'Social Media Manager',
        img: './img/angela-lopez-social-media-manager.jpg',
        getFullName: getFullName
    },
    {
        firstName: 'Scott',
        lastName: 'Estrada',
        role: 'Developer',
        img: './img/scott-estrada-developer.jpg',
        getFullName: getFullName
    },
    {
        firstName: 'Barbara',
        lastName: 'Ramos',
        role: 'Graphic Designer',
        img: './img/barbara-ramos-graphic-designer.jpg',
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

//Stampare nel DOM le informazioni di ogni membro del team

const rowElement = document.querySelector('.row');

for(let i = 0; i < teamArray.length; i++){
    const personaCorrente = teamArray[i];

    const fullName = personaCorrente.getFullName()
    const role = personaCorrente.role;
    const imgPersona = personaCorrente.img;

    console.log(fullName, role, imgPersona);

    const card = 
    `
    <div class="col-4">
        <div class="card">
        <img src="${imgPersona}" alt="img-team">
            <div class="text-info-card">
                <div class="name">
                    ${fullName}
                </div>
                <div class="role">
                    ${role}
                </div>
            </div>
        </div>
    </div>
    `

	rowElement.innerHTML += card
}
