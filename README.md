# README

Welcome to [RedwoodJS](https://redwoodjs.com)!

## problem about installation
- use npm to install yarn, want to develop on windows:
``` bash
npm\yarn.ps1 cannot be loaded because running scripts is
**disabled on this system**. For more information, see about_Execution_Policies at
https:/go.microsoft.com/fwlink/?LinkID=135170.

```
- find the method to fixed it :
``` bash
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy Unrestricted
```

- create a rw project
I choose add the ```--typescript```, because my teacher like use it , I just want to copy his code cheerful.
```bash
yarn create redwood-app redwood-hackernews --typescript
```
- cd the path,create a ```yarn.lock``` file,the file will fulled automatic running like a ```package.json``` in npm
```bash
user\redwood-hackernews> yarn install
```
- work up, local:http://localhost:8910/ going well.
```bash
yarn rw dev
```
## study

in fact , I finished the tutorial[Using a Third Party API](https://redwoodjs.com/docs/how-to/using-a-third-party-api), and finished at least 3/4 of [redwood-blog-tutorial](https://redwoodjs.com/docs/tutorial/foreword), but my programme base is shit. so I couldn't gained enough knowledge that is useful to me.

my plan is copy the teacher's work [shynome-rw-hn](https://github.com/shynome-netlify/rw-hn), but how to do it can really learn well from that process?

1. I looking [his commit](https://github.com/shynome-netlify/rw-hn/commits/master) , commit will show his intent to plan.
2. compare the modify about one file.
3. follow his path to make a same repo and commit.

- add the dependence
use yarn not npm, because in [this commit](https://github.com/shynome-netlify/rw-hn/commit/0d4d5b44cf84e7b2e6aec21dfb7b8489b8aa4d30), add fix the ```yarn.lock```. it shows a truth: package manager tool sometimes will make you in trouble.
```bash
yarn add node-fetch
```
***
### add hn api
[first commit about add hn api](https://github.com/shynome-netlify/rw-hn/commit/2ab25f8e9a7381d4d34058ddce9af50119f0715d)， but fixed some type error in [this commit](https://github.com/shynome-netlify/rw-hn/commit/4679089dee7eb4f7b9e68576ff5fced0f8691490) , so I use the second commit files
``` bash
api/src/graphql/hn.sdl.ts
api/src/services/hn/api.ts
api/src/services/hn/hn.ts
api/src/services/hn/hn.test.ts
```
this part have many question.
|file|what|why|
|--|--|--|
|```hn.sdl.ts```|[what is enum](https://www.typescriptlang.org/docs/handbook/enums.html)|why ```kids: [Int]``` use ```[Int]```, but```parts: [String]``` ?|
||[variable type: DateTime](https://www.graphql-scalars.dev/docs/scalars/date-time)|why ```type Query``` like this?|
|```hn.ts```|what is [Promise<Item[]>](https://rexdainiel.gitbooks.io/typescript/content/docs/promise.html)| why this file so hard to understand?|

1. [graphql-schema](https://www.apollographql.com/docs/apollo-server/schema/schema/)
2. [typescript tutorials](https://www.tutorialsteacher.com/typescript)

### add useless model for test
even I didn't know how to use test ,but useless means no harmful.
``` bash
api/db/schema.prisma
```

### remove db deps
only comment two lines out. just like cut the connect to original db and banned own   sentence that is throws this exception when it encounters an error.
```bash
api/src/functions/graphql.ts
```
### add homepage and ItemsCell
add homepage and items component, and modify file, in [commit](https://github.com/shynome-netlify/rw-hn/commit/da342520a18ba3943f0b4844a7e9654782ac4dfb) didn't find the ```Routes.ts```, but I keep it.
``` bash
yarn rw g page home /
yarn rw g cell Items
```
### add ItemCell 
in [add ItemCell commit](https://github.com/shynome-netlify/rw-hn/commit/4f116575b727ca6a617c55449bd7fc49c8657e0c)
``` bash
yarn rw g cell Item
yarn rw g component Item
```




