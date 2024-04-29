# ms-onepoint

<p align="center">
  <img align="center" width="500px" src="https://i.ibb.co/LZ67ywk/IMG-4637.jpg" />
</p>
# ms-onepoint

#### Description
Project that integrates functions to interact with Microsoft Azure and OneDrive APIS.

## Install

```bash
$ npm install ms-onepoint
```


### Configurations of Credentials



**Returns**: Functions and Methods

| Functions              | Type           | Description                                                                                     |
|--------------------| ----------------- | ----------------------------------------------------------------------------------------------- |
| **authOneDrive**             |         -          |        Authentication with OneDrive using an authorization code.                                                                                    
| **generateCode** |               -    | Generation of authorization code               
| **refreshToken**    | - | Access token update.                                                                                  
| **createSharedLink**    |      -             | Creating a shared link.                                                  
| **uploadFileToOneDrive**     |        -           | Uploading files to OneDrive.                             


## Examples

#### Require module

```javascript
const onepoint = require("ms-onepoint")

```

+ Configuration of services of ms-onepoint

```javascript
onepoint.configureCredentials({
    drive: {
        driveId: '',
        parentId: ''
    },
    microsoftAzure: {
        clientId: '',
        clientSecret: '',
        redirectUri: '',
    }
})
```


#

#### AuthOneDrive

**Returns**: Authenticate with OneDrive using the generated auth code to access user data securely.

```javascript
const AuthenticateCodeAccess = async () => {
    const response = await onepoint.authOneDrive({
        code: process.env.ONEDRIVE_CODE 
    };
    return codeAccess;
};
```

#

#### GenerateCode

**Returns**: This method is used to generate a code for authentication purposes.

```javascript
const GenerateAuthCode = async () => {
    const codeAccess = await onepoint.generateAuthCode();
    return codeAccess;
};
```

#### RefreshAccessToken

**Returns**: This function refreshes the access token for OneDrive refreshing the token to maintain user authentication.

```javascript
const RefreshAccessToken = async (req, res) => {
    const { access_token } = await onepoint.refreshAccessToken({
        refreshAccessToken: process.env.ONEDRIVE_REFRESH_TOKEN 
    });
    return access_token;
};
```

#

#### UploadFileToOneDrive

**Returns**: This method is for uploading a file using a generated refreshToken.

```javascript
const UploadFileToOneDrive = async (req, res) => {
    const uploadFile = await onepoint.uploadFileToOneDrive({ 
        authToken: access_token,
        data: fs.readFileSync('./exmaple.png'),
        fileName: 'exmaple.png' 
    });
    return uploadFile.id;
};
```
#

#### CreateSharedLink

**Returns**: The body of the request defines properties of the sharing link your application is requesting [shareLink Docs](https://learn.microsoft.com/en-us/onedrive/developer/rest-api/api/driveitem_createlink?view=odsp-graph-online)

```javascript
const CreateSharedLink = async (req, res) => {
    const { link } = await onepoint.createSharedLink({
        authToken: access_token,
        fileId: id,
        type: { type: 'edit' }
    });
    return link;
};
```
