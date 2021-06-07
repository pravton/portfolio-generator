const profileDataArg = process.argv.slice(2, process.argv.length);

// console.log(profileDataArg);

const printProfileData = profileDataArr => {
    // This ....
    for (let i = 0; i < profileDataArr.length; i++) {
        console.log(profileDataArr[i]);
    }

    console.log('===========================');

    // Is the same as this...
    profileDataArr.forEach((profileItem) => {
        console.log(profileItem);
    });

    profileDataArr.forEach(profileItem => console.log(profileItem));
};



printProfileData(profileDataArg);