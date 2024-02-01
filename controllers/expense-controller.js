var expenseModel = require("../models/expense-model");
module.exports = {
  createData: (req, res) => {
    expenseModel.createData(req?.body, (data) => {
      if (data?.affectedRows) {
        res.status(201).json({ message: "Added Succesfully" }).send();
      } else res.status(500).json({ message: "something went wrong" }).send();
    });
  },
  readData: (req, res) => {
    expenseModel.readData((data) => {
      res.send({ data: data });
    });
  },
  updateData: (req, res) => {
    expenseModel.updateData(req?.body, (data) => {
      if (data?.affectedRows) {
        res.status(200).json({ message: "Updated Succesfully" }).send();
      } else res.status(500).json({ message: "something went wrong" }).send();
    });
  },
  specificData: (req, res) => {
    expenseModel.specificData(req?.params?.query, (data) => {
      res.send({ data: data });
    });
  },
  daySummary: (req, res) => {
    expenseModel.daySummary(req?.params?.query, (data) => {
      res.send({ data: data });
    });
  },
  catSummary: (req, res) => {
    expenseModel.catSummary((data) => {
      res.send({ data: data });
    });
  },
  frequentData: (req, res) => {
    expenseModel.frequentData((data) => {
      res.send({ data: data });
    });
  },
};
