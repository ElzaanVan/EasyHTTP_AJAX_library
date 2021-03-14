function easyHttp() {
  this.http = new XMLHttpRequest();
}

//Make a GET request
easyHttp.prototype.get = function (url, callback) {
  this.http.open("GET", url, true);
  this.http.onload = () => {
    if (this.http.status === 200) {
      callback(null, this.http.responseText);
    } else {
      callback("Error :" + this.http.status);
    }
  }

  this.http.send();
};

//Make a POST request
easyHttp.prototype.post = function(url, data, callback){
  this.http.open("POST", url, true);
  this.http.setRequestHeader("Content-type", "application/JSON");

  this.http.onload = () => {    
    callback(null, this.http.responseText);
  }
  this.http.send(JSON.stringify(data));
}

//Make a PUT request
easyHttp.prototype.put = function(url, data, callback){
  this.http.open("PUT", url, true);
  this.http.setRequestHeader("Content-type", "application/JSON");

  this.http.onload = () => {    
    callback(null, this.http.responseText);
  }
  this.http.send(JSON.stringify(data));
}

//Make a DELETE request
easyHttp.prototype.delete = function (url, callback) {
  this.http.open("DELETE", url, true);
  this.http.onload = () => {
    if (this.http.status === 200) {
      callback(null, "Post Deleted");
    } else {
      callback("Error :" + this.http.status);
    }
  }

  this.http.send();
};