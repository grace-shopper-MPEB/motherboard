import React from 'react'
import ReactDOM from 'react-dom'
import {configure, shallow} from 'enzyme'
import {expect} from 'chai'
import SingleProduct from './SingleProduct'
import Adapter from 'enzyme-adapter-react-16'

configure({adapter: new Adapter()})

describe('SingleProduct component testing', () => {
  it('renders a single product', () => {
    const {wrapper} = shallow(
      <SingleProduct
        location={{pathname: '/products/1'}}
        products={{
          product: {
            id: 1,
            imgUrl: 'https://i.imgur.com/qAv2sUQ.jpg',
            genre: 'pop',
            artist: 'Rosemaria Lemmen',
            albumTitle: 'tempor turpis nec',
            description:
              'Proin at turpis a pede posuere nonummy. Integer non velit. Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec pharetra, magna vestibulum aliquet ultrices, erat tortor sollicitudin mi, sit amet lobortis sapien sapien non mi. Integer ac neque.',
            price: 23.26,
            retailPrice: 20.58,
            sku: '350856649-8',
            stock: 117
          }
        }}
      />
    )
    expect(wrapper.exists()).toBe(true)
  })
})
