import React from 'react'


export default class GalleryList extends React.Component {

	render() {

		return (
			<ul className="galleryContent">

				{
					this.props.listado.map((gallery) => {

						return
							{gallery.id}

					})

				}

			</ul>

		)

	}

}