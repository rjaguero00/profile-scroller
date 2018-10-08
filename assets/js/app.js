const data = [
    {
        name: 'John Doe',
        age: 32,
        gender: 'male',
        lookingfor: 'female',
        location: 'Boston MA',
        image: 'https://randomuser.me/api/portraits/men/82.jpg'
    },
    {
        name: 'Jenn Smith',
        age: 26,
        gender: 'female',
        lookingfor: 'male',
        location: 'Miami FL',
        image: 'https://randomuser.me/api/portraits/women/82.jpg'
    },
    {
        name: 'William Johnson',
        age: 38,
        gender: 'male',
        lookingfor: 'female',
        location: 'Lynn MA',
        image: 'https://randomuser.me/api/portraits/men/83.jpg'
    }
];

const profiles = profileInterator(data);

//Call first profile
nextProfile();

//next Event
document.getElementById('next').addEventListener('click', nextProfile);

//Next Profile Display
function nextProfile() {
    const currentProfile = profiles.next().value;

    if (currentProfile !== undefined) {
        document.getElementById('profileDisplay').innerHTML = `
    <ul class="list-group">
        <li class="list-group-item">Name: ${currentProfile.name}</li>
    </ul>
    <ul class="list-group">
        <li class="list-group-item">Age: ${currentProfile.age}</li>
    </ul>
    <ul class="list-group">
        <li class="list-group-item">Location: ${currentProfile.location}</li>
    </ul>
    <ul class="list-group">
        <li class="list-group-item">Preference: ${currentProfile.gender} Looking For ${currentProfile.lookingfor}</li>
    </ul>
    `;

        document.getElementById('imageDisplay').innerHTML = `<img
    src="${currentProfile.image}">`;
    } else {
        //No More profiles 
        window.location.reload();
    }
}

//Profile Iterator
function profileInterator(profiles) {
    let nextIndex = 0;

    return {
        next: function () {
            return nextIndex < profiles.length ?
                { value: profiles[nextIndex++], done: false } :
                { done: true }
        }
    };
}