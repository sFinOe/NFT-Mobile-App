##react-native-jwt
###React Native compatible JSON Web Token encoder / decoder


This package is essentially just [node-jwt-simple](https://github.com/hokaccha/node-jwt-simple) modified to use [react-native-crypto](https://github.com/mvayngrib/react-native-crypto) and [base-64](https://github.com/mathiasbynens/base64).

## Install
1. First, install [rn-nodeify](https://www.npmjs.com/package/rn-nodeify): `npm install -g rn-nodeify`

2. Then, install [react-native-randombytes](https://github.com/mvayngrib/react-native-randombytes) into your React Native project. Ensure that you import and link it properly as per the installation instructions.

3. Install react-native-jwt itself via `npm install react-native-jwt`

4. After the installation completes, the postinstall script will run `rn-nodeify --install --hack`, which should update your package.json with the necessary browserify shims.

5. Restart your React Native packager process, and you should be able to `require('react-native-jwt')`. Refer to [node-jwt-simple](https://github.com/hokaccha/node-jwt-simple) for further usage instructions. 

## License
MIT