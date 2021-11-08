const MAX_FILESIZE = 1024 * 1024 * 1; // 1 MB
const ALLOWED_FILETYPES = ['image/jpg', 'image/jpeg', 'image/pjpg', 'image/png', 'image/gif'];

const upload = async (req, res) => {
    console.log(req.files);

    if (req.files.document.size > MAX_FILESIZE) {
        return res.status(400).send('File exceeds max file size');
    }

    if (!ALLOWED_FILETYPES.includes(req.files.document.mimetype)) {
        return res.status(400).send('Filetype not allowed');
    }

    let filePath = `${__dirname}/../uploads/${req.files.document.name}`;
    req.files.document.mv(filePath, err => {
        if (err) {
            console.log(err);
            return res.status(500).send('Internal server error');
        }
        res.status(200).send('ok');
    });
};

const download = async (req, res) => {
    res.status(200).send('ok');
};

module.exports = {
    upload,
    download
};