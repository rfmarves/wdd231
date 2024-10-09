// Grab the entire URL for this page including the attached GET values
const currentUrl = window.location.href;
// console.log(currentUrl);

// Divide the URL into two halves
// const everything=currentUrl.split('?');
// console.log(everything);

// Grab just the second half
// let formData = everything[1];
// console.log(formData);

// Break the form name value pairs into an array
// formData = formData.split('&');
// console.log(formData);

// Do the same in less staments
formData = currentUrl.replaceAll('%40','@').split('?')[1].split('&');
// console.log(formData);

function show(cup) {
    // console.log(cup);
    formData.forEach(element => {
        // console.log(element);
        if (element.startsWith(cup)) {
            result=element.split('=')[1].replaceAll('+',' ');
        }
    });
    return(result);
}

const showInfo = document.querySelector('#results');
showInfo.innerHTML = `
<p>Appointment for ${show('first')} ${show('last')}</p>
<p>Proxy ${show('ordinance')} on ${show('date')} in the ${show('location')}</p>
<p>Your Phone: ${show('phone')}<p>
<p> Your Email: <a href="mailto:${show('email')}">${show('email')}</a>`;


show('phone');

// let dataPairs = {};
// formData.forEach(element => {
//     let pair = element.split('=');
//     dataPairs[`${pair[0]}`] = `${pair[1]}`;
// });

// console.log(dataPairs);

