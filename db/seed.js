let User = require('../models/User.js');

let newUsers = [
    {
        firstName: 'Darryl',
        lastName: 'Hood',
        email: 'darryl.r.hood@gmail.com',
        occupation:  'software engineer',
        specializations: ['front-end'],
        skills: ['HTML', 'CSS', 'JavaScript'],
        img: "https://cicloposse.com/wp-content/uploads/2016/03/blank-profile-picture-973460_960_720.png",
    },
    {
        firstName: 'Theresa',
        lastName: 'Jones',
        email: 'tjones@nothing.com',
        occupation:  'microbiologist',
        specializations: ['cellular degeneration'],
        skills: ['research', 'cellular degeneration mapping', 'degeneration reversal'],
        img: "https://cicloposse.com/wp-content/uploads/2016/03/blank-profile-picture-973460_960_720.png",
    },
    {
        firstName: 'Thomas',
        lastName: 'Dodd',
        email: 'dr.thomas@medwatch.com',
        occupation:  'general practitioner',
        specializations: ['pediatrics', 'abnormal growth'],
        skills: ['correction of growth issues', 'general medicine'],
        img: "https://cicloposse.com/wp-content/uploads/2016/03/blank-profile-picture-973460_960_720.png",
    }
]

User.deleteMany().then (() => {
    User.create(newUsers).then(users => {
    console.log('Saved Users', users)
    });
  });
  