const { Order } = require("../../models/order");

const addToBasket = async (req, res) => {
	const result = await Order.create(req.body);
	res.status(201).json({
	  status: "success",
	  code: 201,
	  data: {
		 result,
	  },
	});
};

module.exports = addToBasket;
