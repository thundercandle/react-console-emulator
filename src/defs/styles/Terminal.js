
export default {
  container: {
    minHeight: '300px',
    maxWidth: '100%', // Fill parent before overflowing
    maxHeight: '100%', // Fill parent before overflowing
    borderRadius: '5px',
    overflow: 'auto',
    cursor: 'text',
    backgroundColor: 'black',
    backgroundSize: 'cover'
  },
  content: {
    padding: '20px',
    height: '100%',
    fontSize: '15px',
    color: 'rgb(0, 122, 223)',
    fontFamily: 'monospace'
  },
  inputArea: {
    display: 'inline-flex',
    width: '100%'
  },
  promptLabel: {
    paddingTop: '3px',
    color: 'rgb(0, 122, 223)'
  },
  inputText: {
    fontSize: '16px',
    color: 'rgb(0, 122, 223)',
    fontFamily: 'monospace'
  },
  input: {
    border: '0',
    padding: '0 0 0 7px',
    margin: '0',
    flexGrow: '100',
    width: '100%',
    height: '22px',
    background: 'transparent',
    outline: 'none' // Fix for outline showing up on some browsers
  }
}
