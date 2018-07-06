import React, { Component } from 'react'
import { connect } from 'react-redux'

import { Creators } from '@redux/actions'

import { Dialog as DialogComponent } from '@components/UI/Dialog'

class Dialog extends Component{  
  render() {
    return (
      <DialogComponent></DialogComponent>
    )
  }
}

const mapStateToProps = state => ({
  headerTitle: state.headerTitle,
  body: state.body
})

const mapDispatchToProps = dispatch => ({
  showDialog: (headerTitle, body) => dispatch(Creators.showDialog(headerTitle, body))
})

export default connect(mapStateToProps, mapDispatchToProps)(Dialog)