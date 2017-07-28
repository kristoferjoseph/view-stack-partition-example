var stack = require('view-stack')({
  paths: {
    'screens': {
      '/': callback=> {
        return loadjs(['a'], callback)
      },
      '/a': callback=> {
        return loadjs(['a'], callback)
      },
      '/b': callback=> {
        return loadjs(['b'], callback)
      }
    },
    'sheets': {
      '/c': callback=> {
        return loadjs(['c'], callback)
      }
    }
  }
})

stack('/a')
stack('/b')
stack('/c')
document.body.appendChild(stack.element)
