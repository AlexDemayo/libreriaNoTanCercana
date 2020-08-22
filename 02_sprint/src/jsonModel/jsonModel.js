const fs = require('fs');
const path = require('path');

const jsonModel = (archivo) => {
    const funciones = {
        path: path.join (__dirname, '..', 'data', archivo + '.json'),
        leerJson: function() {
            const productsJson = fs.readFileSync(this.path, 'utf-8');
            const products = JSON.parse(productsJson)
            return products;
        },
        escribirJson: function (data) {
            data = JSON.stringify(data, null, ' ')
            
            fs.writeFileSync(this.path, data);
        },
        create: function (newData) {
            let allData = this.leerJson();
            allData = [...allData, newData];
            this.escribirJson(allData)
        },
        findById: function(id){
            const products = this.leerJson();
            const object = products.find(elem => elem.id == id)
            return object;
        },
        findBySomething: function(callback){
            const products = this.leerJson();
            const product = products.find(callback);
            return product;
        },
        
        filterBySomething: function(callback){
            const products = this.leerJson();
            const productsFiltered = products.filter(callback);
            return productsFiltered
        },
    }
    return funciones
}

module.exports = jsonModel;