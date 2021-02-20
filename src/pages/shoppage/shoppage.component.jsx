import React, { Component } from 'react'
import CollectionPreview from '../../components/preview-collection/collection-preview.compenent'

import './shoppage.styles.scss'

import SHOP_DATA from './shop.data'

class Shoppage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      collections: SHOP_DATA,
    }
  }
  render() {
    const { collections } = this.state
    return (
      <div className='shop-page'>
        {collections.map(({ id, ...collectionProps }) => (
          <CollectionPreview key={id} {...collectionProps} />
        ))}
      </div>
    )
  }
}

export default Shoppage
