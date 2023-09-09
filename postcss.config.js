module.exports = {
  plugins: [
    require('postcss-import'),
    require('postcss-flexbugs-fixes'),
    require('postcss-preset-env')({
      autoprefixer: {
        flexbox: 'no-2009'
      },
      stage: 3
    })
  ]
}
async function myAsyncFunction() {
  try {
    await asyncFunc()
  } catch (error) {
    handleError(err)
  }
}
