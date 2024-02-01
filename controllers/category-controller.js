var categoryModel = require("../models/category-model");
module.exports = {
  readData: (req, res) => {
    categoryModel.readData((data) => {
      res.send({ data: data });
    });
  },
  // deleteData: (req, res) => {
  //   categoryModel.deleteData(req?.params?.id, (data) => {
  //     if (data?.affectedRows) res.send({ message: "Deleted successfulyy" });
  //     else res.status(404).json({ message: "record not found" }).send();
  //   });
  // },
  // createData: (req, res) => {
  //   categoryModel.createData(req?.body, (data) => {
  //     if (data?.affectedRows) res.send({ message: "Added successfulyy" });
  //     else res.status(500).json({ message: "something went wrong" }).send();
  //   });
  // },
};
