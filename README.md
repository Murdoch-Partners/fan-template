# Run expo and tamagui

## Config
`
node: > 18.0.0
`

## Commands

### Start Expo
`npm run start`

### Start IOS
`npm run ios`

### Start Android
`npm run android`

### Start Web
`npm run web`

### Update Tamagui
`npm run upgrade:tamagui`

### Clear cache
`
rm -rf node_modules   \
npm cache clean --force  \
npm install \
watchman watch-del-all del %localappdata%Temphaste-map-* del %localappdata%Tempmetro-cache \
`
