
const req = require.context('@/assets/svg', false, /\.svg$/).keys()
const svgIcons = req.map(i => {
  return i.match(/\.\/(.*)\.svg/)[1]
})

export default svgIcons