const { gql } = require('apollo-server');

const typeDefs = gql `
  type CommentRating{
      "最低评分"
      min:Int

      "最高评分"
      max:Int

      "评分"
      value:Int
  }
`
export default typeDefs
