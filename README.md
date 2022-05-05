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

1. I looking the commit , commit will show his intent to plan.
2. compare the modify about one file.
3. follow his path to make a same repo and commit.




