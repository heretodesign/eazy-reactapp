import React from 'react'
import axios from 'axios'
import { Button } from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'

class ViewPage extends React.Component {
  state = {
    item: null
  }

  componentDidMount() {
    axios.get(`http://5b35ede16005b00014c5dc86.mockapi.io/view/${this.props.match.params.id}`)
    .then(result => {
      console.log(result)
      this.setState({
        item: result.data.data.attributes,
        image: result.data.links.image
      })
    })
  }

  render() {
    if (!this.state.item) return 'Loading...'
    const {description} = this.state.item; {/* Attempt to replace all \n line breaks with <br /> globally*/}
    const newDescription = {
      __html: description.replace(/\n|\\n/g, "<br/>")
    }
    return (
      <>
        <div className="container">
          <div className="notification">
            <div class="columns">
                <div class="column">
                  <div class="box">
                    <div className="content">
                      <p class="title is-5 has-text-left">{this.state.item.title}</p>
                    </div>
                    <div className="content">
                      <figure class="image is-1by1">
                        <img width="400" height="400" src={`${process.env.PUBLIC_URL}${this.state.image}`} />
                      </figure>
                    </div>
                    <div className="content">
                      <h3 class="title has-text-danger has-text-left">Description</h3>
                      <p class="subtitle has-text-left">
                          <div dangerouslySetInnerHTML={newDescription} />
                      </p>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="column is-narrow">
                  <div class="box">
                    <div>
                      <div className="content">
                        <p class=" is-6 has-text-left">Price</p>
                        <p class="has-text-danger is-5 has-text-left">{this.state.item.price}</p>
                      </div>
                      <div className="content">
                        <p class=" is-5 has-text-left">Item Condition</p>
                        <p class=" is-5 has-text-left">{this.state.item.condition}</p>
                      </div>
                      <div className="content">
                        <p class=" is-5 has-text-left">Item location</p>
                        <p class=" is-5 has-text-left">{this.state.item.location}</p>
                      </div>
                      <div className="content">
                        <p class=" is-5 has-text-left">Seller</p>
                        <p class=" is-5 has-text-left">{this.state.item.seller_name}</p>
                      </div>
                    </div>
                    <hr />
                    <div>
                      <p class="subtitle is-6">Interested in the ad? Contact the Seller</p>
                      <div className="content">
                        <div class="buttons are-medium">
                          <a class="button is-danger is-outlined is-fullwidth">
                            <i class="fas fa-phone-alt"></i>
                            {this.state.item.phone}
                          </a>
                          <a class="button is-danger is-outlined is-fullwidth">
                            <i class="fas fa-comment-alt"></i>
                            Email
                          </a>
                          <a class="button is-danger is-fullwidth">
                            <i class="fas fa-comment-alt"></i>
                            Chat
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="columns">
                <div class="column">
                <div className="content">
                  <p class="title is-5 has-text-left">Similar Items</p>
                </div>
                <div className="column box is-2" id="box">
                  <div className="media-center">
                    <figure className="image is-120x50">
                      <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image" />
                    </figure>
                  </div>
                  <div className="content">
                    <p href="#" className="subtitle has-text-black-ter" id="title"><span class="text-center">
                    Nintendo Switch Neon Joy-Con (1 Year MaxSoft Warranty) + Screen Protector</span></p>
                  </div>
                  <div className="content">
                    <p href="#" className="title is-6 is-white"><span class="text-center">RM 1,289</span></p>
                  </div>
                </div>
                </div>
              </div>
          </div>
        </div>
      </>
    )
  }
}

export default ViewPage;
