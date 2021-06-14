/**
 * Asynchronous code takes statement outside of the main program flow,
 * allowing the code after the asynchronous call to be executed
 * immediately without waiting.
 */

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
    setTimeout(() => {
        doctors.push(doctor);
        console.log(`Doctor created: ${doctor.name}`);
    }, 2000);
};

createDoctor({
    name: 'Milenko Nedelkovski'
});

getDoctors();