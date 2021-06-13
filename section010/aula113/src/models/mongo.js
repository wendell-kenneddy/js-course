const { MongoClient } = require('mongodb');
const client = new MongoClient(process.env.URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

module.exports = {
  async run() {
    try {
      await client.connect();
      console.log('Connected to the database.');
    } catch (error) {
      console.log(error);
    }
  },

  getDbAndCol(db, col) {
    if (!db) return;

    return typeof col !== 'undefined'
      ? client.db(db).collection(col)
      : client.db(db);
  }
};
