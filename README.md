## has-truthy

Takes an array, returns true if it contains one or more truthy items, otherwise returns false.

### Installation
```bash
npm install --save has-truthy
```

### Usage

```javascript
import hasTruthy from 'has-truthy'

hasTruthy([undefined, false, 'truthy'])
//=> true

hasTruthy([undefined, false])
//=> false

hasTruthy({})
//=> Error: has-truthy expected an array, got "[object Object]". typeof: object
```

### License

This project is licensed under the [MIT License](LICENSE)
