import React from 'react'
import axios from 'axios'
import { Button } from "react-bulma-components/full"
import 'react-bulma-components/dist/react-bulma-components.min.css'

const ViewPage = props => {


      return (
        <>
          <div className="container">
            <div className="notification">
              <div class="columns">
                  <div class="column">
                    <div class="box">
                      <div className="content">
                        <p class="title is-5 has-text-left">Nintendo Switch Neon Joy-Con (1 Year MaxSoft Warranty) + Screen Protector</p>
                      </div>
                      <div className="content">
                        <figure class="image is-1by1">
                          <img src="https://bulma.io/images/placeholders/256x256.png" />
                        </figure>
                      </div>
                      <div className="content">
                        <h3 class="title has-text-danger has-text-left">Description</h3>
                        <p class="subtitle">
                            Do what you never thought possible with Nintendo Switch. Go from single- and multi-player thrills at home, to playing the same title wherever and whenever you want. Simply attach the Joy-Con controllers to the bright, hi-def display and you’re all set. Or detach the controllers and give one to a friend for some on-the-go, local multiplayer action.\n\nIntroducing Nintendo Switch! In addition to providing single and multiplayer thrills at home, the Nintendo Switch system also enables gamers to play the same title wherever, whenever and with whomever they choose. The mobility of a handheld is now added to the power of a home gaming system to enable unprecedented new video game play styles.\n\nWhat is in the box:\n1 x Nintendo Switch console\n1 x Nintendo Switch dock\n1 x Joy-Con (L) and Joy-Con (R)(Blue and red)\n1 x Two Joy-Con strap accessories\n1 x One Joy-Con grip\n1 x HDMI cable\n1 x Nintendo Switch AC adapter\nConsole is 1 year warranty by Maxsoft Malaysia .
                        </p>
                      </div>
                    </div>
                  </div>
                  <div class="column is-narrow">
                    <div class="box">
                      <p class="title is-5">Narrow column</p>
                      <p class="subtitle">This column is only 200px wide.</p>
                      <div className="content">
                          <a class="button is-danger is-outlined is-fullwidth">Outlined</a>
                      </div>
                      <div className="content">
                          <a class="button is-danger is-outlined is-fullwidth">Outlined</a>
                      </div>
                      <div className="content">
                          <a class="button is-danger is-fullwidth">Normal</a>
                      </div>
                      <div class="buttons">
                        <span class="button is-danger is-outlined  is-fullwidth">Save changes</span>
                        <span class="button is-danger is-outlined  is-fullwidth">Save and continue</span>
                        <span class="button is-danger is-fullwidth">Cancel</span>
                      </div>
                      <div class="buttons are-medium">
                        <a class="button is-outlined  is-fullwidth">
                          <span class="icon is-medium">
                            <i class="fab fa-github"></i>
                          </span>
                          <span>GitHub</span>
                        </a>
                        <a class="button  is-outlined  is-fullwidth">Medium</a>
                        <a class="button is-fullwidth">Size</a>
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

export default ViewPage;
