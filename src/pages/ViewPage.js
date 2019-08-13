import React from 'react'
import axios from 'axios'
import { Button } from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faComment, faEnvelope  } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core';
// import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';

library.add(faPhone, faComment, faEnvelope
)

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
    const {description} = this.state.item; {/* My Attempt to replace all \n line breaks with <br /> globally*/}
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
                      <p class="title is-5 has-text-left is-size-6-mobile" id="viewTitle">{this.state.item.title}</p>
                    </div>
                    <div className="content">
                      <figure class="image is-1by1">
                        <img width="400" height="400" src={`${process.env.PUBLIC_URL}${this.state.image}`} />
                      </figure>
                    </div>
                    <div className="content">
                      <h3 class="title has-text-left is-size-6-mobile" id="viewDescription">Description</h3>
                      <p class="subtitle has-text-left is-size-7-mobile" id="newDescription">
                          <div dangerouslySetInnerHTML={newDescription} />
                      </p>
                    </div>
                  </div>
                </div>
                <hr />
                <div class="column is-narrow-desktop" id="narrowColumn">
                  <div class="box">
                    <div>
                      <div className="content">
                        <p class=" is-6 has-text-left is-size-6-mobile" id="viewHeader">Price</p>
                        <p class="is-size-7-mobile has-text-left" id="viewPrice">{this.state.item.price}</p>
                      </div>
                      <div className="content">
                        <p class=" is-5 has-text-left is-size-6-mobile" id="viewHeader">Item Condition</p>
                        <p class=" is-5 has-text-left is-size-7-mobile" id="viewItem">{this.state.item.condition}</p>
                      </div>
                      <div className="content">
                        <p class=" is-5 has-text-left is-size-6-mobile" id="viewHeader">Item location</p>
                        <p class=" is-5 has-text-left is-size-7-mobile" id="viewItem">{this.state.item.location}</p>
                      </div>
                      <div className="content">
                        <p class=" is-5 has-text-left is-size-6-mobile" id="viewHeader">Seller</p>
                        <p class=" is-5 has-text-left is-size-7-mobile" id="viewItem">{this.state.item.seller_name}</p>
                      </div>
                    </div>
                    <hr id="separator" />
                    <div>
                      <p class="subtitle is-6" id="adTitle">Interested in the ad? Contact the Seller</p>
                      <div className="content">
                        <div class="buttons are-medium">
                          <a class="button is-outlined is-fullwidth has-text-left" id="phoneBtn"><span className="has-text-left" id="text">
                            <FontAwesomeIcon icon="phone" />
                            {'  '} {this.state.item.phone}</span>
                          </a>
                          <a class="button is-danger is-outlined is-fullwidth has-text-left" id="mailBtn"><span className="has-text-left" id="mail">
                              <FontAwesomeIcon icon="envelope" />
                            {'  '}  Email
                            </span>
                          </a>
                          <a class="button is-danger is-fullwidth" id="chatBtn"><span id="chat">
                            <FontAwesomeIcon icon="faComment" color="white" />
                            {'  '}  Chat
                            </span>
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
