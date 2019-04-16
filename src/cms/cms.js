import CMS from 'netlify-cms'
import React, { Component } from 'react';

import AboutPagePreview from './preview-templates/AboutPagePreview'
import BlogPostPreview from './preview-templates/BlogPostPreview'
import ProductPagePreview from './preview-templates/ProductPagePreview'
import IndexPagePreview from './preview-templates/IndexPagePreview'

CMS.registerPreviewTemplate('index', IndexPagePreview)
CMS.registerPreviewTemplate('about', AboutPagePreview)
CMS.registerPreviewTemplate('products', ProductPagePreview)
CMS.registerPreviewTemplate('blog', BlogPostPreview)
class CategoriesControl extends Component {
  constructor(props) {
    super(props);
  }
  handleChange = (e) => {
    const value = e.target.value.split(',').map((e) => e.trim());
    this.props.onChange(`<iframe width="560" height="315" src=https://www.youtube.com/embed/${value} frameborder="0 "allow="accelerometer; autoplay; encrypted-media; gyroscope;picture -in -picture" allowfullscreen></iframe >`)
  }

  render() {
    const StringWidget = CMS.getWidget('string').control;
    return (
      <StringWidget
        onChange={this.handleChange}
        {...this.props}
      />
    )
  }
}

const CategoriesPreview = ({ value }) => {
  return (
    <img src={`http://img.youtube.com/vi/${value}/maxresdefault.jpg`} alt="Youtube Video" />
  )
}

CMS.registerWidget('categories', CategoriesControl, CategoriesPreview);