## 🚀 Quick start

Clone the repository

```bash
# clone folder in another name
git clone https://github.com/arkarDL/dsc-partner-template [folder name]
cd [folder name]

# install dependencies
yarn

# start gatsby server
yarn develop

# start storybook
yarn storybook

```

Set environment variables according to _.env.example_

```
SITE_NAME = Example
SITE_URL = http://localhost:8000/

STORYBOOK_PROJECT_NAME = Example
STORYBOOK_PROJECT_URL = http://localhost:8000/
STORYBOOK_PROJECT_LOGO = https://place-hold.it/200x50

GATSBY_STRAPI_URL =
ASSETS_BASE_URL=
STRAPI_TOKEN=
```

### Deploy on [chromatic](https://www.chromatic.com/)

Follow the starter instruction and then you will be able to commit on chromatic with different build

```bash
# example
yarn chromatic
```
