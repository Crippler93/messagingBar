export default {
  openapi: '3.0.1',
  info: {
    version: '1.0.0',
    title: 'Messaging-bar',
    description: 'Messaging API',
    termsOfService: 'http://api_url/terms/',
    contact: {
      name: 'Luis Chavez',
      email: 'luischavezcald@gmail.com',
      url: ''
    },
    license: {
      name: 'Apache 2.0',
      url: 'https://www.apache.org/licenses/LICENSE-2.0.html'
    },
    servers: [
      {
        url: 'http://localhost:4000/',
        description: 'Local server'
      },
      {
        url: 'https://api_url_testing',
        description: 'Testing server'
      },
      {
        url: 'https://api_url_production',
        description: 'Production server'
      }
    ]
  },
  tags: [
    {
      name: 'CRUD operations'
    }
  ],
  paths: {
    '/users': {
      get: {
        tags: ['CRUD operations'],
        description: 'Get users',
        operationId: 'getUsers',
        parameters: [],
        responses: {
          '200': {
            description: 'Users found',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Users'
                }
              }
            }
          }
        }
      },
      post: {
        tags: ['CRUD operations'],
        description: 'Get users',
        operationId: 'getUsers',
        parameters: [],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/User'
              }
            }
          },
          required: true
        },
        responses: {
          '200': {
            description: 'New user created',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/User'
                }
              }
            }
          },
          '400': {
            description: 'Invalid parameters',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Error'
                }
                // example: {
                //   message: 'User identificationNumbers 10, 20 already exist',
                //   internal_code: 'invalid_parameters'
                // }
              }
            }
          }
        }
      }
    }
  },
  components: {
    schemas: {
      User: {
        type: 'object',
        properties: {
          first_name: {
            type: 'string',
            example: 'Luis'
          },
          last_name: {
            type: 'string',
            example: 'Chavez'
          },
          state_id: {
            type: 'ObjectID',
            example: '5f3578346fe70f23b8231b77'
          }
        }
      },
      Users: {
        type: 'array',
        items: {
          $ref: '#/components/schemas/User'
        }
      },
      Error: {
        type: 'object',
        properties: {
          errors: {
            type: 'object',
            properties: {
              state_id: {
                type: 'object',
                properties: {
                  name: {
                    type: 'String',
                    example: 'ValidatorError'
                  },
                  message: {
                    type: 'String',
                    example: 'Path `state_id` is required.'
                  },
                  properties: {
                    type: 'object',
                    properties: {
                      message: {
                        type: 'String',
                        example: 'Path `state_id` is required.'
                      },
                      type: {
                        type: 'String',
                        example: 'required'
                      },
                      path: {
                        type: 'String',
                        example: 'state_id'
                      }
                    }
                  },
                  path: {
                    type: 'String',
                    example: 'state_id'
                  },
                  kind: {
                    type: 'String',
                    example: 'required'
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  security: [
    {
      ApiKeyAuth: []
    }
  ]
}
