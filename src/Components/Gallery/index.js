import React, { Component } from 'react'
import Unsplash, { toJson } from 'unsplash-js'
import { connect } from 'react-redux'
import { addNewItem } from '../../store/actions/index'

const unsplash = new Unsplash({
  applicationId:
    '98ef11d7b65860bef0855a30c273987df30bbeb6c1d57243ae8c6772fa59c97e',
  secret: 'b170bf358bdd93d5f162f6bcefd470ed031232bfecab8abf54d23400e301db36',
  callbackUrl: 'http://localhost:3000/callback',
})

class Gallery extends Component {
  constructor() {
    super()
    this.getPhoto = this.getPhoto.bind(this)
  }

  getPhoto() {
    unsplash.photos
      .getRandomPhoto(400, 400)
      .then(toJson)
      .then(json => {
        this.props.addNewItem(json)
      })
  }

  render() {
    return (
      <section className="gallery-wrapper">
        <button
          className="gallery-btn btn btn-outline-primary waves-effect"
          onClick={this.getPhoto}
        >
          Add new image
        </button>
        <div className="gallery">
          {this.props.store.images.map((image, id) => (
            <img
              key={image.id + id}
              src={image.urls.small}
              alt={image.user.name}
            />
          ))}
        </div>
      </section>
    )
  }
}

const mapDispatchToProps = {
  addNewItem,
}

const mapStateToProps = state => ({ store: state })

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Gallery)
