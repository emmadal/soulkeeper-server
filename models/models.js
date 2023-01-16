const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PWD,
  {
    host: process.env.DB_HOST,
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000,
    },
  },
);

const Entreprise = sequelize.define(
  'entreprise',
  {
    identreprises: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      unique: true
    },
    capture: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nomentreprise: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nomresponsable: {
      type: DataTypes.STRING,
      allowNull: false
    },
    numero: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    nomresponsabletwo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    numerotwo: {
      type: DataTypes.STRING,
      allowNull: true
    },
    emailtwo: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    idville: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true
    },
    dateenregistrement: {
      type: DataTypes.DATE,
      allowNull: false
    },
    login: {
      type: DataTypes.STRING,
      allowNull: false
    },
    expediteur: {
      type: DataTypes.STRING,
      allowNull: true
    },
    role: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  },
  {
    tableName: 'entreprise',
    freezeTableName: true,
    timestamps: false
  }
);

const Pointage = sequelize.define(
  'pointage',
  {
    idpointage: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      unique: true
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false
    },
    idmembres: {
      type: DataTypes.BIGINT,
      allowNull: false
    },
    idculte: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    identreprises: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  },
  {
    tableName: 'pointage',
    freezeTableName: true,
    timestamps: false
  }
);

const Membres = sequelize.define(
  'membres',
  {
    idmembres: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      unique: true
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false
    },
    prenoms: {
      type: DataTypes.STRING,
      allowNull: false
    },
    contact: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    date_naissance: {
      type: DataTypes.STRING,
      allowNull: false
    },
    autre_contact: {
      type: DataTypes.STRING,
      allowNull: true
    },
    quartier: {
      type: DataTypes.STRING,
      allowNull: false
    },
    idprofession: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    dateenregistre: {
      type: DataTypes.DATE,
      allowNull: true
    },
    genre: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    identreprises: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idcommune: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idville: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idpays: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  },
  {
    tableName: 'membres',
    freezeTableName: true,
    timestamps: false
  }
);

const Culte = sequelize.define(
  'culte',
  {
    idculte: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      unique: true
    },
    libelle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    identreprises: {
      type: DataTypes.INTEGER,
      allowNull: true
    }
  },
  {
    tableName: 'culte',
    freezeTableName: true,
    timestamps: false
  }
);

const Ville = sequelize.define(
  "villes",
  {
    idville: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      unique: true,
    },
    libelle: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    identreprises: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    idpays: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
  },
  {
    tableName: "villes",
    freezeTableName: true,
    timestamps: false,
  },
);

const Commune = sequelize.define(
  'commune',
  {
    idcommune: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      unique: true
    },
    libelle: {
      type: DataTypes.STRING,
      allowNull: false
    },
    identreprises: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    idville: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  },
  {
    tableName: 'commune',
    freezeTableName: true,
    timestamps: false
  }
);

const Pays = sequelize.define(
  'pays',
  {
    idpays: {
      type: DataTypes.SMALLINT,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
      unique: true
    },
    code: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    alpha2: {
      type: DataTypes.STRING,
      allowNull: false
    },
    alpha3: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nom_en_gb: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nom_fr_fr: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    tableName: 'pays',
    freezeTableName: true,
    timestamps: false
  }
);

const testConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
testConnection();

exports.Entreprise = Entreprise;
exports.Pointage = Pointage;
exports.Membres = Membres;
exports.Culte = Culte;
exports.Ville = Ville;
exports.Commune = Commune;
exports.Pays = Pays;


