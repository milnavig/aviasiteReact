const sequelize = require('../db');

const {DataTypes} = require('sequelize');

const User = sequelize.define('user', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
    },
    email: {
        type: DataTypes.STRING, unique: true
    },
    password: {
        type: DataTypes.STRING
    },
    username: {
        type: DataTypes.STRING, unique: true
    },
    role: {
        type: DataTypes.STRING,
        defaultValue: 'USER'
    },
    isActivated: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    },
    activationLink: {
        type: DataTypes.STRING
    },
});

const Post = sequelize.define('post', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
    },
    headline: {
        type: DataTypes.STRING
    },
    description: {
        type: DataTypes.STRING
    },
    body: {
        type: DataTypes.TEXT
    },
    img: {
        type: DataTypes.STRING, allowNull: false
    },
    timestamp: {
        type: DataTypes.DATE, defaultValue: DataTypes.NOW
    },
});

const Tag = sequelize.define('tag', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
    },
    name: {
        type: DataTypes.STRING, unique: true, allowNull: false
    }
});

const Basket = sequelize.define('basket', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
    }
});

const BasketProduct = sequelize.define('basket_product', {
    id: {
        type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true
    }
});

const Product = sequelize.define('product', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, unique: true, allowNull: false},
    description: {type: DataTypes.STRING},
    price: {type: DataTypes.INTEGER, allowNull: false},
    rating: {type: DataTypes.INTEGER, defaultValue: 0},
    img: {type: DataTypes.STRING, allowNull: false},
});

const Rating = sequelize.define('rating', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    rate: {type: DataTypes.INTEGER, allowNull: false},
});

const Comment = sequelize.define('comment', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    text: {type: DataTypes.STRING, allowNull: false},
    timestamp: {type: DataTypes.DATE, defaultValue: DataTypes.NOW},
});

const PostTag = sequelize.define('post_tag', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
});

/*
const Token = sequelize.define('token', {
    refreshToken: {type: DataTypes.STRING, allowNull: false},
});
*/

User.hasOne(Basket);
Basket.belongsTo(User);

User.hasMany(Rating);
Rating.belongsTo(User);

Basket.hasMany(BasketProduct);
BasketProduct.belongsTo(Basket);

Product.hasMany(Rating);
Rating.belongsTo(Product);

Product.hasMany(BasketProduct);
BasketProduct.belongsTo(Product);

Product.hasMany(Comment);
Comment.belongsTo(Product);
User.hasMany(Comment);
Comment.belongsTo(User);

Tag.belongsToMany(Post, {through: PostTag });
Post.belongsToMany(Tag, {through: PostTag });

/*
User.hasOne(Token);
Token.belongsTo(User);
*/

module.exports = {
    User,
    Basket,
    Rating,
    Comment,
    Post,
    Tag,
    PostTag
}