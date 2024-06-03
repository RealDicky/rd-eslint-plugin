

export default function changeToken() {
  return {
    meta: {
      fixable: "code",
    },
    create(context) {
      const sourceCode = context.sourceCode

      function _changeToken (node, comments) {
        comments.forEach((comment) => {
          if (!comment) return
      
          const { value: commentText } = comment
          if (commentText.includes('rd:')) {
            // change token
            if (commentText.includes('ct:')) {
              const tokens =  commentText.split(':').slice(-1)[0].split('->')
              const before = tokens[0].trim()
              const after = tokens[1].trim()
      
              context.report({
                node: node,
                message: 'change token',
                fix: function(fixer) {
                  let result
                  sourceCode.getTokens(node).forEach((token) => {
                    if (token.value === before) {
                      result = fixer.replaceText(token, after)
                    }
                  })
                  return result ?? fixer.remove(comment)
                }
              });
            }
          }
        })
      }


      return {
        FunctionDeclaration (node) {
          _changeToken(node, sourceCode.getCommentsBefore(node))
        },
        ArrowFunctionExpression (node) {
          const firstToken = sourceCode.getTokenBefore(node, { skip: 2 })
          const comments = sourceCode.getCommentsBefore(firstToken)
          console.log({firstToken});
          _changeToken(node, comments)
        }
      }
      
    }
  }
}