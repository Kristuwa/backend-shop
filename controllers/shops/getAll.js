const { Shop } = require("../../models/shop");

const getAll = async (req, res) => {
  const shops = await Shop.find({}, "-createdAt -updatedAt");
  res.json({
    status: "success",
    code: 200,
    data: {
      result: shops,
    },
  });
};

module.exports = getAll;
