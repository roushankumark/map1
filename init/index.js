const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "663660669b2ce3232c57cdb1",
  }));
  await Listing.insertMany(initData.data);
  console.log("data was initialized");
};

initDB();


addGeometryToEachListing(listings.data)
    .then(updatedListings => initDB(updatedListings))
    .catch(error => console.error('Error:', error));

const initDB = async (initData) => {
    await Listing.deleteMany({});
    initData = initData.map((obj) => ({ ...obj ,  owner: "661cd63c8e61911db30be10c"}));
    await Listing.insertMany(initData);
    console.log("Data was initializing");
};

