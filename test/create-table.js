const ava = require('ava');
const Parser = require('../lib');

const tests = {
  'Should create test table with all types of columns.': {
    queries: [
      `CREATE TABLE person (
        id INT (10) UNSIGNED NOT NULL AUTO_INCREMENT KEY,
        age SMALLINT ZEROFILL NULL,
        ssn VARCHAR(255) UNIQUE,
        story TEXT DEFAULT 'once upon a time',
        gender ENUM ('F', 'M', 'O') CHARACTER SET utf8 COLLATE utf8_general_ci,
        sizes SET ('S', 'M') COLLATE utf8_general_ci,
        name VARCHAR(12),
        status BIT DEFAULT b'1' STORAGE MEMORY,
        twobits BIT(2) DEFAULT 0,
        salary DECIMAL(5) COLUMN_FORMAT DYNAMIC,
        balance FLOAT(7,2) COMMENT 'account balance',
        city_id INTEGER REFERENCES cities (id 20 ASC, local_id) MATCH FULL,
        family_id INTEGER REFERENCES families (id) MATCH SIMPLE ON DELETE SET NULL,
        dog_id INTEGER REFERENCES dogs (id) ON UPDATE NO ACTION,
        birthtime TIME,
        birthdate DATE,
        initials CHAR(5) CHARACTER SET utf8,
        created_at DATETIME(3),
        updated_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
        avatar TINYBLOB,
        image BLOB(1024),
        model JSON,
        homes GEOMETRYCOLLECTION
      )`
    ],
    expect: {
      id: 'MAIN',
      def: [
        {
          id: 'P_DDS',
          def: {
            id: 'P_CREATE_TABLE',
            def: {
              id: 'P_CREATE_TABLE_COMMON',
              def: {
                table: 'person',
                columnsDef: {
                  id: 'O_CREATE_TABLE_COLUMNS_WRAPPER',
                  def: [
                    {
                      id: 'O_CREATE_TABLE_CREATE_DEFINITION',
                      def: {
                        column: 'id',
                        def: {
                          datatype: {
                            id: 'O_DATATYPE',
                            def: {
                              id: 'O_INTEGER_DATATYPE',
                              def: {
                                datatype: 'INT',
                                width: 10
                              }
                            }
                          },
                          datatypeSpecs: [
                            {
                              id: 'O_COLUMN_DATATYPE_SPEC',
                              def: {
                                unsigned: true
                              }
                            }
                          ],
                          columnDefinitions: [
                            {
                              id: 'O_COLUMN_DEFINITION_COMMON',
                              def: {
                                nullable: false
                              }
                            },
                            {
                              id: 'O_COLUMN_DEFINITION_COMMON',
                              def: {
                                autoincrement: true
                              }
                            },
                            {
                              id: 'O_COLUMN_DEFINITION_COMMON',
                              def: {
                                primary: true
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      id: 'O_CREATE_TABLE_CREATE_DEFINITION',
                      def: {
                        column: 'age',
                        def: {
                          datatype: {
                            id: 'O_DATATYPE',
                            def: {
                              id: 'O_INTEGER_DATATYPE',
                              def: {
                                datatype: 'SMALLINT',
                                width: 2
                              }
                            }
                          },
                          datatypeSpecs: [
                            {
                              id: 'O_COLUMN_DATATYPE_SPEC',
                              def: {
                                zerofill: true
                              }
                            }
                          ],
                          columnDefinitions: [
                            {
                              id: 'O_COLUMN_DEFINITION_COMMON',
                              def: {
                                nullable: true
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      id: 'O_CREATE_TABLE_CREATE_DEFINITION',
                      def: {
                        column: 'ssn',
                        def: {
                          datatype: {
                            id: 'O_DATATYPE',
                            def: {
                              id: 'O_VARIABLE_STRING_DATATYPE',
                              def: {
                                datatype: 'VARCHAR',
                                length: 255
                              }
                            }
                          },
                          datatypeSpecs: [],
                          columnDefinitions: [
                            {
                              id: 'O_COLUMN_DEFINITION_COMMON',
                              def: {
                                unique: true
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      id: 'O_CREATE_TABLE_CREATE_DEFINITION',
                      def: {
                        column: 'story',
                        def: {
                          datatype: {
                            id: 'O_DATATYPE',
                            def: {
                              id: 'O_FIXED_STRING_DATATYPE',
                              def: {
                                datatype: 'TEXT',
                                length: null
                              }
                            }
                          },
                          datatypeSpecs: [],
                          columnDefinitions: [
                            {
                              id: 'O_COLUMN_DEFINITION_COMMON',
                              def: {
                                default: 'once upon a time'
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      id: 'O_CREATE_TABLE_CREATE_DEFINITION',
                      def: {
                        column: 'gender',
                        def: {
                          datatype: {
                            id: 'O_DATATYPE',
                            def: {
                              id: 'O_ENUM_DATATYPE',
                              def: {
                                datatype: 'ENUM',
                                values: [
                                  'F',
                                  'M',
                                  'O'
                                ]
                              }
                            }
                          },
                          datatypeSpecs: [
                            {
                              id: 'O_COLUMN_DATATYPE_SPEC',
                              def: {
                                charset: 'utf8'
                              }
                            },
                            {
                              id: 'O_COLUMN_DATATYPE_SPEC',
                              def: {
                                collation: 'utf8_general_ci'
                              }
                            }
                          ],
                          columnDefinitions: []
                        }
                      }
                    },
                    {
                      id: 'O_CREATE_TABLE_CREATE_DEFINITION',
                      def: {
                        column: 'sizes',
                        def: {
                          datatype: {
                            id: 'O_DATATYPE',
                            def: {
                              id: 'O_SET_DATATYPE',
                              def: {
                                datatype: 'SET',
                                values: [
                                  'S',
                                  'M'
                                ]
                              }
                            }
                          },
                          datatypeSpecs: [
                            {
                              id: 'O_COLUMN_DATATYPE_SPEC',
                              def: {
                                collation: 'utf8_general_ci'
                              }
                            }
                          ],
                          columnDefinitions: []
                        }
                      }
                    },
                    {
                      id: 'O_CREATE_TABLE_CREATE_DEFINITION',
                      def: {
                        column: 'name',
                        def: {
                          datatype: {
                            id: 'O_DATATYPE',
                            def: {
                              id: 'O_VARIABLE_STRING_DATATYPE',
                              def: {
                                datatype: 'VARCHAR',
                                length: 12
                              }
                            }
                          },
                          datatypeSpecs: [],
                          columnDefinitions: []
                        }
                      }
                    },
                    {
                      id: 'O_CREATE_TABLE_CREATE_DEFINITION',
                      def: {
                        column: 'status',
                        def: {
                          datatype: {
                            id: 'O_DATATYPE',
                            def: {
                              id: 'O_BIT_DATATYPE',
                              def: {
                                datatype: 'BIT',
                                length: 1
                              }
                            }
                          },
                          datatypeSpecs: [],
                          columnDefinitions: [
                            {
                              id: 'O_COLUMN_DEFINITION_COMMON',
                              def: {
                                default: "b'1'"
                              }
                            },
                            {
                              id: 'O_COLUMN_DEFINITION_COMMON',
                              def: {
                                storage: 'MEMORY'
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      id: 'O_CREATE_TABLE_CREATE_DEFINITION',
                      def: {
                        column: 'twobits',
                        def: {
                          datatype: {
                            id: 'O_DATATYPE',
                            def: {
                              id: 'O_BIT_DATATYPE',
                              def: {
                                datatype: 'BIT',
                                length: 2
                              }
                            }
                          },
                          datatypeSpecs: [],
                          columnDefinitions: [
                            {
                              id: 'O_COLUMN_DEFINITION_COMMON',
                              def: {
                                default: 0
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      id: 'O_CREATE_TABLE_CREATE_DEFINITION',
                      def: {
                        column: 'salary',
                        def: {
                          datatype: {
                            id: 'O_DATATYPE',
                            def: {
                              id: 'O_FIXED_POINT_DATATYPE',
                              def: {
                                datatype: 'DECIMAL',
                                def: {
                                  digits: 5,
                                  decimals: 0
                                }
                              }
                            }
                          },
                          datatypeSpecs: [],
                          columnDefinitions: [
                            {
                              id: 'O_COLUMN_DEFINITION_COMMON',
                              def: {
                                format: 'DYNAMIC'
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      id: 'O_CREATE_TABLE_CREATE_DEFINITION',
                      def: {
                        column: 'balance',
                        def: {
                          datatype: {
                            id: 'O_DATATYPE',
                            def: {
                              id: 'O_FLOATING_POINT_DATATYPE',
                              def: {
                                datatype: 'FLOAT',
                                def: {
                                  digits: 9,
                                  decimals: 2
                                }
                              }
                            }
                          },
                          datatypeSpecs: [],
                          columnDefinitions: [
                            {
                              id: 'O_COLUMN_DEFINITION_COMMON',
                              def: {
                                comment: 'account balance'
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      id: 'O_CREATE_TABLE_CREATE_DEFINITION',
                      def: {
                        column: 'city_id',
                        def: {
                          datatype: {
                            id: 'O_DATATYPE',
                            def: {
                              id: 'O_INTEGER_DATATYPE',
                              def: {
                                datatype: 'INTEGER',
                                width: 4
                              }
                            }
                          },
                          datatypeSpecs: [],
                          columnDefinitions: [
                            {
                              id: 'O_COLUMN_DEFINITION_COMMON',
                              def: {
                                reference: {
                                  id: 'P_COLUMN_REFERENCE',
                                  def: {
                                    table: 'cities',
                                    columns: [
                                      {
                                        id: 'P_INDEX_COLUMN',
                                        def: {
                                          column: 'id',
                                          length: 20,
                                          sort: null
                                        }
                                      },
                                      {
                                        id: 'P_INDEX_COLUMN',
                                        def: {
                                          column: 'local_id',
                                          length: null,
                                          sort: null
                                        }
                                      }
                                    ],
                                    match: 'FULL',
                                    on: null
                                  }
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      id: 'O_CREATE_TABLE_CREATE_DEFINITION',
                      def: {
                        column: 'family_id',
                        def: {
                          datatype: {
                            id: 'O_DATATYPE',
                            def: {
                              id: 'O_INTEGER_DATATYPE',
                              def: {
                                datatype: 'INTEGER',
                                width: 4
                              }
                            }
                          },
                          datatypeSpecs: [],
                          columnDefinitions: [
                            {
                              id: 'O_COLUMN_DEFINITION_COMMON',
                              def: {
                                reference: {
                                  id: 'P_COLUMN_REFERENCE',
                                  def: {
                                    table: 'families',
                                    columns: [
                                      {
                                        id: 'P_INDEX_COLUMN',
                                        def: {
                                          column: 'id',
                                          length: null,
                                          sort: null
                                        }
                                      }
                                    ],
                                    match: 'SIMPLE',
                                    on: {
                                      trigger: 'DELETE',
                                      action: 'SET NULL'
                                    }
                                  }
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      id: 'O_CREATE_TABLE_CREATE_DEFINITION',
                      def: {
                        column: 'dog_id',
                        def: {
                          datatype: {
                            id: 'O_DATATYPE',
                            def: {
                              id: 'O_INTEGER_DATATYPE',
                              def: {
                                datatype: 'INTEGER',
                                width: 4
                              }
                            }
                          },
                          datatypeSpecs: [],
                          columnDefinitions: [
                            {
                              id: 'O_COLUMN_DEFINITION_COMMON',
                              def: {
                                reference: {
                                  id: 'P_COLUMN_REFERENCE',
                                  def: {
                                    table: 'dogs',
                                    columns: [
                                      {
                                        id: 'P_INDEX_COLUMN',
                                        def: {
                                          column: 'id',
                                          length: null,
                                          sort: null
                                        }
                                      }
                                    ],
                                    match: null,
                                    on: {
                                      trigger: 'UPDATE',
                                      action: 'NO ACTION'
                                    }
                                  }
                                }
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      id: 'O_CREATE_TABLE_CREATE_DEFINITION',
                      def: {
                        column: 'birthtime',
                        def: {
                          datatype: {
                            id: 'O_DATATYPE',
                            def: {
                              id: 'O_DATETIME_DATATYPE',
                              def: {
                                datatype: 'TIME',
                                fractional: 0
                              }
                            }
                          },
                          datatypeSpecs: [],
                          columnDefinitions: []
                        }
                      }
                    },
                    {
                      id: 'O_CREATE_TABLE_CREATE_DEFINITION',
                      def: {
                        column: 'birthdate',
                        def: {
                          datatype: {
                            id: 'O_DATATYPE',
                            def: {
                              id: 'O_DATETIME_DATATYPE',
                              def: {
                                datatype: 'DATE',
                                fractional: 0
                              }
                            }
                          },
                          datatypeSpecs: [],
                          columnDefinitions: []
                        }
                      }
                    },
                    {
                      id: 'O_CREATE_TABLE_CREATE_DEFINITION',
                      def: {
                        column: 'initials',
                        def: {
                          datatype: {
                            id: 'O_DATATYPE',
                            def: {
                              id: 'O_VARIABLE_STRING_DATATYPE',
                              def: {
                                datatype: 'CHAR',
                                length: 5
                              }
                            }
                          },
                          datatypeSpecs: [
                            {
                              id: 'O_COLUMN_DATATYPE_SPEC',
                              def: {
                                charset: 'utf8'
                              }
                            }
                          ],
                          columnDefinitions: []
                        }
                      }
                    },
                    {
                      id: 'O_CREATE_TABLE_CREATE_DEFINITION',
                      def: {
                        column: 'created_at',
                        def: {
                          datatype: {
                            id: 'O_DATATYPE',
                            def: {
                              id: 'O_DATETIME_DATATYPE',
                              def: {
                                datatype: 'DATETIME',
                                fractional: 3
                              }
                            }
                          },
                          datatypeSpecs: [],
                          columnDefinitions: []
                        }
                      }
                    },
                    {
                      id: 'O_CREATE_TABLE_CREATE_DEFINITION',
                      def: {
                        column: 'updated_at',
                        def: {
                          datatype: {
                            id: 'O_DATATYPE',
                            def: {
                              id: 'O_DATETIME_DATATYPE',
                              def: {
                                datatype: 'TIMESTAMP',
                                fractional: 0
                              }
                            }
                          },
                          datatypeSpecs: [],
                          columnDefinitions: [
                            {
                              id: 'O_COLUMN_DEFINITION_COMMON',
                              def: {
                                nullable: false
                              }
                            },
                            {
                              id: 'O_COLUMN_DEFINITION_COMMON',
                              def: {
                                default: 'CURRENT_TIMESTAMP'
                              }
                            }
                          ]
                        }
                      }
                    },
                    {
                      id: 'O_CREATE_TABLE_CREATE_DEFINITION',
                      def: {
                        column: 'avatar',
                        def: {
                          datatype: {
                            id: 'O_DATATYPE',
                            def: {
                              id: 'O_FIXED_STRING_DATATYPE',
                              def: {
                                datatype: 'TINYBLOB'
                              }
                            }
                          },
                          datatypeSpecs: [],
                          columnDefinitions: []
                        }
                      }
                    },
                    {
                      id: 'O_CREATE_TABLE_CREATE_DEFINITION',
                      def: {
                        column: 'image',
                        def: {
                          datatype: {
                            id: 'O_DATATYPE',
                            def: {
                              id: 'O_FIXED_STRING_DATATYPE',
                              def: {
                                datatype: 'BLOB',
                                length: 1024
                              }
                            }
                          },
                          datatypeSpecs: [],
                          columnDefinitions: []
                        }
                      }
                    },
                    {
                      id: 'O_CREATE_TABLE_CREATE_DEFINITION',
                      def: {
                        column: 'model',
                        def: {
                          datatype: {
                            id: 'O_DATATYPE',
                            def: {
                              id: 'O_JSON_DATATYPE',
                              def: {
                                datatype: 'JSON'
                              }
                            }
                          },
                          datatypeSpecs: [],
                          columnDefinitions: []
                        }
                      }
                    },
                    {
                      id: 'O_CREATE_TABLE_CREATE_DEFINITION',
                      def: {
                        column: 'homes',
                        def: {
                          datatype: {
                            id: 'O_DATATYPE',
                            def: {
                              id: 'O_SPATIAL_DATATYPE',
                              def: {
                                datatype: 'GEOMETRYCOLLECTION'
                              }
                            }
                          },
                          datatypeSpecs: [],
                          columnDefinitions: []
                        }
                      }
                    }
                  ]
                },
                tableOptions: null,
                partitionsDef: null
              }
            }
          }
        }
      ]
    }
  }
};

Object.getOwnPropertyNames(tests).forEach(description => {
  const test = tests[description];

  test.queries.forEach(query => {

    const testname = `${description} | ${query}`;

    const parser = new Parser();
    parser.feed(query);

    ava(testname, t => {
      const value = parser.results;
      t.deepEqual(value, test.expect);
    });
  });
});
