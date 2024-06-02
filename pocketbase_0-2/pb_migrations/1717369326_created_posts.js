/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "l7fam9aj1l9bekt",
    "created": "2024-06-02 23:02:06.433Z",
    "updated": "2024-06-02 23:02:06.433Z",
    "name": "posts",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "kveijil7",
        "name": "field",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("l7fam9aj1l9bekt");

  return dao.deleteCollection(collection);
})
