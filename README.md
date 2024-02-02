# Ruby on Rails Sample Application

This is the sample application for Ruby on Rails

## Requirements

* ruby on rails: 7.x

## Getting Started

To get started with the app, clone the repo and then install
the needed gems:

```bash
$ bundle config set path 'vendor/bundle'
```

```bash
$ bundle install --without production
```

Next migrate the database:

```bash
$ rails db:migrate
```

Finally, run the test suit to verify that everything is working
correctly:

```bash
$ rails test
```

If the test suite passes, you'll be ready to run the app in a
local server:

```bash
$ rails server
```
