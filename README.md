# minted-frontend-boilerplate

This is a minimal boilerplate that should allow a Minted developer to create an App-Renderer compatible application through the microfrontend cdn flow. 

IMPORTANT: Webpack configurations
This repository has three webpack configs, client, server and appRendererServer that create their respective bundles. Server is the only bundle required for this repository, as the server bundle builds out the client bundle. appRendererServer is a specialized bundle that is tailored toward App-r so it will correctly render the serverside bundle. 

### Installing

```
yarn install
```

You will need to create an `.npmrc` file for local developement. You can copy over the one that should be in your [minted](https://github.com/minted/minted) or [app-renderer](https://github.com/minted/app-renderer) repos. The contents should look like:

```
_auth=XXXXXXXXXXXXXXXXXXXXXX
always-auth=true
registry=https://nexus.mntd.net/repository/npm-minted-group/
```

## Development

```
$ nvm use
$ yarn install
$ yarn build-server
$ yarn dev
```

This will launch a locally-running server at [`http://localhost:3001`](http://localhost:3001)

## Developing locally with App-renderer [TEMPORARY IMPLEMENTATION]

You will have to follow the steps below to get your repo rendered locally by app-renderer.

* Build out serverside and app-renderer-server bundles

```
$ yarn build-server 
```

* Navigate to `appEntries.js` in app-renderer repo and choose an appEntries `localBundlePath:` to replace with the location of your app-renderer-server bundle. 

Example replacement below: Footer
```
Before: 
  'footer': {
    clientEntrypoint: './src/applications/footer/clientEntrypoint.js',
    localBundlePath: './build/clients/footer/server.js',
    serverEntrypoint: './src/applications/footer/routes/index.js',
    version: '1.1.1',
  },

After: 
  'footer': {
    clientEntrypoint: './src/applications/footer/clientEntrypoint.js',
    localBundlePath: '../minted-frontend-boilerplate/build/appRendererServerBundle.js', <- Example location
    serverEntrypoint: './src/applications/footer/routes/index.js',
    version: '1.1.1',
  },
```

* Make sure to have cdn_micro_frontends = B as a cookie in your browser. Set the domain to be .mntd.net to work for both `http://app-renderer-devxenial.mntd.net/....` and `https://web-devxenial.mntd.net/...` url paths.

* Now if you navigate to `http://app-renderer-devxenial.mntd.net/render/footer` you will see your new repos application.
    Note: To have your JS working in `http://app-renderer-devxenial.mntd.net/render/footer` you will need to run this repos server with `yarn dev` 

* To view any new code changes on `http://app-renderer-devxenial.mntd.net/render/footer` you will need to rebuild the app-renderer-server bundle and manually refresh the app-renderer page. 
