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

const createDoctor = (doctor, cb) => {
    console.log('===== createDoctor() function called ======');

    //simulacija na zapisuvanje na baza 
    setTimeout(() => {
        doctors.push(doctor);
        console.log(`Doctor created: ${doctor.name}`);
        cb();
    }, 2000);
};

createDoctor({
    name: 'Milenko Nedelkovski'
}, getDoctors);

