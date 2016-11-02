'use strict'
import React from 'react'
import ReactDOM from 'react-dom'
import immstruct from 'immstruct'
import h from 'react-hyperscript'
import IssueEditor from 'IssueEditor.js'
import IssueList from 'IssueList.js'
import RepositoryList from 'RepositoryList.js'
// import repos from '../sample-data/repository-response.js'

require('../scss/style.scss')
require('file?name=index.html!../index.html')

let state = immstruct({
  issue: {},
  issueList: {},
  repositoryList: {}
})

// Main render cycle
state.on('swap', (newStructure, oldStructure, keyPath) => {
  console.log('Subpart of structure swapped.')
  console.log('keyPath:', keyPath)
  console.log('Old structure:', oldStructure.toJSON())
  console.log('New structure:', newStructure.toJSON())
  render()
})

class IssueTracker extends React.Component { // move to corresponding file
  render () {
    let issue = state.cursor('issue').toJS()
    let issueList = state.cursor('issueList').toJS()
    let repositoryList = state.cursor('repositoryList').toJS()
    if (issue) {
      return h(IssueEditor, {issue: issue})
    } else if (issueList) {
      return h(IssueList, {issueList: issueList})
    } else {
      return h(RepositoryList, {repositoryList: repositoryList})
    }
    /*
    let repoList = reposToRender.map((elem, index) => {
      return h(RepositoryList, {name: elem.name, description: elem.description, id: elem.id, index: index, handleClick: that.handleClick})
    })
    return h('div.repo-list', repoList)
    */
  }
}

function render () {
  ReactDOM.render(h(IssueTracker), document.getElementById('hello-world'))
}
render()
