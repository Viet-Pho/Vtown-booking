# Welcome to our coding convention!

## Specification
1. Take a notice when you write specification<br>
Summary will be used to describe API and description to describe possible case
```
summary: Create a new account
description: Describe possible case of API unless let it blank
```

## Helpers
Helpers files must be pure functions and not interact with other third-party service or database

## Coding
1. Importer<br>
Using `export default` instead of `module.exports`<br>
Using `export { functionA, functionB }` instead of `export function functionA`

2. If-blocks<br>
Avoid to using too much if-blocks in your code. Try to make it more readability like that

Ugly code:
```
if (condition1) {  
    // Do something
    if (condition2) {  
      // Do something
      if (condition3) {
        // Do something
        return res.send(data)
      }  
      return res.sendStatus(404)  
    }  
    return res.sendStatus(401)  
  }
  return res.sendStatus(400)
}  
```
Awesome Code:
```
  if (!condition1) return res.sendStatus(400)  
  // Do something
  if (!condition2) return res.sendStatus(401)  
  // Do something
  if (!condition3) return res.sendStatus(404)  
  // Do something
  return res.send(data)
```

3. One function handle one problem at a time

Ugly Code: 
```
export default async (req, res) => {  
  // Show your love to person A
  // Show your love to person B
  // Show your love to person C
}
```
Awesome Code:
```
export default async (req, res) => {
  lovePersonA()  
  lovePersonB()  
  lovePersonC()  
}  
const lovePersonA = () => {}  
const lovePersonB = () => {}  
const lovePersonC = () => {}  
export { lovePersonA, lovePersonB } // export who you want to love
```

4. Reuse other functions<br>
Import and execute other functions through `execute` (declared in util.js) like making a request to an API. Example
```
  import getUser from '@routes/users/_userId/get.js'  
  const existUser = await execute(getUser, { params: { userId } })  
  if (existUser.status === 404 || !existUser.body) return res.sendStatus(404)
```
