import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
// import ImageDesktop from '../../static/img/home.png'
// import ImageResponsive from './../img/640x360.png'

export const VideosPageTemplate = ({
  title,
  content,
  contentComponent
}) => {
  const PageContent = contentComponent || Content

  return (
    <section className="section section--gradient">
      <div className="container">
        <div className="columns">
          <div className="column is-10 is-offset-1">
            <div className="section">
              <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                {title}
              </h2>
              <PageContent className="content" content={content} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

VideosPageTemplate.prototypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const VideosPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <VideosPageTemplate
        content={post.html}
        title={post.frontmatter.title}
        contentComponent={HTMLContent}
      />
    </Layout>
  )
}

VideosPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default VideosPage

export const videosPageQuery = graphql`
  query VideosPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
      }
    }
  }
`
