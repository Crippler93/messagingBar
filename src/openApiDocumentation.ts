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
        description: 'Create user',
        operationId: 'postUser',
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
              }
            }
          }
        }
      }
    },
    '/messages': {
      get: {
        tags: ['CRUD operations'],
        description: 'Get all messages',
        operationId: 'getMessages',
        parameters: [],
        responses: {
          '200': {
            description: 'Messages found',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Messages'
                }
              }
            }
          }
        }
      },
      post: {
        tags: ['CRUD operations'],
        description: 'Create Message',
        operationId: 'postMessage',
        parameters: [],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/Message'
              }
            }
          },
          required: true
        },
        responses: {
          '200': {
            description: 'New message created',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/Message'
                }
              }
            }
          }
        }
      }
    },
    '/states': {
      get: {
        tags: ['CRUD operations'],
        description: 'Get all states',
        operationId: 'getStates',
        parameters: [],
        responses: {
          '200': {
            description: 'States found',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/States'
                }
              }
            }
          }
        }
      },
      post: {
        tags: ['CRUD operations'],
        description: 'Create state',
        operationId: 'postState',
        parameters: [],
        requestBody: {
          content: {
            'application/json': {
              schema: {
                $ref: '#/components/schemas/State'
              }
            }
          },
          required: true
        },
        responses: {
          '200': {
            description: 'New state created',
            content: {
              'application/json': {
                schema: {
                  $ref: '#/components/schemas/State'
                }
              }
            }
          }
        }
      }
    }
  },
  components: {
    schemas: {
      Messages: {
        type: 'array',
        items: {
          $ref: '#/components/schemas/Message'
        }
      },
      Message: {
        type: 'object',
        properties: {
          value: {
            type: 'string',
            example: 'Im going to take a break'
          }
        }
      },
      States: {
        type: 'array',
        items: {
          $ref: '#/components/schemas/State'
        }
      },
      State: {
        type: 'object',
        properties: {
          value: {
            type: 'string',
            example: 'Online'
          }
        }
      },
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
