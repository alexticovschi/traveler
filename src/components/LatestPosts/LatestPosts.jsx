import React from "react"
import Title from "../Title/Title"
import LatestPostCard from "../LatestPostCard/LatestPostCard"
import { useStaticQuery, graphql } from "gatsby"
import "./latestPosts.scss"

const getPosts = graphql`
  query {
    posts: allContentfulPost(
      limit: 4
      sort: { fields: published, order: DESC }
    ) {
      edges {
        node {
          published(formatString: "D M Y")
          title
          intro
          slug
          id: contentful_id
          image {
            fluid {
              ...GatsbyContentfulFluid
            }
          }
        }
      }
    }
  }
`

const LatestPosts = () => {
  const response = useStaticQuery(getPosts)
  const posts = response.posts.edges
  return (
    <section className="section-latest-posts mt">
      <div className="latest-posts">
        <Title title="Latest Posts from Blog" />

        <div className="grid-container">
          <section className="posts">
            {posts.map(({ node }) => (
              <LatestPostCard key={node.id} post={node} />
            ))}
          </section>
        </div>
      </div>
    </section>
  )
}

export default LatestPosts
