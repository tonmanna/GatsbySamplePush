import React, { Component } from 'react';
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { getFirebase } from '../firebase';

export default class Footer extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const lazyApp = import('firebase/app')
    const lazyDatabase = import('firebase/database')  
    const lazyMessaging = import('firebase/messaging')
    Promise.all([lazyApp, lazyDatabase, lazyMessaging]).then(([firebase]) => {
      const database = getFirebase(firebase).database()
      const messageing = firebase.messaging();
      messageing.requestPermission().then(()=>{
        console.log("Have Permission")
        return messageing.getToken();
      })
      .then((token)=>{
        console.log(token)
      })
      .catch((err)=>{
        console.log('err: ', err);
      })

      messageing.onMessage((payload)=>{
        console.log(payload)
      })
    })
  }
  render(){
    return(
      <Layout>
        <SEO title="Home" />
        <h1>Hi people manood</h1>
        <p>Welcome to your new Gatsby site.</p>
        <p>Now go build something great.</p>
        <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
          <Image />
        </div>
        <Link to="/page-2/">Go to page 2</Link>
      </Layout>
    )
  }
}
