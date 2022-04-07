

module.exports = class DataFormater {
  formats = {
    html: { convert: this.convertDataToHTML },
    plain: { convert: this.convertDataToPlainText},
    json: { convert: this.convertDataToJson }
  }
  

  runConvert(format, data){
    this.currentFormat = this.formats[format];
    if (this.currentFormat == undefined) {
      this.currentFormat = this.formats['plain'];
    }
    return this.currentFormat.convert(data)
  }

  convertDataToHTML(data){
    return `<p>${data}</p>`
  }

  convertDataToPlainText(data){
    return data
  }
  convertDataToJson(data){
    return {data:`${data}`}
  }
  
}

