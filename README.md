# experimental: todo mvc -> ember frontend + sails backend

Slight modifications to ember-cli-todos to support a real REST backend using sails.js.

## motivation

Add a real backend to ember-cli-todos which uses mock data. Also slowly make this 100% compliant with emberjs 2.0 when that is released.

If this helps someone out, cool.

## original files

- ember-cli-todos: [link](https://github.com/ember-cli/ember-cli-todos)

## modifications

- backend (new)
- frontend/app/components/todo-checkbox (new)
- frontend/app/components/todo-item/template.hbs
- frontend/app/components/todo-route/components.js:allAreDone -> use get/set per: [link](http://emberjs.com/deprecations/v1.x/#toc_computed-properties-with-a-shared-getter-and-setter)

## usage

frontend:

```
cd frontend
npm install
bower install
ember serve --host `hostname` --proxy http/localhost:3000
```

backend:

```
cd backend
npm install
sails lift
```

browser:

```
elinks http://<host>:4200
```

## FYI: setting up sails to use api ember-data style blueprints

```
cd backend
npm install
npm install --save sails-generate-ember-blueprints
npm install --save lodash
npm install --save pluralize
sails generate ember-blueprints
# finally, set pluralize: true, in: config/blueprints.js
vim config/blueprints.js ...
sails generate api todo
```
