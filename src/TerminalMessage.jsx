import React, { Component } from 'react'
import html from 'react-inner-html'
import defaults from 'defaults'

import types from './defs/types/TerminalMessage'
import sourceStyles from './defs/styles/TerminalMessage'

export default class TerminalMessage extends Component {
  static propTypes = types

  render () {
    const { content, style, className } = this.props

    const styles = {
      message: defaults(style, sourceStyles)
    }

    if (typeof content === 'string') {
      // this isnt working any more if I use \n in the code
      const lines = content.split('\n')

      return lines
      // this is a fix for a very weird bug
        .filter(line => !line.match('&gt;'))
        .map((line, i, arr) => {
          return this.props.dangerMode
            ? <div className={className} style={styles.message} {...html(line)} key={line[0] + i}/>
            : <div className={className} style={styles.message}>{line}{i < arr.length && <br/>}</div>
        })
    }

    return this.props.dangerMode
      ? <div className={className} style={styles.message} {...html(content)}/>
      : <div className={className} style={styles.message}>{content}</div>
  }
}
