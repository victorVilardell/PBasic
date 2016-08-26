import React from 'react'
import GalleryList from '../gallery-list/index.jsx'
import style from './index.scss'

export default class Gallery extends React.Component {

	constructor(props) {
		super(props)
		this.state = { gallery: [] }
	}

	componentWillMount() {

		fetch('https://api.flickr.com/services/rest/?method=flickr.galleries.getPhotos&name=value&format=json&asinc=1&api_key=aed656c0441370035c9c6e23ddb2c471&gallery_id=9634-72157621980433950&extras=description,owner_name&jsoncallback=?')
		.then((response) => {
			return response
		})
		.then((properties) => {
			this.setState({ gallery:properties.photo })
		})

		console.log(this.state.gallery)

	}

    render() {

    	return (
			<section>
	    		<GalleryList imgs={this.state.gallery} />
	    	</section>
    	)

    }
}