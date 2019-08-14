import React from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import { Button } from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'

class ListPage extends React.Component {
  state = {
    items: [],
  }

  componentDidMount = async (e) => {
    const response = await axios.get('http://5b35ede16005b00014c5dc86.mockapi.io/list')
      .then(response => {
        this.setState({
          items: response.data.data
        })
        console.log(response.data.data);
      })
    .catch(error => {
      console.log('ERROR: ', error)
    })
  }

  render() {

      return (
        <>
          <div className="container" id="containerListview">
            <div className="content" id="notiStyle">
              <div className="columns is-multiline is-mobile">
                  {
                    this.state.items.map(item =>
                      <div className="column box is-2 is-one-third-mobile is-one-third-tablet is-one-third-desktop" id="box">
                        <div className="media-center">
                          <Link to={`/pages/viewpage/${item.id}`}>
                            <figure className="image is-120x50">
                              <img width="140" height="80" src={`${process.env.PUBLIC_URL}${item.attributes.links.image}`} />
                            </figure>
                          </Link>
                        </div>
                        <div className="content">
                          <p href="#" className="subtitle has-text-black-ter" id="title"><span class="text-center">{item.attributes.title}</span></p>
                        </div>
                        <div className="content">
                          <p href="#" className="title is-6 is-white"><span class="text-center" id="price">{item.attributes.price}</span></p>
                        </div>
                      </div>
                    )
                  }
              </div>
            </div>
          </div>
        </>
      )
  }
}

export default ListPage;
