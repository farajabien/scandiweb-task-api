module.exports = (sequelize, DataTypes) => {
	const Product = sequelize.define('Product', {
		sku: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
		name: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
		price: {
			type: DataTypes.DECIMAL(10, 2),
			allowNull: false,
			validate: {
				notEmpty: true,
				isDecimal: true,
			},
		},
		productType: {
			type: DataTypes.STRING,
			allowNull: false,
			validate: {
				notEmpty: true,
			},
		},
		weight: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		size: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		width: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		height: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
		length: {
			type: DataTypes.INTEGER,
			allowNull: true,
		},
	})

	return Product
}
