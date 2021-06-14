const doctors = [
    {
        name: 'Boban Sugarevski'
    },
    {
        name: 'Kosta Petrov'
    }
];

const getDoctors = () => {
    console.log('====== getDoctors() function called =====')
    
    // simulacija na zemanje na zapisi od baza
    setTimeout(()=> {
        doctors.forEach(doctor => {
            console.log(`Doctor: ${doctor.name}`);
        })
    }, 1000);
};

const createDoctor = doctor => {
    console.log('===== createDoctor() function called ======');

    //simulacija na zapisuvanje na baza

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            doctors.push(doctor);
            console.log(`Doctor created: ${doctor.name}`);
            resolve(doctor)
        }, 2000);
    });
}


createDoctor({
    name: 'Milenko Nedelkovski'
}).then(doctor => {
    console.log('Promise-ot ni vrati pozirivna potvrda deka e zacuvan doktorot: ', doctor)
    getDoctors();
});
