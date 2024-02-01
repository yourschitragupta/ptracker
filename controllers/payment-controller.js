var paymentModel = require("../models/payment-model");
module.exports = {
  //   createData: (req, res) => {
  //     paymentModel.createData(req?.body, (data) => {
  //       if (data?.affectedRows) {
  //         res.status(201).json({ message: "Added Succesfully" }).send();
  //       } else res.status(500).json({ message: "something went wrong" }).send();
  //     });
  //   },
  readData: (req, res) => {
    paymentModel.readData((data) => {
      res.send({ data: data });
    });
  },
  //   updateData: (req, res) => {
  //     paymentModel.updateData(req?.body, (data) => {
  //       console.log(data);
  //       if (data?.affectedRows) {
  //         res.status(200).json({ message: "Updated Succesfully" }).send();
  //       } else res.status(500).json({ message: "something went wrong" }).send();
  //     });
  //   },
};
