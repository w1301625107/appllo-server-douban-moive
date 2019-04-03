const {
  gql
} = require('apollo-server');

const typeDefs = gql `
  type MovieSimplePhotos {
    "图片 id"
    id:String

    "图片展示页 url"
    alt:String

    "图片地址，icon 尺寸"
    icon:String

    "图片地址，image 尺寸"
    image:String

    "图片地址，thumb 尺寸"
    thumb:String

    "图片地址，cover 尺寸"
    cover:String
}
`
export default typeDefs