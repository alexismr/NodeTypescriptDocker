"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const fs = require("fs");
const hotel_1 = require("../model/hotel");
class HotelService {
    constructor() {
        this.LoadData()
            .then((res) => this._jsonMock = JSON.parse(res))
            .catch(err => this._jsonMock = err);
    }
    getAlldata() {
        return this._jsonMock;
    }
    getDataFilters(star, name) {
        let filldata = this._jsonMock;
        if (star != '0' && star != 'undefined')
            filldata = this._jsonMock.filter(x => x.stars == star);
        if (name && name != 'undefined')
            filldata = this.searchDelegate(filldata, name);
        return filldata;
    }
    deleteElement(id) {
        let status = false;
        this._jsonMock = this._jsonMock.filter((item) => {
            if (item.id == id)
                status = true;
            return item.id != id;
        });
        return status;
    }
    create(data) {
        let auxi = new hotel_1.HotelModel(data);
        this._jsonMock.push(auxi);
    }
    update(id, request) {
        let element = this._jsonMock.filter(item => {
            return item.id === id;
        })[0];
        if (element.length > 0) {
            const index = this._jsonMock.indexOf(element);
            const keys = Object.keys(request);
            console.log(keys);
            keys.forEach(key => element[key] = request[key]);
            this._jsonMock[index] = element;
            return true;
        }
        return false;
        ;
    }
    searchDelegate(arr, s) {
        var matches = [], i;
        arr.forEach((item) => {
            if (item.name && item.name.toLowerCase().indexOf(s.toLowerCase()) > -1)
                matches.push(item);
        });
        return matches;
    }
    LoadData() {
        return __awaiter(this, void 0, void 0, function* () {
            return fs.readFileSync('./src/data/MocksHotels.json');
        });
    }
}
exports.default = HotelService;
//# sourceMappingURL=hotel.service.js.map