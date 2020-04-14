import Airtable from 'airtable';

const readOnlyApiKey = 'key2a9aPpR6jDvtau';
const appId = 'appKoO9jQuqptnJNk';
const base = new Airtable({ apiKey: readOnlyApiKey }).base(appId);

export const FetchRestaurants = (query) => {
  return base('Restaurants').select({
    // Selecting the first 100 records in Grid view:
    maxRecords: 100,
    view: 'Grid view',
    filterByFormula: `OR(FIND("${query.toLowerCase()}", LOWER({Who are they helping})), FIND("${query.toLowerCase()}", LOWER(City)))`,
  });
};
