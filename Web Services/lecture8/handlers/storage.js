const config = require('../pkg/config');
const fs = require('fs');
const strings = require('../pkg/strings');

const cfgApp = config.get('app');

const upload = async (req, res) => {

    if (req.files.document.size > cfgApp.max_filesize) {
        return res.status(400).send('File exceeds max file size');
    }

    if (!cfgApp.allowed_filetypes.includes(req.files.document.mimetype)) {
        return res.status(400).send('Filetype not allowed');
    }

    let userDir = `user_${req.user.uid}`;
    let userDirPath = `${__dirname}/../${cfgApp.upload_dir}/${userDir}`;

    if (!fs.existsSync(userDirPath)) {
        fs.mkdirSync(userDirPath);
    }

    let fileID = strings.makeID(6);
    let fileName = `${fileID}_${req.files.document.name}`;
    let filePath = `${userDirPath}/${fileName}`;
    req.files.document.mv(filePath, err => {
        if (err) {
            console.log(err);
            return res.status(500).send('Internal server error');
        }
        res.status(200).send({ filename: fileName });
    });
};

const download = async (req, res) => {
    let userDir = `user_${req.user.uid}`;
    let userDirPath = `${__dirname}/../${cfgApp.upload_dir}/${userDir}`;
    let filePath = `${userDirPath}/${req.params.filename}`;

    if (!fs.existsSync(filePath)) {
        return res.status(404).send('Not Found');
    }
    res.download(filePath);
};

const getFileList = async (req, res) => {
    try {
        fs.readdir(`${__dirname}/../uploads/user_${req.user.uid}`, (err, files) => {
            if (err) {
                return res.status(400).send(err);
            }
            res.status(200).send(files);
        });
    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
}
const removeFile = async (req, res) => {
    try {
        const filepath = `${__dirname}/../uploads/user_${req.user.uid}/${req.params.filename}`;
        if (!fs.existsSync(filepath)) {
            return res.status(404).send('nof found');
        }
        fs.unlinkSync(filepath);
        res.status(200).send();
    } catch (err) {
        console.log(err);
        return res.status(500).send(err);
    }
}

module.exports = {
    upload,
    download,
    getFileList,
    removeFile
};


// 1 MB = 1024 KB
// 1 KB = 1024 B
