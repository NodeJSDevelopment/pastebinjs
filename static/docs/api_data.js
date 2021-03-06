define({ api: [
  {
    "type": "delete",
    "url": "/api/post/:postId",
    "title": "Delete a post",
    "name": "deletePost",
    "group": "Posts",
    "version": "1.0.0",
    "description": "<p>Deletes a post</p>",
    "examples": [
      {
        "title": "Example Body",
        "content": "{\n\"password\" : \"1234\",\n}\n",
        "type": "JSON"
      }
    ],
    "filename": "./controllers/api.js"
  },
  {
    "type": "get",
    "url": "/api/post/:postId/download",
    "title": "Download Post As File",
    "name": "downloadPost",
    "group": "Posts",
    "version": "1.0.0",
    "description": "<p>Sends the post content as a file download</p>",
    "filename": "./controllers/api.js"
  },
  {
    "type": "get",
    "url": "/api/config",
    "title": "Retrieve pastebin configuration",
    "name": "getConfig",
    "group": "Posts",
    "version": "1.0.0",
    "description": "<p>Gets a subset of the configuration to let the client know things  like the maximum number of characters in a post, the supported expiry times, and the supported languages.</p>",
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "{\n  \"postRestrictions\" : {\n\t\"titleLength\": 50,\n\t\"pasteLength\" : 524288\n  },\n  \"supportedExpiryTimes\" : [\n      { label: \"Never\", time: 0 },\n      { label: \"5 Minutes\", time: 5 },\n      ...\n  ],\n  \"supportedLanguages\" : [\n     {name: \"C#\", mime: \"text/x-csharp\", mode: \"clike\", ext: [\"cs\"], alias: [\"csharp\"]},\n     ...\n  ]\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/api.js"
  },
  {
    "type": "get",
    "url": "/api/post/:postId",
    "title": "Retrieve Post",
    "name": "getPost",
    "group": "Posts",
    "version": "1.0.0",
    "description": "<p>Retrieves data for a post</p>",
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "{\n \"paste\" : \"Console.WriteLine(\\\"Hello World\\\");\",\n \"title\" : \"Hello World Example\",\n \"language\" : \"csharp\",\n \"expiry\": \"2014-12-28T01:43:25.101Z\",\n \"expiryValue\": 1440,\n \"createdAt\" : \"2014-12-27T01:43:25.101Z\",\n \"hidden\": true\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/api.js"
  },
  {
    "type": "get",
    "url": "/api/post/:postId/raw",
    "title": "Send post as raw text",
    "name": "rawPost",
    "group": "Posts",
    "version": "1.0.0",
    "description": "<p>Sends the post content as raw plain-text</p>",
    "filename": "./controllers/api.js"
  },
  {
    "type": "post",
    "url": "/api/post",
    "title": "Create Post",
    "name": "submitPost",
    "group": "Posts",
    "version": "1.0.0",
    "description": "<p>Creates a new post</p>",
    "examples": [
      {
        "title": "Example Body",
        "content": "{\n\"title\" : \"Hello World Example\",\n\"language\": \"C#\",\n\"paste\" : \"Console.WriteLine(\\\"Hello World\\\");\"\n\"hidden\" : false,\n\"expiry\" : 3600\n}\n",
        "type": "JSON"
      }
    ],
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "{\n \"id\" : \"548da7e05b7c3d9c09abd416\",\n \"deletePassword\": \"1234\"\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/api.js"
  },
  {
    "type": "get",
    "url": "/api/recent",
    "title": "Retrieve recent posts",
    "name": "getRecentPosts",
    "group": "Recent_Posts",
    "version": "1.0.0",
    "description": "<p>Gets a list of recent posts.</p>",
    "success": {
      "examples": [
        {
          "title": "Successful Response",
          "content": "{\n  \"posts\": [\n      {\n          \"title\": \"Test Post\",\n          \"language\": \"csharp\",\n          \"_id\": \"548b2cddf59e4ffc12000001\"\n      }\n  ]\n}\n",
          "type": "json"
        }
      ]
    },
    "filename": "./controllers/api.js"
  }
] });