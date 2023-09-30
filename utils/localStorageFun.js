const addToDb = (item) => {
  const db = getDb();
  if (item in db) {
    db[item] += 1;
  } else {
    db[item] = 1;
  }
  saveToDb(db);
};
const saveToDb = (db) => {
  const dbJSON = JSON.stringify(db);
  localStorage.setItem("cart", dbJSON);
};
const removeFromDb = (item) => {
  const db = getDb();
  delete db[item];
  saveToDb(db);
};
const getDb = () => {
  let savedDb = localStorage.getItem("cart");
  if (savedDb) {
    savedDb = JSON.parse(savedDb);
  } else {
    savedDb = {};
  }
  return savedDb;
};
