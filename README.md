# Usage
## Get all data
```
/
```
Returns all items and categories as a JSON object:
```json
{
  "items": [{}, {}],
  "categories": ["", ""]
}
```


## Get all items
```
/items
```
Returns all items as an array: `[{}, {}]`.

If none found, returns empty array `[]`.


## Get items by category
```
/items?category[]=<a>&category[]=<b>
```
Returns all items that match **at least one** of the categories received as an array.

If none found, returns empty array `[]`.


## Get items from search query
```
/items?search=<query>
```
Returns all items with titles that match a search query as an array.

If none found, returns empty array `[]`.


## Get item by ID
```
/item/<ID>
```
Returns one item that has the ID specified.

If not found, returns nothing.


## Get categories
```
/categories
```
Returns all categories as an array of strings.


# Running the server locally
1. Install using `$ yarn`
2. `$ yarn start`
3. Make requests to `http://localhost:2428`
