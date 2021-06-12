const fs = require('fs');

const writeFile = fileContent => {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            // if there is an error log an error
            if (err) {
                reject(err);
                return;
            }

            // If everything went well, resolve the promise
            resolve({
                ok: true,
                message: 'File Created'
            });
        });
    });
};

const copyFile = () => {
    return new Promise((resolve, reject) => {
        fs.copyFile('./src/style.css', './dist/style.css', err => {
            if (err) {
                reject(err);
                return;
            }

            resolve({
                ok: true,
                message: 'CSS File Copied'
            });
        });
    });
};

module.exports = { writeFile, copyFile };