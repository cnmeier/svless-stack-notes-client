export default {
    MAX_ATTACHMENT_SIZE: 5000000,
    s3: {
        REGION: "us-west-2",
        BUCKET: "svless-notes-upload"
    },
    apiGateway: {
        REGION: "us-west-2",
        URL: "https://vp8f8i4l7b.execute-api.us-west-2.amazonaws.com/prod"
    },
    cognito: {
        REGION: "us-west-2",
        USER_POOL_ID: "us-west-2_IbiteypbC",
        APP_CLIENT_ID: "1ug75thfm2j4d47nfa04hvqegm",
        IDENTITY_POOL_ID: "us-west-2:822e6176-d3b9-4156-88a6-afbc4c880b2b"
    }
};
