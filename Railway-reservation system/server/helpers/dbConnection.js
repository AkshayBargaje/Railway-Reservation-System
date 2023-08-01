const mongoose = require("mongoose");

module.exports = () => {
    const self = module.exports;
    return mongoose
        .connect('mongodb+srv://AkshayBargaje:Akshay100@cluster0.pd8rqul.mongodb.net/?retryWrites=true&w=majority', {
            useNewUrlParser: true,
        })
        .then(() => console.log("DB Connected"))
        .catch(err => {
            console.error(
                "Failed to connect to mongo on startup - retrying in 5 sec", err
            );
            setTimeout(self, 5000);
        });
};