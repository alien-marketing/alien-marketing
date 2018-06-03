class Config {
 
    route(key) {
        let data = {
            'id':'AKIAIU5GEYBKS7HLJ4LQ',
            'secret':'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',
            'host':'https://s3-us-west-2.amazonaws.com/alien-marketing/',
            'users':'https://s3-us-west-2.amazonaws.com/alien-marketing/data/users/user-data.json',
            'user':'https://s3-us-west-2.amazonaws.com/alien-marketing/data/users/',
            'salt':'lufrewop'
        };
        return data[key];
    }
 
}