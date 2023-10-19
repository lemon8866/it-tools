export const codesByCategories: {
  category: string
  codes: {
    code: number
    name: string
    description: string
    type: 'HTTP' | 'WebDav'
  }[]
}[] = [
  {
    category: '1xx 应答',
    codes: [
      {
        code: 100,
        name: 'Continue',
        description: '正在等待客户端发出请求的正文。',
        type: 'HTTP',
      },
      {
        code: 101,
        name: 'Switching Protocols',
        description: '服务器已同意更改协议。',
        type: 'HTTP',
      },
      {
        code: 102,
        name: 'Processing',
        description: '服务器正在处理该请求，但还没有可用的响应。',
        type: 'WebDav',
      },
      {
        code: 103,
        name: 'Early Hints',
        description: '服务器在最终HTTP消息之前返回一些响应头。',
        type: 'HTTP',
      },
    ],
  },
  {
    category: '2xx 成功',
    codes: [
      {
        code: 200,
        name: 'OK',
        description: '成功HTTP请求的标准响应。',
        type: 'HTTP',
      },
      {
        code: 201,
        name: 'Created',
        description: '请求已完成，从而创建了一个新资源。',
        type: 'HTTP',
      },
      {
        code: 202,
        name: 'Accepted',
        description: '请求已被接受进行处理，但处理尚未完成。',
        type: 'HTTP',
      },
      {
        code: 203,
        name: 'Non-Authoritative Information',
        description:
          '请求成功，但原始请求的内容已被转换代理修改。',
        type: 'HTTP',
      },
      {
        code: 204,
        name: 'No Content',
        description: '服务器已成功处理该请求，并且未返回任何内容。',
        type: 'HTTP',
      },
      {
        code: 205,
        name: 'Reset Content',
        description: '服务器指示重新初始化发送此请求的文档视图。',
        type: 'HTTP',
      },
      {
        code: 206,
        name: 'Partial Content',
        description: '由于客户端发送了范围标头，服务器仅传递部分资源。',
        type: 'HTTP',
      },
      {
        code: 207,
        name: 'Multi-Status',
        description:
          '下面的消息正文是一条XML消息，可以包含许多单独的响应代码。',
        type: 'WebDav',
      },
      {
        code: 208,
        name: 'Already Reported',
        description:
          'DAV绑定的成员已在（多状态）响应的前一部分中枚举。',
        type: 'WebDav',
      },
      {
        code: 226,
        name: 'IM Used',
        description:
          '服务器已经完成了对资源的请求，响应是结果的表示。',
        type: 'HTTP',
      },
    ],
  },
  {
    category: '3xx 重定向',
    codes: [
      {
        code: 300,
        name: 'Multiple Choices',
        description: '指示客户端可能遵循的资源的多个选项。',
        type: 'HTTP',
      },
      {
        code: 301,
        name: 'Moved Permanently',
        description: '这个请求和所有将来的请求都应该指向给定的URI。',
        type: 'HTTP',
      },
      {
        code: 302,
        name: 'Found',
        description: '重定向到另一个URL。这是行业实践与标准相矛盾的一个例子。',
        type: 'HTTP',
      },
      {
        code: 303,
        name: 'See Other',
        description: '可以使用GET方法在另一个URI下找到对请求的响应。',
        type: 'HTTP',
      },
      {
        code: 304,
        name: 'Not Modified',
        description:
          '指示自请求标头指定的版本以来，资源未被修改。',
        type: 'HTTP',
      },
      {
        code: 305,
        name: 'Use Proxy',
        description:
          '请求的资源只能通过代理程序获得，响应中提供了代理程序的地址。',
        type: 'HTTP',
      },
      {
        code: 306,
        name: 'Switch Proxy',
        description: '不再使用。最初的意思是“后续请求应该使用指定的代理。”',
        type: 'HTTP',
      },
      {
        code: 307,
        name: 'Temporary Redirect',
        description:
          '在这种情况下，应该使用另一个URI重复请求；但是，将来的请求仍然应该使用原始URI。',
        type: 'HTTP',
      },
      {
        code: 308,
        name: 'Permanent Redirect',
        description: 'T该请求和所有未来的请求都应该使用另一个URI来重复。',
        type: 'HTTP',
      },
    ],
  },
  {
    category: '4xx 客户端异常',
    codes: [
      {
        code: 400,
        name: 'Bad Request',
        description: '由于明显的客户端错误，服务器无法或将不会处理该请求。',
        type: 'HTTP',
      },
      {
        code: 401,
        name: 'Unauthorized',
        description:
          '类似于403 Forbidden，但专门用于需要身份验证且身份验证失败或尚未提供时使用。',
        type: 'HTTP',
      },
      {
        code: 402,
        name: 'Payment Required',
        description:
          '保留以备将来使用。最初的意图是，该代码可能被用作某种形式的数字现金或小额支付计划的一部分。',
        type: 'HTTP',
      },
      {
        code: 403,
        name: 'Forbidden',
        description:
          '请求有效，但服务器拒绝执行操作。用户可能没有资源所需的权限。',
        type: 'HTTP',
      },
      {
        code: 404,
        name: 'Not Found',
        description: '找不到请求的资源，但将来可能可用。',
        type: 'HTTP',
      },
      {
        code: 405,
        name: 'Method Not Allowed',
        description: '请求的资源不支持请求方法。',
        type: 'HTTP',
      },
      {
        code: 406,
        name: 'Not Acceptable',
        description:
          '根据请求中发送的Accept标头，请求的资源只能生成不可接受的内容。',
        type: 'HTTP',
      },
      {
        code: 407,
        name: 'Proxy Authentication Required',
        description: '客户端必须首先使用代理对自己进行身份验证。',
        type: 'HTTP',
      },
      {
        code: 408,
        name: 'Request Timeout',
        description: '服务器在等待请求时超时。',
        type: 'HTTP',
      },
      {
        code: 409,
        name: 'Conflict',
        description:
          '指示由于请求中存在冲突（例如编辑冲突）而无法处理请求。',
        type: 'HTTP',
      },
      {
        code: 410,
        name: 'Gone',
        description: '指示请求的资源不再可用，并且将不再可用。',
        type: 'HTTP',
      },
      {
        code: 411,
        name: 'Length Required',
        description:
          '请求没有指定其内容的长度，这是请求的资源所要求的。',
        type: 'HTTP',
      },
      {
        code: 412,
        name: 'Precondition Failed',
        description: '服务器不满足请求者在请求中设置的前提条件之一。',
        type: 'HTTP',
      },
      {
        code: 413,
        name: 'Payload Too Large',
        description: '该请求大于服务器愿意或能够处理的请求。',
        type: 'HTTP',
      },
      {
        code: 414,
        name: 'URI Too Long',
        description: '提供的URI太长，服务器无法处理。',
        type: 'HTTP',
      },
      {
        code: 415,
        name: 'Unsupported Media Type',
        description: '请求实体具有服务器或资源不支持的媒体类型。',
        type: 'HTTP',
      },
      {
        code: 416,
        name: 'Range Not Satisfiable',
        description: '客户端要求提供文件的一部分，但服务器无法提供该部分。',
        type: 'HTTP',
      },
      {
        code: 417,
        name: 'Expectation Failed',
        description: '服务器无法满足Expect请求标头字段的要求。',
        type: 'HTTP',
      },
      {
        code: 418,
        name: 'I\'m a teapot',
        description: '服务员拒绝了用茶壶冲咖啡的尝试。',
        type: 'HTTP',
      },
      {
        code: 421,
        name: 'Misdirected Request',
        description: '请求指向的服务器无法产生响应。',
        type: 'HTTP',
      },
      {
        code: 422,
        name: 'Unprocessable Entity',
        description: '请求格式正确，但由于语义错误而无法执行。',
        type: 'HTTP',
      },
      {
        code: 423,
        name: 'Locked',
        description: '正在访问的资源已锁定。',
        type: 'HTTP',
      },
      {
        code: 424,
        name: 'Failed Dependency',
        description: '由于以前的请求失败，请求失败。',
        type: 'HTTP',
      },
      {
        code: 425,
        name: 'Too Early',
        description: '表示服务器不愿意冒险处理可能重播的请求。',
        type: 'HTTP',
      },
      {
        code: 426,
        name: 'Upgrade Required',
        description: '客户端应该切换到不同的协议，如TLS/1.0。',
        type: 'HTTP',
      },
      {
        code: 428,
        name: 'Precondition Required',
        description: '源服务器要求请求是有条件的。',
        type: 'HTTP',
      },
      {
        code: 429,
        name: 'Too Many Requests',
        description: '用户在给定的时间内发送了太多请求。',
        type: 'HTTP',
      },
      {
        code: 431,
        name: 'Request Header Fields Too Large',
        description:
          '服务器不愿意处理该请求，因为单个标头字段或所有标头字段都太大。',
        type: 'HTTP',
      },
      {
        code: 451,
        name: 'Unavailable For Legal Reasons',
        description:
          '服务器运营商已收到拒绝访问资源或包括所请求资源的一组资源的合法请求。',
        type: 'HTTP',
      },
    ],
  },
  {
    category: '5xx 服务器异常',
    codes: [
      {
        code: 500,
        name: 'Internal Server Error',
        description:
          '一般错误消息，当遇到意外情况并且没有更具体的消息时给出。',
        type: 'HTTP',
      },
      {
        code: 501,
        name: 'Not Implemented',
        description:
          '服务器要么无法识别请求方法，要么缺乏满足请求的能力。',
        type: 'HTTP',
      },
      {
        code: 502,
        name: 'Bad Gateway',
        description:
          '服务器充当网关或代理，从上游服务器接收到无效响应。',
        type: 'HTTP',
      },
      {
        code: 503,
        name: 'Service Unavailable',
        description: '服务器当前不可用（因为服务器过载或因维护而停机）。',
        type: 'HTTP',
      },
      {
        code: 504,
        name: 'Gateway Timeout',
        description:
          '服务器充当网关或代理，没有及时收到来自上游服务器的响应。',
        type: 'HTTP',
      },
      {
        code: 505,
        name: 'HTTP Version Not Supported',
        description: '服务器不支持请求中使用的HTTP协议版本。',
        type: 'HTTP',
      },
      {
        code: 506,
        name: 'Variant Also Negotiates',
        description: '请求的透明内容协商会导致循环引用。',
        type: 'HTTP',
      },
      {
        code: 507,
        name: 'Insufficient Storage',
        description: '服务器无法存储完成请求所需的表示形式。',
        type: 'HTTP',
      },
      {
        code: 508,
        name: 'Loop Detected',
        description: '服务器在处理请求时检测到无限循环。',
        type: 'HTTP',
      },
      {
        code: 510,
        name: 'Not Extended',
        description: '服务器需要对请求进行进一步的扩展才能完成它。',
        type: 'HTTP',
      },
      {
        code: 511,
        name: 'Network Authentication Required',
        description: '客户端需要进行身份验证才能获得网络访问权限。',
        type: 'HTTP',
      },
    ],
  },
];
